# 🤝 Contributing to Anoma Book Exchange

We love your input! We want to make contributing to the Anoma Book Exchange demo as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 📋 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- **Be respectful** and inclusive
- **Be collaborative** and constructive
- **Be patient** with newcomers
- **Focus on what's best** for the community

## 🚀 Getting Started

### Development Setup

1. **Fork the repository**
2. **Clone your fork**:
```bash
git clone https://github.com/YOUR_USERNAME/anoma-book-exchange.git
cd anoma-book-exchange
```

3. **Create a branch** for your feature:
```bash
git checkout -b feature/amazing-new-feature
```

4. **Start development server**:
```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js (if you have live-server)
npm install -g live-server
live-server --port=8000
```

5. **Open in browser**: `http://localhost:8000`

## 🐛 Reporting Bugs

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/username/anoma-book-exchange/issues/new).

**Great Bug Reports** include:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Bug Report Template

```markdown
**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Additional Context**
Add any other context about the problem here.
```

## 💡 Suggesting Features

We welcome feature suggestions! Please [open an issue](https://github.com/username/anoma-book-exchange/issues/new) with:

- **Clear title** and description
- **Detailed explanation** of the proposed feature
- **Use cases** - why would this be useful?
- **Examples** or mockups if applicable

## 🔧 Contributing Code

### Pull Request Process

1. **Fork & Clone** the repository
2. **Create a feature branch** from `main`
3. **Make your changes**
4. **Test thoroughly**
5. **Update documentation** if needed
6. **Submit a Pull Request**

### Pull Request Guidelines

- **One feature per PR** - keep changes focused
- **Clear commit messages** - explain what and why
- **Update docs** - if you change functionality
- **Test your changes** - ensure nothing breaks
- **Follow coding standards** - see style guide below

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(solver): add 4-way intent matching algorithm
fix(ui): resolve mobile responsiveness issues
docs(readme): update installation instructions
```

## 🎨 Style Guide

### JavaScript
- Use **modern ES6+** syntax
- **Descriptive variable names**
- **Comment complex logic**
- **Consistent indentation** (2 spaces)

```javascript
// Good
const calculateIntentMatches = (intents) => {
  // Find direct 2-way matches first
  const directMatches = findDirectMatches(intents);
  return directMatches;
};

// Avoid
const calc = (i) => {
  let m = [];
  // ...
  return m;
};
```

### React Components
- **Functional components** with hooks
- **Descriptive component names**
- **Props destructuring**
- **Meaningful prop names**

```javascript
// Good
const IntentCard = ({ intent, isMatched, onSelect }) => {
  return (
    <div className={`intent-card ${isMatched ? 'matched' : ''}`}>
      {/* component content */}
    </div>
  );
};

// Avoid
const Card = ({ data, flag, cb }) => {
  // ...
};
```

### CSS/Styling
- Use **TailwindCSS classes** when possible
- **Custom CSS** only when necessary
- **Responsive design** - mobile first
- **Consistent spacing** using Tailwind scale

```html
<!-- Good -->
<div className="bg-white rounded-lg shadow-lg p-6 mb-8 fade-in">

<!-- Avoid inline styles -->
<div style="background: white; padding: 20px;">
```

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, please verify:

- [ ] **All features work** on desktop and mobile
- [ ] **Intent matching** algorithm works correctly
- [ ] **UI animations** are smooth
- [ ] **Form validation** works properly
- [ ] **No console errors**
- [ ] **Cross-browser compatibility** (Chrome, Firefox, Safari)

### Testing New Features

When adding new features:

1. **Test happy path** - normal usage
2. **Test edge cases** - empty data, invalid input
3. **Test error handling** - network failures, etc.
4. **Test on different devices** - mobile, tablet, desktop
5. **Test with different data** - various intent combinations

## 📖 Documentation

### What to Document

- **New features** - how to use them
- **API changes** - breaking changes especially
- **Setup instructions** - if process changes
- **Configuration options** - new settings

### Documentation Style

- **Clear headings** and structure
- **Code examples** for complex features
- **Screenshots** for UI changes
- **Step-by-step instructions**

## 🏷️ Issue Labels

We use these labels to organize issues:

- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation needs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - This won't be worked on

## 🎯 Areas for Contribution

Looking for ways to help? Here are some areas:

### 🔧 Technical Improvements
- **Performance optimization**
- **Better error handling**
- **Code refactoring**
- **Accessibility improvements**

### 🎨 Design & UX
- **UI/UX improvements**
- **Animation enhancements**
- **Mobile responsiveness**
- **Color scheme refinements**

### 📚 Documentation
- **API documentation**
- **Tutorial creation**
- **Translation** (internationalization)
- **Video guides**

### ✨ Features
- **Advanced matching algorithms**
- **User profiles**
- **Intent history**
- **Export/import functionality**

## 🤔 Questions?

Don't hesitate to ask questions:

- **GitHub Discussions** - for general questions
- **GitHub Issues** - for bug reports and feature requests
- **Email** - your-email@example.com for private matters

## 🎉 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **Social media** shoutouts for major features

---

## 📞 Contact

- **Project Maintainer**: [Jotos64](https://github.com/jotos64)
- **Issues**: [GitHub Issues](https://github.com/username/anoma-book-exchange/issues)
- **Discussions**: [GitHub Discussions](https://github.com/username/anoma-book-exchange/discussions)

Thank you for contributing to the Anoma Book Exchange demo! 🙏