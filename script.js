
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
    navList.style.alignItems = 'center';

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentUser = localStorage.getItem('currentUser');

    const navItems = [
        { text: 'Home', href: 'index.html' },
        { text: 'Dashboard', href: 'dash.html' },
        { text: 'Record', href: 'recorder.html' },
          { text: 'Profile', href: 'profile.html' }
    ];
    
    // Add conditional navigation item based on login status
    if (isLoggedIn && currentUser) {
        navItems.push({ text: 'Sign Out', href: '#', isSignOut: true });
    } else {
        navItems.push({ text: 'Signup/In', href: 'signup.html' });
    }
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        a.style.color = 'white';
        a.style.textDecoration = 'none';    
        a.style.fontSize = '18px';
        
        // Add sign out handler
        if (item.isSignOut) {
            a.style.cursor = 'pointer';
            a.addEventListener('click', (e) => {
                e.preventDefault();
                signOut();
            });
        }
        
        li.appendChild(a);
        navList.appendChild(li);
    });

    navBar.appendChild(navList);
    theBody.prepend(navBar);

    // Sign out function
    function signOut() {
        if (confirm('Are you sure you want to sign out?')) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            alert('You have been signed out successfully!');
            window.location.reload();
        }
    }

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

    // Signin form fields
    const signinUsernameLabel = document.createElement('label');
    signinUsernameLabel.textContent = 'Username: ';
    signinUsernameLabel.className = 'form-label fw-bold';
    signinForm.appendChild(signinUsernameLabel);

    const signinUsernameInput = document.createElement('input');
    signinUsernameInput.type = 'text';
    signinUsernameInput.name = 'username';
    signinUsernameInput.className = 'form-control mb-3';
    signinUsernameInput.required = true;
    signinUsernameInput.pattern = '[A-Za-z0-9]+';
    signinUsernameInput.title = 'Username must contain only letters and numbers';
    signinForm.appendChild(signinUsernameInput);

    const signinPasswordLabel = document.createElement('label');
    signinPasswordLabel.textContent = 'Password: ';
    signinPasswordLabel.className = 'form-label fw-bold';
    signinForm.appendChild(signinPasswordLabel);

    const signinPassword = document.createElement('input');
    signinPassword.type = 'password';
    signinPassword.name = 'password';
    signinPassword.className = 'form-control mb-3';
    signinPassword.required = true;
    signinPassword.pattern = '(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+';
    signinPassword.title = 'Password must contain both letters and numbers';
    signinForm.appendChild(signinPassword);

    const signinSubmitBtn = document.createElement('button');
    signinSubmitBtn.type = 'submit';
    signinSubmitBtn.className = 'btn btn-primary btn-lg w-100';
    signinSubmitBtn.textContent = 'Sign In';
    signinForm.appendChild(signinSubmitBtn);

    // Signin form validation on submit
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usernameValue = signinUsernameInput.value;
        const passwordValue = signinPassword.value;
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

        // Check against stored userData
        try {
            const storedData = localStorage.getItem('userData');
            if (!storedData) {
                alert('No account found. Please sign up first.');
                return;
            }

            const userData = JSON.parse(storedData);
            
            // Simple check - in real app, you'd verify password hash
            if (userData.username === usernameValue) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', userData.username);
                alert(`Welcome back, ${userData.username}!`);
                signinForm.reset();
            } else {
                alert('Invalid username or password');
            }
        } catch (e) {
            console.error('Sign in error:', e);
            alert('Error during sign in');
        }
    });

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
    }

});


const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const player = document.getElementById("player");
const downloadLink = document.getElementById("downloadLink");
const statusEl = document.getElementById("status");
const timerEl = document.getElementById("timer");
// const progressBar = document.getElementById("recordingProgress");
// const progressTime = document.getElementById("progressTime");

let stream;
let recorder;
let chunks = [];
let audioBlobUrl;
// Track currently-displayed poem for naming downloads
let currentPoem = { title: null, author: null };
// Timer variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isPaused = false;
const MAX_RECORDING_TIME = 600000; // 10 minutes in milliseconds

function setStatus(msg) {
  if (statusEl) statusEl.textContent = msg;
}

function updateTimer() {
  if (!isPaused) {
    elapsedTime = Date.now() - startTime;
  }
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Get centiseconds (00-99)
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  
  if (timerEl) {
    timerEl.textContent = timeString;
  }
  
  // Update progress bar
  // if (progressBar && progressTime) {
  //   const progressPercent = Math.min((elapsedTime / MAX_RECORDING_TIME) * 100, 100);
  //   progressBar.style.width = `${progressPercent}%`;
  //   progressBar.setAttribute('aria-valuenow', progressPercent);
  //   progressTime.textContent = timeString;
  // }
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 100);
  isPaused = false;
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isPaused = true;
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  elapsedTime = 0;
  startTime = 0;
  isPaused = false;
  if (timerEl) timerEl.textContent = '00:00.00';
  // if (progressBar) {
  //   progressBar.style.width = '0%';
  //   progressBar.setAttribute('aria-valuenow', 0);
  // }
  // if (progressTime) progressTime.textContent = '00:00.00';
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

    recorder.onstart = () => {
      setStatus("Recording...");
      startTimer();
    };
    recorder.onerror = (e) => setStatus(`Recorder error: ${e.error?.message || "unknown"}`);

    recorder.onpause = () => {
      setStatus("Paused");
      pauseTimer();
    };

    recorder.onresume = () => {
      setStatus("Recording...");
      startTimer();
    };

    recorder.onstop = () => {
      setStatus("Stopped.");
      const recordingDuration = elapsedTime;
      resetTimer();

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

      // Save recording metadata and audio to localStorage
      saveRecordingToHistory(recordingDuration, audioBlob, blobType);

      // Stop mic tracks so the browser shows mic is off
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    };

    recorder.start(); 
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
  } catch (err) {
    setStatus(`Mic permission failed: ${err.message}`);
  }
}

