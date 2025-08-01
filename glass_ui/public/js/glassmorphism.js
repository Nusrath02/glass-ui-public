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
