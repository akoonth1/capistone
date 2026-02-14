
document.addEventListener('DOMContentLoaded', () => {
    const theBody = document.body;
    theBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
    theBody.style.margin = '0';
    theBody.style.padding = '16px';
    theBody.style.backgroundColor = '#5674c3';
    theBody.style.display = 'flex';
    theBody.style.flexDirection = 'column';
    theBody.style.alignItems = 'center';
    theBody.style.position = 'relative';

    const navBar = document.createElement('nav');
    navBar.style.width = '100%';
    navBar.style.backgroundColor = '#333';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'center';
    navBar.style.padding = '10px 0';

    const navList = document.createElement('ul');   
    navList.style.listStyle = 'none';
    navList.style.display = 'flex';
    navList.style.gap = '20px';

    const navItems = ['Home', 'About', 'Dashboard','Record','Contact'];  
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item;
        a.href = '#';
        a.style.color = 'white';
        a.style.textDecoration = 'none';    
        a.style.fontSize = '18px';
        li.appendChild(a);
        navList.appendChild(li);
    });

    navBar.appendChild(navList);
    theBody.prepend(navBar);

    let signedIn = false;



    
    // Create background overlay div with opacity
    const bgOverlay = document.createElement('div');
    bgOverlay.style.position = 'fixed';
    bgOverlay.style.top = '0';
    bgOverlay.style.left = '0';
    bgOverlay.style.width = '100%';
    bgOverlay.style.height = '100%';
    bgOverlay.style.backgroundImage = 'url("./images/mic.jpg")';
    bgOverlay.style.backgroundSize = 'cover';
    bgOverlay.style.backgroundPosition = 'center 30%';
    bgOverlay.style.backgroundRepeat = 'no-repeat';
    bgOverlay.style.opacity = '0.50';
    bgOverlay.style.zIndex = '-1';
    theBody.prepend(bgOverlay);
    theBody.style.opacity = '1.';
    
    
    const signupSection = document.getElementById('signup-section');
    if (signupSection) {
    signupSection.style.color = 'red';
    signupSection.style.fontSize = '20px';
    signupSection.style.display = 'flex';
    signupSection.style.flexDirection = 'column';
    signupSection.style.alignItems = 'center';
    signupSection.style.justifyContent = 'center';
    signupSection.style.marginTop = '10%';
    }

 const form = document.createElement('form');
 signupSection.appendChild(form);

 form.style.backgroundColor = '#8aa2b67f';
 form.style.padding = '20px';
 form.style.display = 'flex';
 form.style.flexDirection = 'row';
 form.style.gap = '15px';
 form.style.alignItems = 'center';
 form.style.flexWrap = 'wrap';
 form.style.borderRadius = '8px';

 const usernameLabel = document.createElement('label');
 usernameLabel.textContent = 'Username: ';
 form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.required = true;
    usernameInput.pattern = '[A-Za-z0-9]+';
    usernameInput.title = 'Username must contain only letters and numbers';
    form.appendChild(usernameInput);


     const userPasswordLabel = document.createElement('label');
 userPasswordLabel.textContent = 'Password: ';
 form.appendChild(userPasswordLabel);

        const userPassword = document.createElement('input');
    userPassword.type = 'password';
    userPassword.name = 'password';
    userPassword.required = true;
    userPassword.pattern = '(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+';
    userPassword.title = 'Password must contain both letters and numbers';
    form.appendChild(userPassword);

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.className = 'btn btn-primary btn-lg';
submitBtn.textContent = 'Submit';
form.appendChild(submitBtn);

// Form validation on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usernameValue = usernameInput.value;
    const passwordValue = userPassword.value;
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    const hasLetterAndNumber = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/;
    
    if (!alphanumericRegex.test(usernameValue)) {
        alert('Username must contain only letters and numbers');
        return;
    }
    
    if (!hasLetterAndNumber.test(passwordValue)) {
        alert('Password must contain both letters and numbers');
        return;
    }
});

});


const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const player = document.getElementById("player");
const downloadLink = document.getElementById("downloadLink");
const statusEl = document.getElementById("status");

let stream;
let recorder;
let chunks = [];
let audioBlobUrl;
// Track currently-displayed poem for naming downloads
let currentPoem = { title: null, author: null };

function setStatus(msg) {
  if (statusEl) statusEl.textContent = msg;
}

