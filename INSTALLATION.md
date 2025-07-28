# Glass UI Installation Guide

This guide provides detailed instructions for installing Glass UI in your Frappe environment.

## Prerequisites

- Frappe Framework v14+ installed
- Python 3.8 or higher
- Node.js v14 or higher
- Git
- MariaDB/MySQL
- Redis

## Installation Methods

### Method 1: Using Bench (Recommended)

1. **Navigate to your bench directory**:
```bash
cd ~/frappe-bench
```

2. **Get the app from GitHub**:
```bash
bench get-app https://github.com/yourusername/glass_ui.git
```

3. **Install the app on your site**:
```bash
bench --site your-site-name install-app glass_ui
```

4. **Build assets**:
```bash
bench build --app glass_ui
```

5. **Clear cache and restart**:
```bash
bench --site your-site-name clear-cache
bench restart
```

### Method 2: Manual Installation

1. **Clone the repository**:
```bash
cd ~/frappe-bench/apps
git clone https://github.com/yourusername/glass_ui.git
```

2. **Install Python dependencies**:
```bash
cd glass_ui
pip install -r requirements.txt
```

3. **Add app to sites**:
```bash
cd ~/frappe-bench
bench --site your-site-name install-app glass_ui
```

4. **Build and deploy**:
```bash
bench build --app glass_ui
bench --site your-site-name migrate
```

## Frappe Cloud Installation

### Via Frappe Cloud Dashboard

1. Log in to your [Frappe Cloud](https://frappecloud.com) account
2. Select your bench
3. Go to **Apps** → **Add App**
4. Click **Add from GitHub**
5. Enter repository URL: `https://github.com/yourusername/glass_ui.git`
6. Select branch: `main`
7. Click **Add App**
8. Go to your site → **Apps** → **Install App**
9. Select **Glass UI** and click **Install**

### Via Frappe Cloud CLI

1. **Install Frappe Cloud CLI**:
```bash
pip install frappe-cloud-cli
```

2. **Login to Frappe Cloud**:
```bash
frappe-cloud login
```

3. **Add the app**:
```bash
frappe-cloud app add glass_ui https://github.com/yourusername/glass_ui.git
```

4. **Deploy to your site**:
```bash
frappe-cloud deploy --app glass_ui --site your-site-name
```

## Post-Installation Setup

### 1. Verify Installation

Check if Glass UI is properly installed:
```bash
bench --site your-site-name list-apps
```

You should see `glass_ui` in the list.

### 2. Configure Settings

1. Go to **Awesome Bar** → Type "Glass UI Settings"
2. Configure:
   - Theme (Light/Dark)
   - Blur Intensity
   - Enable/Disable Particles
   - Enable/Disable Animations

### 3. Clear Browser Cache

For the best experience, clear your browser cache after installation:
- Chrome: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Firefox: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Safari: `Cmd+Option+E`

## Troubleshooting

### CSS/JS Not Loading

1. **Rebuild assets**:
```bash
bench build --app glass_ui --force
```

2. **Clear all caches**:
```bash
bench --site all clear-cache
bench clear-website-cache
```

3. **Check browser console** for errors

### Glass Effects Not Showing

1. **Check browser compatibility**:
   - Ensure your browser supports `backdrop-filter`
   - Update to the latest browser version

2. **Verify CSS is loaded**:
   - Open Developer Tools → Network tab
   - Refresh page and check if `glassmorphism.css` loads

3. **Check theme settings**:
   - Ensure Glass UI theme is active in settings

### Installation Fails

1. **Check dependencies**:
```bash
cd ~/frappe-bench/apps/glass_ui
pip install -r requirements.txt --upgrade
```

2. **Check Frappe version**:
```bash
bench version
```
Ensure you're running Frappe v14+

3. **Check error logs**:
```bash
bench --site your-site-name console
# Check for any Glass UI related errors
```

### Performance Issues

1. **Reduce blur intensity** in settings
2. **Disable particles** for better performance
3. **Disable animations** on low-end devices

## Updating Glass UI

### Update to Latest Version

```bash
cd ~/frappe-bench
bench update --apps glass_ui
bench build --app glass_ui
bench --site your-site-name clear-cache
```

### Update to Specific Version

```bash
cd ~/frappe-bench/apps/glass_ui
git checkout v1.2.0  # Replace with desired version
cd ~/frappe-bench
bench build --app glass_ui
bench --site your-site-name migrate
```

## Uninstallation

To remove Glass UI:

```bash
bench --site your-site-name uninstall-app glass_ui
bench remove-app glass_ui
```

## Support

- **Documentation**: [Wiki](https://github.com/yourusername/glass_ui/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/glass_ui/issues)
- **Community**: [Frappe Forum](https://discuss.frappe.io)
- **Email**: support@yourcompany.com

## Next Steps

After installation:
1. Explore the [Component Gallery](/app/glass-ui-components)
2. Customize theme settings
3. Read the [Customization Guide](CUSTOMIZATION.md)
4. Join our community for updates