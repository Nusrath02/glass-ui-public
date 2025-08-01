// Glass UI - Frappe Cloud Compatible JavaScript

frappe.ready(function() {
    console.log('Glass UI initializing...');
    
    // Initialize Glass UI
    if (typeof GlassUI === 'undefined') {
        window.GlassUI = {};
    }
    
    // Configuration
    GlassUI.config = {
        theme: 'default',
        particlesEnabled: true,
        blurIntensity: 10,
        animationsEnabled: true
    };
    
    // Initialize Glass UI components
    GlassUI.init = function() {
        console.log('Glass UI: Starting initialization');
        
        // Apply glass effects immediately
        this.applyGlassEffects();
        
        // Initialize particles
        if (this.config.particlesEnabled) {
            this.initParticles();
        }
        
        // Initialize enhancements
        this.initEnhancements();
        
        // Set up observers for dynamic content
        this.setupObservers();
        
        console.log('Glass UI: Initialization complete');
    };
    
    // Apply glass effects to existing elements
    GlassUI.applyGlassEffects = function() {
        // Force apply styles to body
        document.body.style.cssText += `
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%) !important;
            background-attachment: fixed !important;
            min-height: 100vh !important;
        `;
        
        // Apply to existing containers
        const containers = document.querySelectorAll('.container, .layout-main-section, .page-container');
        containers.forEach(el => {
            el.classList.add('glass-enhanced');
        });
        
        // Apply to cards and forms
        const cards = document.querySelectorAll('.card, .widget, .form-section');
        cards.forEach(el => {
            el.classList.add('glass-enhanced');
        });
        
        // Apply to buttons
        const buttons = document.querySelectorAll('.btn, button');
        buttons.forEach(el => {
            if (!el.classList.contains('glass-enhanced')) {
                el.classList.add('glass-enhanced');
                this.addRippleEffect(el);
            }
        });
    };
    
    // Create particles background
    GlassUI.initParticles = function() {
        // Remove existing particles
        const existing = document.querySelector('.glass-particles');
        if (existing) existing.remove();
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'glass-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        `;
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                animation: float-up ${15 + Math.random() * 10}s infinite linear;
                animation-delay: ${Math.random() * 15}s;
            `;
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
        
        // Add animation keyframes
        if (!document.getElementById('glass-animations')) {
            const style = document.createElement('style');
            style.id = 'glass-animations';
            style.textContent = `
                @keyframes float-up {
                    0% {
                        transform: translateY(100vh) translateX(0);
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% {
                        transform: translateY(-10vh) translateX(100px);
                        opacity: 0;
                    }
                }
                
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                
                .glass-enhanced {
                    transition: all 0.3s ease !important;
                }
                
                .glass-enhanced:hover {
                    transform: translateY(-2px) !important;
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // Add ripple effect to buttons
    GlassUI.addRippleEffect = function(element) {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    };
    
    // Initialize form enhancements
    GlassUI.initEnhancements = function() {
        // Floating labels
        document.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input, select, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                input.addEventListener('focus', () => {
                    label.style.transform = 'translateY(-1.5rem) scale(0.8)';
                    label.style.color = 'rgba(255, 255, 255, 0.9)';
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.style.transform = '';
                        label.style.color = '';
                    }
                });
                
                // Check initial state
                if (input.value) {
                    label.style.transform = 'translateY(-1.5rem) scale(0.8)';
                }
            }
        });
        
        // Enhance form controls
        document.querySelectorAll('.form-control, input, select, textarea').forEach(el => {
            el.addEventListener('focus', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                this.style.boxShadow = '0 0 0 0.2rem rgba(255, 255, 255, 0.1)';
            });
            
            el.addEventListener('blur', function() {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            });
        });
    };
    
    // Set up mutation observer for dynamic content
    GlassUI.setupObservers = function() {
        const observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;
            
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            shouldUpdate = true;
                        }
                    });
                }
            });
            
            if (shouldUpdate) {
                setTimeout(() => this.applyGlassEffects(), 100);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    };
    
    // Theme switching functionality
    GlassUI.setTheme = function(theme) {
        this.config.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Store preference
        if (frappe && frappe.call) {
            frappe.call({
                method: 'glass_ui.utils.set_user_theme_preference',
                args: { theme: theme }
            });
        }
    };
    
    // Toggle particles
    GlassUI.toggleParticles = function(enabled) {
        this.config.particlesEnabled = enabled;
        
        if (enabled) {
            this.initParticles();
        } else {
            const particles = document.querySelector('.glass-particles');
            if (particles) particles.remove();
        }
    };
    
    // Notification system
    GlassUI.notify = function(title, message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `glass-notification glass-notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 16px;
            color: rgba(255, 255, 255, 0.95);
            z-index: 10000;
            min-width: 300px;
            animation: slide-in 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 4px;">${title}</div>
            <div style="font-size: 14px; opacity: 0.8;">${message}</div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slide-out 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Add animation styles if not exists
        if (!document.getElementById('notification-animations')) {
            const style = document.createElement('style');
            style.id = 'notification-animations';
            style.textContent = `
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slide-out {
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // Initialize Glass UI
    GlassUI.init();
    
    // Hook into Frappe events
    if (window.frappe) {
        // Re-initialize on route changes
        frappe.router.on('change', () => {
            setTimeout(() => {
                GlassUI.applyGlassEffects();
                GlassUI.initEnhancements();
            }, 200);
        });
        
        // Initialize after page load
        $(document).on('page-change', function() {
            setTimeout(() => {
                GlassUI.applyGlassEffects();
                GlassUI.initEnhancements();
            }, 300);
        });
        
        // Hook into form loading
        frappe.ui.form.on('refresh', function() {
            setTimeout(() => {
                GlassUI.applyGlassEffects();
                GlassUI.initEnhancements();
            }, 100);
        });
    }
    
    // Expose Glass UI globally
    window.GlassUI = GlassUI;
    
    console.log('Glass UI: Setup complete');
});
