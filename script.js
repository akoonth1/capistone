
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

    const navItems = [
        { text: 'Home', href: 'index.html' },
        { text: 'Dashboard', href: 'dash.html' },
        { text: 'Record', href: 'recorder.html' },
        { text: 'Signup/In', href: 'signup.html' },
    ];
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
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
    signupSection.className = 'd-flex flex-column align-items-center justify-content-center mt-5';
    signupSection.style.color = '#333';

    // Toggle buttons container
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'btn-group mb-3';
    toggleContainer.setAttribute('role', 'group');
    signupSection.appendChild(toggleContainer);

    const signupToggleBtn = document.createElement('button');
    signupToggleBtn.type = 'button';
    signupToggleBtn.className = 'btn btn-primary';
    signupToggleBtn.textContent = 'Sign Up';
    toggleContainer.appendChild(signupToggleBtn);

    const signinToggleBtn = document.createElement('button');
    signinToggleBtn.type = 'button';
    signinToggleBtn.className = 'btn btn-outline-primary';
    signinToggleBtn.textContent = 'Sign In';
    toggleContainer.appendChild(signinToggleBtn);

    // Signup form
    const signupForm = document.createElement('form');
    signupForm.className = 'p-4 rounded shadow-sm';
    signupForm.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    signupForm.style.maxWidth = '500px';
    signupForm.style.width = '90%';
    signupSection.appendChild(signupForm);

    // Signin form
    const signinForm = document.createElement('form');
    signinForm.className = 'p-4 rounded shadow-sm';
    signinForm.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    signinForm.style.maxWidth = '500px';
    signinForm.style.width = '90%';
    signinForm.style.display = 'none';
    signupSection.appendChild(signinForm);

    // Toggle functionality
    signupToggleBtn.addEventListener('click', () => {
        signupToggleBtn.className = 'btn btn-primary';
        signinToggleBtn.className = 'btn btn-outline-primary';
        signupForm.style.display = 'block';
        signinForm.style.display = 'none';
    });

    signinToggleBtn.addEventListener('click', () => {
        signinToggleBtn.className = 'btn btn-primary';
        signupToggleBtn.className = 'btn btn-outline-primary';
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    const form = signupForm;

    // Username field
    const usernameGroup = document.createElement('div');
    usernameGroup.className = 'mb-3';
    form.appendChild(usernameGroup);

    const usernameLabel = document.createElement('label');
    usernameLabel.className = 'form-label fw-bold';
    usernameLabel.textContent = 'Username';
    usernameLabel.htmlFor = 'username';
    usernameGroup.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username';
    usernameInput.className = 'form-control';
    usernameInput.required = true;
    usernameInput.pattern = '[A-Za-z0-9]+';
    usernameInput.placeholder = 'Enter username (letters and numbers only)';
    usernameGroup.appendChild(usernameInput);

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.className = 'mb-3';
    form.appendChild(emailGroup);

    const emailLabel = document.createElement('label');
    emailLabel.className = 'form-label fw-bold';
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.className = 'form-control';
    emailInput.required = true;
    emailInput.placeholder = 'Enter your email address';
    emailGroup.appendChild(emailInput);

    // Password field
    const passwordGroup = document.createElement('div');
    passwordGroup.className = 'mb-3';
    form.appendChild(passwordGroup);

    const userPasswordLabel = document.createElement('label');
    userPasswordLabel.className = 'form-label fw-bold';
    userPasswordLabel.textContent = 'Password';
    userPasswordLabel.htmlFor = 'password';
    passwordGroup.appendChild(userPasswordLabel);

    const userPassword = document.createElement('input');
    userPassword.type = 'password';
    userPassword.name = 'password';
    userPassword.id = 'password';
    userPassword.className = 'form-control';
    userPassword.required = true;
    userPassword.pattern = '(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+';
    userPassword.placeholder = 'Must contain letters and numbers';
    passwordGroup.appendChild(userPassword);

    // Confirm Password field
    const confirmPasswordGroup = document.createElement('div');
    confirmPasswordGroup.className = 'mb-3';
    form.appendChild(confirmPasswordGroup);

    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.className = 'form-label fw-bold';
    confirmPasswordLabel.textContent = 'Confirm Password';
    confirmPasswordLabel.htmlFor = 'confirmPassword';
    confirmPasswordGroup.appendChild(confirmPasswordLabel);

    const confirmPassword = document.createElement('input');
    confirmPassword.type = 'password';
    confirmPassword.name = 'confirmPassword';
    confirmPassword.id = 'confirmPassword';
    confirmPassword.className = 'form-control';
    confirmPassword.required = true;
    confirmPassword.placeholder = 'Re-enter password';
    confirmPasswordGroup.appendChild(confirmPassword);

    // Age field
    const ageGroup = document.createElement('div');
    ageGroup.className = 'mb-3';
    form.appendChild(ageGroup);

    const ageLabel = document.createElement('label');
    ageLabel.className = 'form-label fw-bold';
    ageLabel.textContent = 'Age';
    ageLabel.htmlFor = 'age';
    ageGroup.appendChild(ageLabel);

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageInput.id = 'age';
    ageInput.className = 'form-control';
    ageInput.required = true;
    ageInput.min = '13';
    ageInput.max = '120';
    ageInput.placeholder = 'Enter your age (13-120)';
    ageGroup.appendChild(ageInput);

    // Account type field (dropdown)
    const accountTypeGroup = document.createElement('div');
    accountTypeGroup.className = 'mb-3';
    form.appendChild(accountTypeGroup);

    const accountTypeLabel = document.createElement('label');
    accountTypeLabel.className = 'form-label fw-bold';
    accountTypeLabel.textContent = 'Account Type';
    accountTypeLabel.htmlFor = 'accountType';
    accountTypeGroup.appendChild(accountTypeLabel);

    const accountTypeSelect = document.createElement('select');
    accountTypeSelect.name = 'accountType';
    accountTypeSelect.id = 'accountType';
    accountTypeSelect.className = 'form-select';
    accountTypeSelect.required = true;
    accountTypeGroup.appendChild(accountTypeSelect);

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select account type...';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    accountTypeSelect.appendChild(defaultOption);

    const accountTypes = [
        { value: 'listener', label: 'Listener' },
        { value: 'reader', label: 'Reader' },
        { value: 'both', label: 'Both' }
    ];

    accountTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.label;
        accountTypeSelect.appendChild(option);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary btn-lg w-100 mt-3';
    submitBtn.textContent = 'Create Account';
    form.appendChild(submitBtn);

    // Form validation on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usernameValue = usernameInput.value;
        const emailValue = emailInput.value;
        const passwordValue = userPassword.value;
        const confirmPasswordValue = confirmPassword.value;
        const ageValue = parseInt(ageInput.value);
        const accountTypeValue = accountTypeSelect.value;
        
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

        if (passwordValue !== confirmPasswordValue) {
            alert('Passwords do not match');
            return;
        }

        if (ageValue < 13 || ageValue > 120) {
            alert('Age must be between 13 and 120');
            return;
        }

        if (!accountTypeValue) {
            alert('Please select an account type');
            return;
        }

        // If validation passes, save to localStorage
        const userData = {
            username: usernameValue,
            email: emailValue,
            age: ageValue,
            accountType: accountTypeValue,
            createdAt: Date.now()
        };

        try {
            localStorage.setItem('userData', JSON.stringify(userData));
            alert('Account created successfully!');
            form.reset();
        } catch (e) {
            console.error('Failed to save user data:', e);
            alert('Account created but failed to save locally');
        }
    });

    // ===== SIGN IN FORM =====
    // Username/Email field
    const signinUsernameGroup = document.createElement('div');
    signinUsernameGroup.className = 'mb-3';
    signinForm.appendChild(signinUsernameGroup);

    const signinUsernameLabel = document.createElement('label');
    signinUsernameLabel.className = 'form-label fw-bold';
    signinUsernameLabel.textContent = 'Username or Email';
    signinUsernameLabel.htmlFor = 'signinUsername';
    signinUsernameGroup.appendChild(signinUsernameLabel);

    const signinUsernameInput = document.createElement('input');
    signinUsernameInput.type = 'text';
    signinUsernameInput.name = 'signinUsername';
    signinUsernameInput.id = 'signinUsername';
    signinUsernameInput.className = 'form-control';
    signinUsernameInput.required = true;
    signinUsernameInput.placeholder = 'Enter username or email';
    signinUsernameGroup.appendChild(signinUsernameInput);

    // Password field
    const signinPasswordGroup = document.createElement('div');
    signinPasswordGroup.className = 'mb-3';
    signinForm.appendChild(signinPasswordGroup);

    const signinPasswordLabel = document.createElement('label');
    signinPasswordLabel.className = 'form-label fw-bold';
    signinPasswordLabel.textContent = 'Password';
    signinPasswordLabel.htmlFor = 'signinPassword';
    signinPasswordGroup.appendChild(signinPasswordLabel);

    const signinPasswordInput = document.createElement('input');
    signinPasswordInput.type = 'password';
    signinPasswordInput.name = 'signinPassword';
    signinPasswordInput.id = 'signinPassword';
    signinPasswordInput.className = 'form-control';
    signinPasswordInput.required = true;
    signinPasswordInput.placeholder = 'Enter password';
    signinPasswordGroup.appendChild(signinPasswordInput);

    const signinBtn = document.createElement('button');
    signinBtn.type = 'submit';
    signinBtn.className = 'btn btn-success btn-lg w-100 mt-3';
    signinBtn.textContent = 'Sign In';
    signinForm.appendChild(signinBtn);

    // Sign in validation
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const loginValue = signinUsernameInput.value;
        const passwordValue = signinPasswordInput.value;

        try {
            const storedData = localStorage.getItem('userData');
            if (!storedData) {
                alert('No account found. Please sign up first.');
                return;
            }

            const userData = JSON.parse(storedData);
            
            // Check if username or email matches
            const isUsernameMatch = userData.username === loginValue;
            const isEmailMatch = userData.email === loginValue;

            if ((isUsernameMatch || isEmailMatch)) {
                // In a real app, you'd verify password hash
                // For now, just showing successful login
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', userData.username);
                alert(`Welcome back, ${userData.username}!`);
                signinForm.reset();
            } else {
                alert('Invalid username/email or password');
            }
        } catch (e) {
            console.error('Sign in error:', e);
            alert('Error during sign in');
        }
    });
    }

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