function stopRecording() {
  if (recorder && recorder.state !== "inactive") recorder.stop();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
}

function pauseRecording() {
  if (!recorder) return;
  
  if (recorder.state === "recording") {
    recorder.pause();
    pauseBtn.textContent = "Resume";
    pauseBtn.className = "btn btn-info";
  } else if (recorder.state === "paused") {
    recorder.resume();
    pauseBtn.textContent = "Pause";
    pauseBtn.className = "btn btn-warning";
  }
}

function saveRecordingToHistory(duration, audioBlob, blobType) {
  try {
    // Get current user
    const currentUser = localStorage.getItem('currentUser') || 'Guest';
    
    // Format duration as MM:SS
    const totalSeconds = Math.floor(duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const durationFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Convert audio blob to base64 for storage
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = () => {
      const audioData = reader.result;
      
      // Create recording object
      const recording = {
        id: Date.now(),
        user: currentUser,
        poemTitle: currentPoem.title || 'No poem selected',
        author: currentPoem.author || 'Unknown',
        duration: durationFormatted,
        timestamp: new Date().toLocaleString(),
        timestampRaw: Date.now(),
        audioData: audioData,
        audioType: blobType
      };
      
      // Get existing recordings or initialize empty array
      const recordings = JSON.parse(localStorage.getItem('recordings') || '[]');
      
      // Add new recording to the beginning
      recordings.unshift(recording);
      
      // Keep only last 10 recordings to manage localStorage size
      if (recordings.length > 10) {
        recordings.splice(10);
      }
      
      // Save back to localStorage
      localStorage.setItem('recordings', JSON.stringify(recordings));
      
      console.log('Recording saved to history with audio data');
    };
    
  } catch (e) {
    console.error('Failed to save recording to history:', e);
    // If localStorage is full, try to save without audio
    alert('Recording saved but audio could not be stored (storage full). Consider clearing old recordings.');
  }
}

if (startBtn) startBtn.addEventListener("click", startRecording);
if (pauseBtn) pauseBtn.addEventListener("click", pauseRecording);
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
      poemContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <strong>Author:</strong> ${currentPoem.author}
          <button class="btn btn-sm btn-danger" onclick="document.getElementById('poemClearBtn').click()">Clear Poem</button>
        </div>
        <strong>${currentPoem.title || ''}</strong>
        <pre style="white-space:pre-wrap;margin-top:8px;">${poemText}</pre>
      `;
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

    poemContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <strong>Author:</strong> ${author}
        <button class="btn btn-sm btn-danger" onclick="document.getElementById('poemClearBtn').click()">Clear Poem</button>
      </div>
      <strong>${poem.title || ''}</strong>
      <pre style="white-space:pre-wrap;margin-top:8px;">${poemText}</pre>
    `;
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


// Dashboard functionality
const recordingsTableBody = document.getElementById('recordingsTableBody');
const noRecordingsDiv = document.getElementById('noRecordings');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const recordingsTable = document.getElementById('recordingsTable');

function loadRecordings() {
  if (!recordingsTableBody) return;
  
  try {
    const recordings = JSON.parse(localStorage.getItem('recordings') || '[]');
    
    // Clear existing rows
    recordingsTableBody.innerHTML = '';
    
    if (recordings.length === 0) {
      if (recordingsTable) recordingsTable.style.display = 'none';
      if (noRecordingsDiv) noRecordingsDiv.style.display = 'block';
      return;
    }
    
    if (recordingsTable) recordingsTable.style.display = 'table';
    if (noRecordingsDiv) noRecordingsDiv.style.display = 'none';
    
    // Populate table rows
    recordings.forEach((recording, index) => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>${recording.user}</td>
        <td>${recording.poemTitle}</td>
        <td>${recording.author}</td>
        <td>${recording.duration}</td>
        <td>${recording.timestamp}</td>
        <td>
          <button class="btn btn-sm btn-danger delete-btn" data-id="${recording.id}">Delete</button>
        </td>
      `;
      
      recordingsTableBody.appendChild(row);
    });
    
    // Add delete button listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        deleteRecording(id);
      });
    });
    
  } catch (e) {
    console.error('Failed to load recordings:', e);
  }
}

function deleteRecording(id) {
  try {
    const recordings = JSON.parse(localStorage.getItem('recordings') || '[]');
    const filtered = recordings.filter(r => r.id !== id);
    localStorage.setItem('recordings', JSON.stringify(filtered));
    loadRecordings();
  } catch (e) {
    console.error('Failed to delete recording:', e);
  }
}

function clearAllRecordings() {
  if (confirm('Are you sure you want to delete all recordings? This cannot be undone.')) {
    try {
      localStorage.setItem('recordings', '[]');
      loadRecordings();
    } catch (e) {
      console.error('Failed to clear recordings:', e);
    }
  }
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', clearAllRecordings);
}

// Load recordings when dashboard page loads
if (recordingsTableBody) {
  loadRecordings();
}


// Home page carousel functionality
const carouselInner = document.getElementById('carouselInner');
const carouselIndicators = document.getElementById('carouselIndicators');

function loadCarousel() {
  if (!carouselInner) return;
  
  try {
    const recordings = JSON.parse(localStorage.getItem('recordings') || '[]');
    
    if (recordings.length === 0) {
      // Keep the default "no recordings" message
      return;
    }
    
    // Clear default content
    carouselInner.innerHTML = '';
    if (carouselIndicators) carouselIndicators.innerHTML = '';
    
    // Create carousel items
    recordings.forEach((recording, index) => {
      // Create carousel item
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      carouselItem.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded" style="min-height: 400px;">
          <div class="card" style="max-width: 600px; width: 100%;">
            <div class="card-body">
              <h5 class="card-title">${recording.poemTitle}</h5>
              <h6 class="card-subtitle mb-2 text-muted">by ${recording.author}</h6>
              <hr>
              <p class="card-text">
                <strong>Recorded by:</strong> ${recording.user}<br>
                <strong>Duration:</strong> ${recording.duration}<br>
                <strong>Date:</strong> ${recording.timestamp}
              </p>
              ${recording.audioData ? `
                <audio controls class="w-100 mt-3" id="audio-${recording.id}">
                  <source src="${recording.audioData}" type="${recording.audioType}">
                  Your browser does not support the audio element.
                </audio>
              ` : '<p class="text-muted">Audio not available</p>'}
            </div>
          </div>
        </div>
      `;
      
      carouselInner.appendChild(carouselItem);
      
      // Create indicator
      if (carouselIndicators) {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#recordingsCarousel');
        indicator.setAttribute('data-bs-slide-to', index);
        if (index === 0) indicator.className = 'active';
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) indicator.setAttribute('aria-current', 'true');
        carouselIndicators.appendChild(indicator);
      }
    });
    
    // Pause all audio players when carousel slides
    const carousel = document.getElementById('recordingsCarousel');
    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', () => {
        document.querySelectorAll('audio').forEach(audio => {
          audio.pause();
        });
      });
    }
    
  } catch (e) {
    console.error('Failed to load carousel:', e);
  }
}

