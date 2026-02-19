# OpenVerse - Poetry Recording Platform

A web-based poetry recording application that allows users to discover, read, and record themselves reciting poems from a vast poetry database.

## 📖 Overview

OpenVerse is an interactive platform that combines poetry exploration with audio recording capabilities. Users can search through thousands of poems using the PoetryDB API, load their favorites into a recorder, and create audio recordings of their recitations. The platform features user authentication, a recording history dashboard, and a carousel showcasing recent recordings.

## ✨ Features

### Core Functionality
- **Poetry Search**: Search poems by author, title, line content, line count, or get random poems
- **Audio Recording**: Record yourself reciting poems with pause/resume functionality
- **Recording Management**: View, play, and manage your recording history
- **User Authentication**: Sign up and sign in with profile management
- **Persistent Storage**: All recordings and user data stored in browser localStorage

### User Interface
- **Home Page**: Carousel displaying recent recordings with audio playback
- **Search Page**: Advanced search interface with multiple filters and exact match options
- **Recorder Page**: Clean recording interface with sticky controls for long poems
- **Dashboard**: Table view of all recordings with play and delete functionality
- **Profile Page**: User information display with editable "About Me" section

### Recording Features
- Timer display showing recording duration
- Pause and resume recording capability
- Audio playback with download option
- Automatic naming using poem title and author
- Maximum of 10 recordings stored (oldest auto-deleted)

## 🛠️ Technologies Used

- **Frontend Framework**: Bootstrap 5.3.3
- **JavaScript**: ES6+ (Classes, Async/Await, LocalStorage API)
- **Audio API**: MediaRecorder API for audio recording
- **External API**: [PoetryDB](https://poetrydb.org) - RESTful poetry database
- **Storage**: Browser LocalStorage for data persistence
- **Styling**: Custom CSS with Bootstrap components

## 📁 Project Structure

```
capstone/
├── index.html          # Home page with recordings carousel
├── search.html         # Poetry search interface
├── recorder.html       # Audio recording page
├── dash.html          # Recording history dashboard
├── profile.html       # User profile page
├── signup.html        # User authentication page
├── script.js          # Main JavaScript logic (1400+ lines)
├── style.css          # Custom styling
├── table.js           # Table utilities
├── images/            # Icon images (book.png, speak.png, listening.png)
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with HTML5 support
- JavaScript enabled
- LocalStorage enabled (not in private/incognito mode)

### Installation

1. Clone or download the repository:
```bash
git https://github.com/akoonth1/capistone.git
cd openverse
```

2. Open `index.html` in your web browser, or serve with a local server:
```bash

# Using Node.js http-server
npx http-server
```

3. Navigate to `http://localhost:3000` in your browser

### First Use

1. **Sign Up**: Click "Signup/In" and create an account
2. **Search Poems**: Visit the Search page to find poems by various criteria
3. **Load to Recorder**: Click "Load to Recorder" on any poem with full text
4. **Record**: Click "Start Recording" and recite the poem
5. **Save**: Click "Stop Recording" to save your recording
6. **View History**: Visit the Dashboard to see all your recordings

## 💡 Usage Guide

### Searching for Poems

1. Navigate to the Search page
2. Select search type (Author, Title, Lines, Line Count, or Random)
3. Enter your search term
4. Optionally enable "Exact match only" for precise results
5. Choose which fields to display (Author, Title, Lines, Line Count)
6. Click "Search" or press Enter

### Recording a Poem

1. Search for a poem or use "Get Poem" button for a random poem
2. Review the poem text (scroll if needed - controls stay visible)
3. Click "Start Recording" when ready
4. Use "Pause"/"Resume" as needed during recording
5. Click "Stop Recording" when finished
6. Play back your recording using the audio player
7. Download your recording or clear the poem for a new one

### Managing Recordings

**Dashboard View:**
- Click "Play" to listen to any recording
- Click "Delete" to remove individual recordings
- Use "Clear All" to delete entire recording history

**Home Page Carousel:**
- Browse through your 10 most recent recordings
- Play audio directly from carousel cards
- Use arrow controls or indicators to navigate

### Profile Management

1. View your account information (username, email, age, account type)
2. Edit the "About Me" section to personalize your profile
3. Click "Save About Me" to store changes
4. Sign out using the navigation link

## 🔑 Key Components

### PoetryDB API Wrapper
The application includes a comprehensive JavaScript class wrapper for the PoetryDB API:

```javascript
// Available methods
poetryDB.getAuthors()                          // Get all authors
poetryDB.getByAuthor(author, outputFields)     // Search by author
poetryDB.getByTitle(title, exact, outputFields) // Search by title
poetryDB.searchByLine(line, exact, outputFields) // Search in poem text
poetryDB.getByLinecount(count, outputFields)   // Filter by line count
poetryDB.getRandom(count, outputFields)        // Get random poems
// ... and more combination methods
```

### LocalStorage Schema

```javascript
// User Data
localStorage.setItem('isLoggedIn', 'true')
localStorage.setItem('currentUser', 'username')
localStorage.setItem('userData', JSON.stringify({username, email, age, accountType}))
localStorage.setItem('aboutMe', 'About me text...')

// Poem Data
localStorage.setItem('savedPoem', JSON.stringify({title, author, text, savedAt}))

// Recordings Array
localStorage.setItem('recordings', JSON.stringify([
  {
    id: timestamp,
    user: 'username',
    poemTitle: 'Poem Title',
    author: 'Author Name',
    duration: '00:45',
    timestamp: 'Feb 19, 2026 10:30 AM',
    audioData: 'data:audio/webm;base64,...',
    blobType: 'audio/webm'
  }
]))
```

## 🎨 Features in Detail

### Sticky Recording Controls
The recording controls remain visible when scrolling through long poems, ensuring easy access to start, pause, and stop buttons.

### Author Name Normalization
Automatic handling of author name variations for better search results.

### Dynamic Navigation
Navigation bar updates based on authentication state:
- Guest users see: Home, Dashboard, Record, Search, Signup/In
- Logged-in users see: Home, Dashboard, Record, Search, Profile, Sign Out

### Guest Protection
Profile page redirects unauthenticated users with a prompt to sign in.

### Recording Limits
Maximum of 10 recordings stored. When the 11th recording is saved, the oldest is automatically deleted.

## 📝 Known Limitations

- **Storage**: LocalStorage has a ~5-10MB limit. Base64-encoded audio takes significant space.
- **Multi-user**: Single `userData` object overwrites between users (no backend database)
- **Password Security**: No actual password verification (demonstration purposes only)
- **Audio Format**: Recording format depends on browser support (WebM/OGG)
- **Cross-device**: Recordings don't sync across devices (localStorage is per-browser)

## 🔮 Future Enhancements

- [ ] Backend integration with real database
- [ ] User authentication with secure password hashing
- [ ] Cloud storage for audio files
- [ ] Social features (share recordings, comments)
- [ ] Advanced search combinations UI
- [ ] Export recordings to different audio formats
- [ ] Poem bookmarking and favorites
- [ ] Recording playback speed controls
- [ ] Audio waveform visualization
- [ ] Mobile-responsive improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [PoetryDB](https://github.com/thundercomb/poetrydb) - RESTful poetry database API
- [Bootstrap](https://getbootstrap.com/) - Frontend framework
- Poetry collection sourced from public domain works

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