let poemContainer = document.getElementById('poem-container');
if (poemContainer) {
  poemContainer.style.whiteSpace = 'pre-wrap';
  poemContainer.style.background = 'rgba(255,255,255,0.85)';
  poemContainer.style.padding = '12px';
  poemContainer.style.borderRadius = '6px';
  poemContainer.style.marginTop = '10px';
  poemContainer.style.maxWidth = '800px';
  poemContainer.style.width = '90%';
}

let poemBtn = document.getElementById('poemBtn');
if (poemBtn && poemContainer) {
  poemBtn.style.marginTop = '10px';
}

// clear button to remove saved poem
let poemClearBtn = document.getElementById('poemClearBtn');
if (!poemClearBtn && poemContainer) {
  poemClearBtn = document.createElement('button');
  poemClearBtn.id = 'poemClearBtn';
  poemClearBtn.textContent = 'Clear Poem';
  poemClearBtn.className = 'btn btn-link';
  poemClearBtn.style.display = 'none';
  poemClearBtn.style.marginTop = '10px';
  poemContainer.parentNode.insertBefore(poemClearBtn, poemContainer.nextSibling);
}

// If a poem is saved in localStorage, load and display it
if (poemContainer && poemClearBtn) {
  try {
    const saved = localStorage.getItem('savedPoem');
    if (saved) {
      const parsed = JSON.parse(saved);
      currentPoem.title = parsed.title || '';
      currentPoem.author = parsed.author || '';
      const poemText = parsed.text || '';
      poemContainer.innerHTML = `<strong>Author:</strong> ${currentPoem.author}<br><strong>${currentPoem.title || ''}</strong><pre style="white-space:pre-wrap;margin-top:8px;">${poemText}</pre>`;
      poemContainer.style.display = 'block';
      poemContainer.style.fontSize = '24px';
      poemContainer.style.textAlign = 'center';
      poemContainer.style.width = '150%';
      if (poemBtn) poemBtn.style.display = 'none';
      poemClearBtn.style.display = 'inline-block';
    }
  } catch (e) {
    console.error('Failed to load saved poem:', e);
  }
}

