# Glass UI - Glassmorphism UI for Frappe

A custom Frappe app that transforms the entire Frappe Cloud UI using glassmorphism design principles, featuring semi-transparent backgrounds, frosted glass effects, and smooth animations.

![Glass UI Preview](preview.png)

## Features

- 🎨 **Complete UI Transformation**: Overrides default Frappe styles with glassmorphism design
- 🌊 **Frosted Glass Effects**: Semi-transparent backgrounds with backdrop blur
- ✨ **Smooth Animations**: Interactive hover effects and transitions
- 🎯 **Custom Components**: Glass-styled dashboards, forms, and navigation
- 🌓 **Theme Support**: Light and dark theme variants
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- ♿ **Accessibility**: WCAG compliant with proper contrast ratios

## Installation

### Prerequisites

- Frappe Bench installed
- Node.js (v14 or higher)
- Python 3.8+

### Local Development Setup

1. **Clone the repository**:
```bash
cd frappe-bench/apps
git clone https://github.com/YOUR_USERNAME/glass_ui.git
```

2. **Install the app**:
```bash
bench get-app glass_ui
bench --site your-site.local install-app glass_ui
```

3. **Build assets**:
```bash
bench build --app glass_ui
```

4. **Clear cache and restart**:
```bash
bench --site your-site.local clear-cache
bench restart
```

### Frappe Cloud Deployment

1. **Add app to your bench**:
   - Go to your Frappe Cloud dashboard
   - Navigate to Apps → Add App
   - Add the GitHub repository URL

2. **Deploy to site**:
   - Select your site
   - Go to Apps → Install App
   - Select Glass UI and install

## Configuration

### Customizing Glass Effects

You can customize the glassmorphism effects by modifying CSS variables in `/glass_ui/public/css/glassmorphism.css`:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-blur: 10px;
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

### Theme Selection

Switch between light and dark themes:

```javascript
// In your custom script
frappe.call({
    method: 'glass_ui.api.set_theme',
    args: { theme: 'dark' }, // or 'light'
    callback: function(r) {
        location.reload();
    }
});
```

## Project Structure

```
glass_ui/
├── glass_ui/
│   ├── public/
│   │   ├── css/
│   │   │   ├── glassmorphism.css    # Core glass effects
│   │   │   └── components.css       # Component styles
│   │   ├── js/
│   │   │   ├── glassmorphism.js     # Core functionality
│   │   │   └── ui-enhancements.js   # Animations & interactions
│   │   └── images/
│   ├── templates/
│   │   ├── base.html                # Base template override
│   │   └── includes/
│   ├── www/
│   │   └── dashboard.html           # Custom dashboard
│   ├── config/
│   └── hooks.py                     # App configuration
├── .github/
│   └── workflows/
│       └── deploy.yml               # CI/CD workflow
└── README.md
```

## Development

### Building CSS

```bash
# Watch mode for development
bench watch --app glass_ui

# Production build
bench build --app glass_ui --production
```

### Running Tests

```bash
bench run-tests --app glass_ui
```

### Linting

```bash
bench lint --app glass_ui
```

## Customization Guide

### Adding New Glass Components

1. Create component CSS in `/glass_ui/public/css/components.css`
2. Add JavaScript enhancements in `/glass_ui/public/js/ui-enhancements.js`
3. Clear cache and rebuild: `bench build --app glass_ui`

### Modifying Glass Effects

Edit the following files:
- `/glass_ui/public/css/glassmorphism.css` - Core glass styles
- `/glass_ui/public/js/glassmorphism.js` - Dynamic effects

## Performance Optimization

- CSS is minified and combined in production
- JavaScript is bundled and tree-shaken
- Images are lazy-loaded
- Critical CSS is inlined

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers with backdrop-filter support

## Troubleshooting

### Glass effects not showing

1. Check browser compatibility
2. Ensure CSS files are loaded: `bench build --app glass_ui`
3. Clear browser cache

### Performance issues

1. Reduce blur radius in CSS variables
2. Disable particle effects on low-end devices
3. Use `will-change` CSS property sparingly

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Frappe coding standards
- Ensure responsive design
- Test on multiple browsers
- Maintain accessibility standards
- Document new features

## License

MIT License - see [LICENSE](LICENSE) file

## Support

- Documentation: [Wiki](https://github.com/yourusername/glass_ui/wiki)
- Issues: [GitHub Issues](https://github.com/yourusername/glass_ui/issues)
- Discussions: [GitHub Discussions](https://github.com/yourusername/glass_ui/discussions)

## Credits

Built with ❤️ for the Frappe community