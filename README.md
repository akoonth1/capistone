# OpenVerse - Poetry Recording Platform

OpenVerse is a comprehensive web-based platform that bridges the gap between classical poetry and modern audio expression. Built for poetry enthusiasts, performers, students, and educators, OpenVerse provides an intuitive interface to explore thousands of poems from renowned poets throughout history and record your own unique recitations.

The platform leverages the extensive PoetryDB API to offer instant access to a vast collection of poetry, spanning various authors, styles, and time periods. Whether you're a student practicing for a presentation, an actor preparing for an audition, or simply someone who loves the spoken word, OpenVerse makes it easy to find the perfect poem and create high-quality audio recordings of your performances.

What sets OpenVerse apart is its seamless integration of discovery and creation. Users can search through poetry by author, title, or specific lines, discover random poems for inspiration, and immediately transition to recording their recitation with professional-grade audio controls. The built-in MediaRecorder API ensures high-quality audio capture, while features like pause/resume functionality give you complete control over your recording sessions.

All recordings are automatically saved to your personal dashboard, where you can review, playback, and manage your collection. The platform uses browser-based LocalStorage to persist your data, meaning no server uploads are required - your recordings stay private and local to your device. With support for up to 10 recordings, you can build a personal library of your favorite poetry performances.

OpenVerse is designed with simplicity and accessibility in mind. The responsive Bootstrap-based interface works seamlessly across desktop and mobile devices, making it easy to record and share poetry anywhere, anytime. Whether you're building a portfolio, practicing pronunciation, or creating content for educational purposes, OpenVerse provides all the tools you need in one elegant, easy-to-use application.

## ✨ Features

- **Search Poetry**: Find poems by author, title, line content, or get random selections
- **Audio Recording**: Record yourself reciting poems with pause/resume capability
- **Dashboard**: View, play, and manage all your recordings
- **User Profiles**: Sign up, sign in, and personalize your profile
- **Persistent Storage**: Automatically saves up to 10 recordings locally

## 🛠️ Technologies

- Bootstrap 5.3.3
- JavaScript ES6+ with MediaRecorder API
- [PoetryDB API](https://poetrydb.org)
- LocalStorage for data persistence

## 📁 Project Structure

```
capstone/
├── index.html       # Home page with carousel
├── search.html      # Poetry search interface
├── recorder.html    # Audio recording page
├── dash.html        # Recording history
├── profile.html     # User profile
├── signup.html      # Authentication
├── script.js        # Main application logic
└── style.css        # Custom styling
```

## 🚀 Getting Started

## Go to 
https://openverses.netlify.app/index.html
or

1. Clone the repository:
```bash
git clone https://github.com/akoonth1/capistone.git
```

2. Open `index.html` in your browser or use a local server:
```bash
npx http-server
```

3. Navigate to `http://localhost:3000`

## 💡 Quick Start

1. Click **Signup/In** to create an account
2. Go to **Search** to find poems
3. Click **Load to Recorder** on any poem
4. Click **Start Recording** and recite
5. **Stop** to save, then view in **Dashboard**

## 📝 Known Limitations

- LocalStorage ~5-10MB limit
- Single-user data overwrites (no backend)
- No password verification (demo only)
- Recordings don't sync across devices

## 🙏 Acknowledgments

- [PoetryDB](https://github.com/thundercomb/poetrydb) - Poetry database API
- [Bootstrap](https://getbootstrap.com/) - Frontend framework
- [Netify](https://openverses.netlify.app/index.html) -static server
