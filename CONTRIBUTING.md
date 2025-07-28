# Contributing to Glass UI

Thank you for your interest in contributing to Glass UI! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive criticism
- Respect differing viewpoints and experiences

## How to Contribute

### Reporting Issues

1. Check existing issues to avoid duplicates
2. Use issue templates when available
3. Provide clear reproduction steps
4. Include browser and OS information
5. Add screenshots for UI issues

### Suggesting Features

1. Open a discussion first for major features
2. Explain the use case and benefits
3. Consider backward compatibility
4. Provide mockups or examples if possible

### Code Contributions

#### Setup Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/yourusername/glass_ui.git
cd glass_ui
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/originalrepo/glass_ui.git
```

4. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

#### Development Guidelines

##### CSS Guidelines
- Use CSS custom properties for theming
- Follow BEM naming convention for components
- Ensure responsive design (mobile-first)
- Test with different color schemes
- Maintain consistent spacing and sizing

##### JavaScript Guidelines
- Use ES6+ syntax
- Follow Frappe's JavaScript style guide
- Add JSDoc comments for functions
- Avoid global variables
- Handle errors gracefully

##### Python Guidelines
- Follow PEP 8
- Add docstrings to all functions
- Write unit tests for new features
- Use type hints where appropriate

#### Testing

1. Run all tests before submitting:
```bash
bench run-tests --app glass_ui
```

2. Add tests for new features
3. Ensure no regressions
4. Test on multiple browsers

#### Commit Guidelines

Follow conventional commits format:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process/auxiliary tool changes

Example:
```
feat: add blur intensity slider to settings

- Add slider component for glass blur customization
- Save preference in user settings
- Update documentation
```

#### Pull Request Process

1. Update documentation for new features
2. Ensure all tests pass
3. Update CHANGELOG.md
4. Request review from maintainers
5. Address review feedback promptly

### Documentation

- Update README.md for user-facing changes
- Add inline comments for complex logic
- Update wiki for detailed guides
- Include examples for new features

## Style Guides

### CSS Style Guide
```css
/* Component block */
.glass-card {
  /* Positioning */
  position: relative;
  
  /* Box Model */
  padding: var(--spacing-lg);
  margin: var(--spacing-md);
  
  /* Visual */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  
  /* Typography */
  color: var(--text-primary);
  
  /* Misc */
  transition: all 0.3s ease;
}

/* Element */
.glass-card__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

/* Modifier */
.glass-card--dark {
  background: var(--glass-bg-dark);
}
```

### JavaScript Style Guide
```javascript
/**
 * Initialize glassmorphism effects
 * @param {Object} options - Configuration options
 * @param {number} options.blur - Blur intensity (0-20)
 * @param {string} options.theme - Theme name ('light' or 'dark')
 * @returns {void}
 */
function initGlassEffects(options = {}) {
    const defaults = {
        blur: 10,
        theme: 'light'
    };
    
    const settings = { ...defaults, ...options };
    
    // Implementation
}
```

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Given credit in documentation

## Questions?

- Open a discussion for general questions
- Join our community chat
- Email maintainers for sensitive issues

Thank you for contributing to Glass UI!