function pickMimeType() {
 
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4", 
  ];

  for (const type of candidates) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported(type)) return type;
  }
  return ""; 
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus("Your browser does not support audio recording.");
    return;
  }

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    const mimeType = pickMimeType();
    recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

    chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    recorder.onstart = () => setStatus("Recording...");
    recorder.onerror = (e) => setStatus(`Recorder error: ${e.error?.message || "unknown"}`);

    recorder.onstop = () => {
      setStatus("Stopped.");

      const blobType = recorder.mimeType || "audio/webm";
      const audioBlob = new Blob(chunks, { type: blobType });

      if (audioBlobUrl) URL.revokeObjectURL(audioBlobUrl);
      audioBlobUrl = URL.createObjectURL(audioBlob);

      player.src = audioBlobUrl;

      downloadLink.href = audioBlobUrl;
      downloadLink.style.display = "inline-block";
      downloadLink.textContent = "Download recording";

      const ext = blobType.includes("mp4") ? "m4a" : "webm";
      // Build filename from current poem title + author, remove spaces and unsafe chars
      const titlePart = (currentPoem.title || 'recording').toString();
      const authorPart = (currentPoem.author || '').toString();
      let baseName = `${titlePart}_${authorPart}`;
      baseName = baseName.replace(/\s+/g, '') // remove spaces
             .replace(/[^a-zA-Z0-9_\-]/g, '') // remove unsafe chars
             .substring(0, 120) || 'recording';
      downloadLink.download = `${baseName}.${ext}`;

      // Stop mic tracks so the browser shows mic is off
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    };

    recorder.start(); 
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } catch (err) {
    setStatus(`Mic permission failed: ${err.message}`);
  }
}

function stopRecording() {
  if (recorder && recorder.state !== "inactive") recorder.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

if (startBtn) startBtn.addEventListener("click", startRecording);
if (stopBtn) stopBtn.addEventListener("click", stopRecording);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Store author name for future fetch requests
let selectedAuthor;

// fetch('https://poetrydb.org/author')
//     .then(response => response.json())
//     .then(data => {
//         console.log('Authors:', data);
//         // PoetryDB returns an object with authors property
//         authorNumber = getRandomInt(0, data.authors.length);
//         if (data.authors && data.authors.length > 0) {
//             selectedAuthor = data.authors[authorNumber];
//             console.log('One author:', selectedAuthor);
//         } else if (Array.isArray(data) && data.length > 0) {
//             selectedAuthor = data[authorNumber];
//             console.log('One author:', selectedAuthor);
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching authors:', error);
//     });



async function loadRandomAuthorPoems() {
const r = await fetch('https://poetrydb.org/author');
const data = await r.json();
const authors = data.authors ?? data;
const author = authors[getRandomInt(0, authors.length)];
const selectedAuthor = author;
const poemsRes = await fetch('https://poetrydb.org/author/' + encodeURIComponent(author));
const poems = await poemsRes.json();
console.log(author, poems);
return { author, poems };
}
loadRandomAuthorPoems();


let poemContainer = document.getElementById('poemContainer');
if (!poemContainer) {
  poemContainer = document.createElement('div');
  poemContainer.id = 'poemContainer';
  poemContainer.style.whiteSpace = 'pre-wrap';
  poemContainer.style.background = 'rgba(255,255,255,0.85)';
  poemContainer.style.padding = '12px';
  poemContainer.style.borderRadius = '6px';
  poemContainer.style.marginTop = '10px';
  poemContainer.style.maxWidth = '800px';
  poemContainer.style.width = '90%';
  const recorderSection = document.getElementById('recorder') || document.getElementById('signup-section') || document.body;
  recorderSection.appendChild(poemContainer);
}

let poemBtn = document.getElementById('poemBtn');
if (!poemBtn) {
  poemBtn = document.createElement('button');
  poemBtn.id = 'poemBtn';
  poemBtn.textContent = 'Get Poem';
  poemBtn.className = 'btn btn-secondary';
  poemContainer.parentNode.insertBefore(poemBtn, poemContainer);
}

poemBtn.addEventListener('click', async () => {
  const { author, poems } = await loadRandomAuthorPoems();
  if (!Array.isArray(poems) || poems.length === 0) {
    poemContainer.textContent = 'No poems found for that author.';
    return;
  }

  // Prefer poems with <= 20 lines when available
  const shortPoems = poems.filter(p => (p.lines || []).length <= 20);
  const pool = shortPoems.length ? shortPoems : poems;
  const poem = pool[getRandomInt(0, pool.length)];
  const poemText = (poem.lines || []).join('\n') || poem.text || '';

  // store current poem info for naming downloads
  currentPoem.title = poem.title || 'poem';
  currentPoem.author = author || '';

  poemContainer.innerHTML = `<strong>Author:</strong> ${author}<br><strong>${poem.title || ''}</strong><pre style="white-space:pre-wrap;margin-top:8px;">${poemText}</pre>`;
  poemContainer.scrollIntoView({ behavior: 'smooth' });
  poemContainer.style.display = 'block';
  poemBtn.style.display = 'none';
  poemContainer.style.fontSize = '24px';
  poemContainer.style.textAlign = 'center';
  poemContainer.style.width = '150%';

});