// Load carousel when home page loads
if (carouselInner) {
  loadCarousel();
}

// Profile page functionality
const profileSection = document.getElementById('profile');
if (profileSection) {
  const currentUser = localStorage.getItem('currentUser') || 'Guest';
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  const aboutMe = localStorage.getItem('aboutMe') || '';
  
  profileSection.innerHTML = `
    <div class="card" style="max-width: 600px; margin: 0 auto;">
      <div class="card-body">
        <h3 class="card-title">Profile Information</h3>
        <hr>
        <p><strong>Username:</strong> ${currentUser}</p>
        ${userData.email ? `<p><strong>Email:</strong> ${userData.email}</p>` : ''}
        ${userData.age ? `<p><strong>Age:</strong> ${userData.age}</p>` : ''}
        ${userData.accountType ? `<p><strong>Account Type:</strong> ${userData.accountType}</p>` : ''}
        ${userData.createdAt ? `<p><strong>Member Since:</strong> ${new Date(userData.createdAt).toLocaleDateString()}</p>` : ''}
        <hr>
        <div class="mb-3">
          <label for="aboutMeInput" class="form-label"><strong>About Me</strong></label>
          <textarea id="aboutMeInput" class="form-control" rows="4" placeholder="Tell us about yourself...">${aboutMe}</textarea>
          <button id="saveAboutBtn" class="btn btn-primary mt-2">Save About Me</button>
        </div>
        <hr>
        <p style="font-size: 0.9em; color: #555;">

        </p>
      </div>
    </div>
  `;
  
  // Add event listener for save button
  const saveAboutBtn = document.getElementById('saveAboutBtn');
  const aboutMeInput = document.getElementById('aboutMeInput');
  
  if (saveAboutBtn && aboutMeInput) {
    saveAboutBtn.addEventListener('click', () => {
      const aboutMeText = aboutMeInput.value;
      try {
        localStorage.setItem('aboutMe', aboutMeText);
        alert('About Me section saved successfully!');
      } catch (e) {
        console.error('Failed to save About Me:', e);
        alert('Failed to save. Please try again.');
      }
    });
  }
}


//create dash board with  user, author, time stamp length of recording, and poem title. Store this info in local storage and display it in a table on the dashboard page.

// Do user research on similar short story sites



