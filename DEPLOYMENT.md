# 🚀 Deployment Guide - Anoma Book Exchange

This guide covers multiple deployment options for the Anoma Book Exchange demo application.

## 📋 Prerequisites

- Git installed on your machine
- A GitHub account (for GitHub Pages)
- Modern web browser
- Internet connection (for CDN resources)

## 🎯 Deployment Options

### 1. GitHub Pages (Recommended)

GitHub Pages provides free hosting for static websites directly from your repository.

#### Automatic Deployment

1. **Fork or create a new repository**:
```bash
# Create new repository on GitHub
# Clone to your local machine
git clone https://github.com/YOUR_USERNAME/anoma-book-exchange.git
cd anoma-book-exchange
```

2. **Push your code**:
```bash
git add .
git commit -m "Initial commit: Anoma Book Exchange demo"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `Deploy from a branch`
   - Choose `main` branch and `/ (root)` folder
   - Click `Save`

4. **Access your site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/anoma-book-exchange/`
   - It may take a few minutes for the initial deployment

#### Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### 2. Netlify

1. **Create account** at [netlify.com](https://netlify.com)
2. **Connect your GitHub repository**
3. **Deploy settings**:
   - Build command: (leave empty)
   - Publish directory: `/`
4. **Deploy** - Your site will be live instantly!

### 3. Vercel

1. **Create account** at [vercel.com](https://vercel.com)
2. **Import your GitHub repository**
3. **The project is pre-configured** with `vercel.json` for automatic deployment
4. **Vercel will automatically**:
   - Detect the `public` directory as output
   - Use the included configuration
   - Deploy your site instantly

**Manual Configuration** (if needed):
- Framework Preset: **Other**
- Build command: (leave empty or use `npm run build:windows`)
- Output directory: **public**
- Install command: (leave empty)

**Project Structure for Vercel**:
```
project-root/
├── public/
│   ├── index.html         # Main application
│   ├── anoma-logo.svg     # Anoma logo
│   └── red-wave.svg       # Decorative wave
├── vercel.json            # Vercel configuration
└── package.json           # Project metadata
```

### 4. Self-Hosted / Custom Server

#### Using Python (Simple)
```bash
# Navigate to project directory
cd anoma-book-exchange

# Start Python server
python -m http.server 8000

# Access at http://localhost:8000
```

#### Using Node.js
```bash
# Install live-server globally
npm install -g live-server

# Start server
live-server --port=8000

# Access at http://localhost:8000
```

#### Using PHP
```bash
# Start PHP server
php -S localhost:8000

# Access at http://localhost:8000
```

#### Apache/Nginx Configuration

**Apache (.htaccess)**:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /anoma-book-exchange.html [L]
```

**Nginx**:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/anoma-book-exchange;
    index anoma-book-exchange.html;
    
    location / {
        try_files $uri $uri/ /anoma-book-exchange.html;
    }
}
```

## 🔧 Configuration

### Custom Domain (GitHub Pages)

1. **Add CNAME file**:
```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

2. **Configure DNS**:
   - Add CNAME record: `www.your-domain.com` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### Environment Variables

For different environments, you might want to modify:

```javascript
// In your HTML file, add environment detection
const CONFIG = {
  production: {
    API_URL: 'https://api.your-domain.com',
    DEBUG: false
  },
  development: {
    API_URL: 'http://localhost:3000',
    DEBUG: true
  }
};

const ENV = window.location.hostname === 'localhost' ? 'development' : 'production';
const config = CONFIG[ENV];
```

## 🔍 Troubleshooting

### Common Issues

1. **Vercel: "No Output Directory named 'public' found"**:
   - **Solution 1**: Use the included `vercel.json` configuration file
   - **Solution 2**: In Vercel dashboard, set Output Directory to `./` (root)
   - **Solution 3**: Ensure Framework Preset is set to "Other"
   - The project includes a `vercel.json` file that automatically configures this

2. **Blank page after deployment**:
   - Check browser console for errors
   - Verify CDN resources are loading
   - Ensure HTTPS for external resources

3. **Images not loading**:
   - Check file paths are relative
   - Verify SVG files are properly formatted
   - Ensure files are committed to repository

4. **GitHub Pages not updating**:
   - Check Actions tab for build status
   - Clear browser cache
   - Wait 5-10 minutes for propagation

5. **CORS issues**:
   - Use relative paths for local resources
   - Ensure CDN resources support CORS
   - Consider self-hosting dependencies

### Debug Checklist

- [ ] All files committed and pushed
- [ ] No broken links in HTML
- [ ] CSS/JS resources loading correctly
- [ ] Images have correct file extensions
- [ ] No console errors in browser
- [ ] Repository settings configured correctly

## 🌐 CDN Alternatives

If CDN resources fail, consider self-hosting:

1. **Download dependencies**:
```bash
# Create libs directory
mkdir libs

# Download React
wget https://unpkg.com/react@18/umd/react.production.min.js -O libs/react.min.js
wget https://unpkg.com/react-dom@18/umd/react-dom.production.min.js -O libs/react-dom.min.js

# Download Babel
wget https://unpkg.com/@babel/standalone/babel.min.js -O libs/babel.min.js
```

2. **Update HTML references**:
```html
<script src="./libs/react.min.js"></script>
<script src="./libs/react-dom.min.js"></script>
<script src="./libs/babel.min.js"></script>
```

## 📊 Performance Optimization

### Loading Speed
- Use production React builds for deployment
- Minify CSS/JS if needed
- Optimize SVG files
- Enable GZIP compression on server

### Caching
```html
<!-- Add cache headers -->
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

## 🔒 Security Considerations

- Use HTTPS in production
- Validate user inputs
- Sanitize data before display
- Keep dependencies updated

---

## 📞 Need Help?

- **GitHub Issues**: [Report deployment issues](https://github.com/username/anoma-book-exchange/issues)
- **Documentation**: Check our [troubleshooting guide](docs/TROUBLESHOOTING.md)
- **Community**: Join our [discussions](https://github.com/username/anoma-book-exchange/discussions)

Happy deploying! 🚀