# WebSafe – A Smarter Way to Browse Safely 🛡️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Sourish-Chakraborty04/WebSafe?style=social)](https://github.com/Sourish-Chakraborty04/WebSafe)

WebSafe is a browser extension that uses machine learning to detect phishing websites in real time, helping users avoid scams, fake login pages, and malicious sites. This repository hosts the **public website** for the WebSafe project, built with modern web technologies and hosted via GitHub Pages.

> 🔗 **Main Extension Repo**: [Sourish-Chakraborty04/WebSafe](https://github.com/Sourish-Chakraborty04/WebSafe)

---

## 🌐 What is WebSafe?

WebSafe is a privacy‑focused browser extension that analyzes URLs and page content using an ML model to classify sites as **safe** or **phishing**. It runs locally in the browser (or with a lightweight backend) and warns users before they enter credentials on suspicious pages.

### Why WebSafe?

- **Real‑time protection**: Scans URLs as you browse, not just from static blacklists.
- **ML‑powered detection**: Uses features like URL structure, domain age, and page content to catch new phishing sites.
- **Lightweight & fast**: Designed to work smoothly without slowing down your browser.
- **Open & transparent**: Code is open source so security researchers and developers can audit and improve it.

---

## 🚀 Features

- 🔍 Real‑time URL analysis using a trained ML model
- 🛑 Blocks or warns on detected phishing pages
- 📊 Clean popup UI showing site safety status
- 🧠 Feature extraction from URL, domain, and page content
- 🌐 Works as a Chrome/Edge extension (with potential for Firefox)
- 🛡️ Privacy‑first: minimal data collection, no unnecessary permissions

---

## 📂 Project Structure

This repo (`WebSafe-Publicsite`) is the **public website** for the WebSafe project. It contains:
<pre><code>
WebSafe-Publicsite/
├── index.html # Main landing page
├── css/ # Styles (Tailwind/Bootstrap or custom CSS)
├── js/ # Interactive scripts (animations, modals, etc.)
├── assets/ # Images, icons, logos
├── docs/ # Documentation, user guides, FAQs
└── README.md # This file
</code></pre>
The actual browser extension code lives in the main repo:

🔗 [Sourish-Chakraborty04/WebSafe](https://github.com/Sourish-Chakraborty04/WebSafe)

---

## 🛠️ Tech Stack

### Public Website (This Repo)

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS / Bootstrap / Custom CSS
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (optional CI/CD)

### Browser Extension (Main Repo)

- **Extension**: Chrome and any Chromium-based Web Browser 
- **ML Model**: CatBoost
- **Backend**: Flask API (Python)
- **Data**: Large labeled dataset of phishing & legitimate URLs
- **Tools**: Pandas, Scikit‑learn, Joblib & many more.

---

## 📖 How to Use

1. Install the WebSafe extension from the main repo and load it unpacked in developer mode.
2. Browse normally – the extension will automatically analyze URLs.
3. When a suspicious site is detected, you’ll see a warning pop-up.
4. Decide whether to proceed or go back to a safe page.

For detailed setup and usage, see the [docs](docs/) folder or the main extension README.

---

## 🧩 How It Works

1. **URL Capture**: Extension captures the current tab’s URL.
2. **Feature Extraction**: Extracts features like URL length, domain age, special characters, etc.
3. **ML Prediction**: Sends features to the ML model via API for analysis.
4. **Result Display**: Shows a clear safety status (safe / phishing) in the pop-up.
5. **User Action**: User can choose to proceed or block the site.

---

## 🤝 Contributing

We welcome contributions to both the extension and the public website! Here’s how you can help:

- Improve the website design and UX
- Add documentation and tutorials
- Translate the site into other languages
- Report bugs or suggest features

### Steps to Contribute

1. Fork this repo (`WebSafe-Publicsite`).
2. Create a feature branch: `git checkout -b feat/new-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feat/new-feature`.
5. Open a pull request with a clear description.

Please follow the code style and keep commits focused.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

- **Project Lead**: Sourish Chakraborty & Sriparno Chakraborty
- **GitHub**: [@Sourish-Chakraborty04](https://github.com/Sourish-Chakraborty04) & [@Sriparno_Chakraborty-git](https://github.com/Sriparno-Chakraborty-git)

---

> Built with ❤️ for a safer web.
