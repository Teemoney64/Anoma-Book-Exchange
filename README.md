# 🦐 Anoma Book Exchange

A lightweight demo web application that demonstrates **Anoma's intent-centric system** through a book exchange platform. Users declare what they want and offer, and a solver coordinates fair swaps.

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green.svg)](https://username.github.io/anoma-book-exchange/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 Live Demo

**[View Live Demo](https://username.github.io/anoma-book-exchange/)**

## 📖 About

This demo showcases the core concepts of **Anoma's intent-centric architecture**:

- **Intent Declaration**: Users specify what they want and what they offer
- **Intent Matching**: A solver algorithm finds optimal trade paths
- **Automatic Settlement**: Matched intents are automatically processed

### 🔄 How It Works

1. **Post Intent**: Users declare their trading intentions (Book Wanted + Book Offered + Username)
2. **Intent Pool**: All active intents are displayed in real-time
3. **Run Solver**: The matching algorithm finds 2-way and 3-way trading cycles
4. **Matched Trades**: Successfully matched intents are highlighted with "Solved!" badges

## 🚀 Features

- ✅ **Intent-based Trading System**
- ✅ **Smart Solver Algorithm** (2-way and 3-way matching)
- ✅ **Real-time UI Updates**
- ✅ **Mobile-responsive Design**
- ✅ **Anoma Brand Integration**
- ✅ **Smooth Animations**
- ✅ **Zero Dependencies** (runs in any modern browser)

## 🎨 Design

The application uses **Anoma's official brand colors**:
- **Deep Navy Blue** (#1E3A8A) - Headers and primary text
- **Bright Red** (#DC2626) - Alerts and highlights
- **Warm Beige** (#FDE68A) - Backgrounds and accents
- **Gold/Yellow** (#FBBF24) - Buttons and solver highlights
- **Neutral Gray** (#F9FAFB) - Clean backgrounds

## 🛠️ Tech Stack

- **Frontend**: React 18 (via CDN)
- **Styling**: TailwindCSS (via CDN)
- **Architecture**: Standalone HTML/JavaScript application
- **Deployment**: GitHub Pages ready

## 📦 Installation & Setup

### Option 1: Simple (No Dependencies)
```bash
# Clone the repository
git clone https://github.com/username/anoma-book-exchange.git
cd anoma-book-exchange

# Open in browser
open anoma-book-exchange.html
```

### Option 2: With Development Server
```bash
# Install dependencies
npm install

# Start development server
npm start
# OR
npm run dev

# Visit http://localhost:8000
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Fork/Clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click "Save"

3. **Automatic Deployment** (Optional):
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Manual Deployment
Simply upload these files to any web server:
- `anoma-book-exchange.html` (main app)
- `anoma-logo.svg`
- `red-wave.svg`

## 📁 Project Structure

```
anoma-book-exchange/
├── anoma-book-exchange.html    # Main application file
├── index.html                  # Enhanced version with meta tags
├── app.js                      # React components (if separated)
├── anoma-logo.svg             # Anoma branding logo
├── red-wave.svg               # Decorative wave graphic
├── package.json               # Project metadata & scripts
├── .gitignore                 # Git ignore rules
├── README.md                  # This file
├── DEPLOYMENT.md              # Deployment instructions
├── CONTRIBUTING.md            # Contribution guidelines
└── docs/                      # Additional documentation
    ├── API.md                 # Intent matching API docs
    └── DESIGN.md              # Design system documentation
```

## 🎮 Demo Data

The app comes preloaded with sample intents that demonstrate a **perfect 3-way trading cycle**:

- **Alice**: wants "1984", offers "The Great Gatsby"
- **Bob**: wants "The Great Gatsby", offers "To Kill a Mockingbird"  
- **Charlie**: wants "To Kill a Mockingbird", offers "1984"

Click **"Run Solver"** to see them get matched instantly!

## 🔧 Development

### Local Development
```bash
# Start local server (Python)
python -m http.server 8000

# Start local server (Node.js)
npx live-server --port=8000

# Start local server (PHP)
php -S localhost:8000
```

### Customization
- **Colors**: Update CSS custom properties in `<style>` section
- **Data**: Modify `initialIntents` array in JavaScript
- **Branding**: Replace `anoma-logo.svg` with your logo
- **Styling**: Customize TailwindCSS classes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Anoma Protocol** - For the inspiration and intent-centric architecture
- **React & TailwindCSS** - For the excellent development tools
- **GitHub Pages** - For free hosting

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/username/anoma-book-exchange/issues)
- **Documentation**: [Project Wiki](https://github.com/username/anoma-book-exchange/wiki)
- **Email**: your-email@example.com

---

**Built with ❤️ by [Jotos64](https://github.com/jotos64)**

*This is a demo inspired by Anoma's intent-centric architecture.*