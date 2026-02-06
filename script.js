(async () => {
	const heading = document.createElement('h1');
	heading.innerText = 'Welcome to Cap Stone Project!';
	document.body.prepend(heading);

	const container = document.getElementById('table-container') || (() => {
		const c = document.createElement('div');
		c.id = 'table-container';
		document.body.appendChild(c);
		return c;
	})();

	const paginationEl = document.getElementById('pagination-controls');

	try {
		const res = await fetch(encodeURI('MOCK_DATA (14).json'));
		if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
		const allData = await res.json();

		const pageSize = 20;
		let currentPage = 1;
		const totalPages = Math.max(1, Math.ceil(allData.length / pageSize));

		function renderTablePage() {
			const start = (currentPage - 1) * pageSize;
			const pageData = allData.slice(start, start + pageSize);
			renderTable(pageData, container, allData);
			renderPaginationControls();
		}

		function renderPaginationControls() {
			if (!paginationEl) return;
			paginationEl.innerHTML = '';

			const prev = document.createElement('button');
			prev.className = 'pagination-button';
			prev.textContent = 'Prev';
			prev.disabled = currentPage <= 1;
			prev.addEventListener('click', () => {
				if (currentPage > 1) {
					currentPage -= 1;
					renderTablePage();
				}
			});

			const next = document.createElement('button');
			next.className = 'pagination-button';
			next.textContent = 'Next';
			next.disabled = currentPage >= totalPages;
			next.addEventListener('click', () => {
				if (currentPage < totalPages) {
					currentPage += 1;
					renderTablePage();
				}
			});

			const info = document.createElement('span');
			info.className = 'pagination-info';
			info.textContent = `Page ${currentPage} of ${totalPages}`;

			paginationEl.appendChild(prev);
			paginationEl.appendChild(info);
			paginationEl.appendChild(next);
		}

		renderTablePage();
	} catch (err) {
		container.textContent = 'Failed to load data: ' + err;
	}

	function renderTable(data, container, allDataReference) {
		container.innerHTML = '';
		if (!Array.isArray(allDataReference) || allDataReference.length === 0) {
			container.textContent = 'No data available';
			return;
		}

		const table = document.createElement('table');
		table.className = 'data-table';

		const thead = document.createElement('thead');
		const headerRow = document.createElement('tr');
		const keys = Object.keys(allDataReference[0]);
		keys.forEach(k => {
			const th = document.createElement('th');
			th.textContent = k;
			headerRow.appendChild(th);
		});
		thead.appendChild(headerRow);
		table.appendChild(thead);

		const tbody = document.createElement('tbody');
		data.forEach(item => {
			const tr = document.createElement('tr');
			keys.forEach(k => {
				const td = document.createElement('td');
				const v = item[k];
				td.textContent = v === null || v === undefined ? '' : String(v);
				tr.appendChild(td);
			});
			tbody.appendChild(tr);
		});
		table.appendChild(tbody);

		container.appendChild(table);
	}
})();