if (poemBtn && poemContainer) {
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

    // also persist poem to localStorage so it survives reloads
    try {
      const toSave = { title: currentPoem.title, author: currentPoem.author, text: poemText, savedAt: Date.now() };
      localStorage.setItem('savedPoem', JSON.stringify(toSave));
      if (poemClearBtn) poemClearBtn.style.display = 'inline-block';
    } catch (e) {
      console.error('Failed to save poem to localStorage:', e);
    }

    poemContainer.innerHTML = `<strong>Author:</strong> ${author}<br><strong>${poem.title || ''}</strong><pre style="white-space:pre-wrap;margin-top:8px;">${poemText}</pre>`;
    poemContainer.scrollIntoView({ behavior: 'smooth' });
    poemContainer.style.display = 'block';
    poemBtn.style.display = 'none';
    poemContainer.style.fontSize = '24px';
    poemContainer.style.textAlign = 'center';
    poemContainer.style.width = '150%';

  });
}

// clear saved poem handler
if (poemClearBtn && poemContainer) {
  poemClearBtn.addEventListener('click', () => {
    try {
      localStorage.removeItem('savedPoem');
    } catch (e) {
      console.error('Failed to remove saved poem:', e);
    }
    currentPoem = { title: null, author: null };
    poemContainer.innerHTML = '';
    poemContainer.style.display = 'none';
    poemClearBtn.style.display = 'none';
    if (poemBtn) poemBtn.style.display = 'inline-block';
  });
}


//create dash board with  user, author, time stamp length of recording, and poem title. Store this info in local storage and display it in a table on the dashboard page.

// Do user research on similar short story sites
