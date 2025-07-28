// Glass UI - Core JavaScript Functions

(function() {
    'use strict';

    // Glass UI Configuration
    const GlassUI = {
        theme: localStorage.getItem('glass-theme') || 'light',
        particlesEnabled: localStorage.getItem('glass-particles') !== 'false',
        blurIntensity: parseInt(localStorage.getItem('glass-blur') || '10'),
        animationsEnabled: localStorage.getItem('glass-animations') !== 'false'
    };

    // Initialize Glass UI
    function initGlassUI() {
        // Set theme
        document.documentElement.setAttribute('data-theme', GlassUI.theme);
        
        // Initialize particles if enabled
        if (GlassUI.particlesEnabled) {
            initParticles();
        }
        
        // Apply custom blur intensity
        if (GlassUI.blurIntensity !== 10) {
            document.documentElement.style.setProperty('--glass-blur', `${GlassUI.blurIntensity}px`);
        }
        
        // Initialize components
        initGlassComponents();
        
        // Add glass effects to existing Frappe elements
        enhanceFrappeUI();
        
        // Initialize smooth scrolling
        initSmoothScroll();
        
        // Initialize intersection observers for animations
        if (GlassUI.animationsEnabled) {
            initScrollAnimations();
        }
    }

    // Create animated particles background
    function initParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'glass-particles';
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
    }

    // Initialize glass components
    function initGlassComponents() {
        // Initialize tooltips
        initTooltips();
        
        // Initialize ripple effects
        initRippleEffects();
        
        // Initialize form enhancements
        initFormEnhancements();
        
        // Initialize hover effects
        initHoverEffects();
    }

    // Enhance existing Frappe UI elements
    function enhanceFrappeUI() {
        // Add glass effects to all cards
        document.querySelectorAll('.card').forEach(card => {
            if (!card.classList.contains('glass-enhanced')) {
                card.classList.add('glass-container', 'glass-enhanced');
            }
        });
        
        // Enhance forms
        document.querySelectorAll('.form-control, select, textarea').forEach(input => {
            if (!input.classList.contains('glass-enhanced')) {
                input.classList.add('glass-enhanced');
                
                // Add focus animations
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('glass-focus');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('glass-focus');
                });
            }
        });
        
        // Enhance buttons
        document.querySelectorAll('.btn').forEach(button => {
            if (!button.classList.contains('glass-enhanced')) {
                button.classList.add('glass-enhanced');
                addRippleEffect(button);
            }
        });
        
        // Enhance modals
        document.querySelectorAll('.modal-content').forEach(modal => {
            if (!modal.classList.contains('glass-enhanced')) {
                modal.classList.add('glass-enhanced');
            }
        });
    }

    // Initialize tooltips
    function initTooltips() {
        document.addEventListener('mouseover', function(e) {
            const tooltipElement = e.target.closest('[data-glass-tooltip]');
            if (tooltipElement) {
                showTooltip(tooltipElement);
            }
        });
        
        document.addEventListener('mouseout', function(e) {
            const tooltipElement = e.target.closest('[data-glass-tooltip]');
            if (tooltipElement) {
                hideTooltip(tooltipElement);
            }
        });
    }

    // Show tooltip
    function showTooltip(element) {
        const tooltipText = element.getAttribute('data-glass-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'glass-tooltip';
        tooltip.textContent = tooltipText;
        tooltip.id = 'glass-tooltip-' + Date.now();
        
        document.body.appendChild(tooltip);
        
        // Position tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        // Show tooltip
        setTimeout(() => tooltip.classList.add('show'), 10);
        
        element.setAttribute('data-tooltip-id', tooltip.id);
    }

    // Hide tooltip
    function hideTooltip(element) {
        const tooltipId = element.getAttribute('data-tooltip-id');
        const tooltip = document.getElementById(tooltipId);
        
        if (tooltip) {
            tooltip.classList.remove('show');
            setTimeout(() => tooltip.remove(), 200);
            element.removeAttribute('data-tooltip-id');
        }
    }

    // Initialize ripple effects
    function initRippleEffects() {
        document.addEventListener('click', function(e) {
            const rippleElement = e.target.closest('.glass-ripple, .btn');
            if (rippleElement) {
                createRipple(e, rippleElement);
            }
        });
    }

    // Add ripple effect to element
    function addRippleEffect(element) {
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
    }

    // Create ripple animation
    function createRipple(e, element) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // Initialize form enhancements
    function initFormEnhancements() {
        // Floating labels
        document.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input, select, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                // Check if input has value on load
                if (input.value) {
                    label.classList.add('floating');
                }
                
                // Add event listeners
                input.addEventListener('focus', () => label.classList.add('floating'));
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.classList.remove('floating');
                    }
                });
            }
        });
    }

    // Initialize hover effects
    function initHoverEffects() {
        // 3D tilt effect for cards
        document.querySelectorAll('.glass-card, .glass-widget').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                if (!GlassUI.animationsEnabled) return;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    // Initialize smooth scrolling
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Initialize scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('glass-animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements with animation classes
        document.querySelectorAll('.glass-animate').forEach(element => {
            observer.observe(element);
        });
    }

    // Theme switcher
    window.GlassUI = window.GlassUI || {};
    window.GlassUI.setTheme = function(theme) {
        GlassUI.theme = theme;
        localStorage.setItem('glass-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    // Toggle particles
    window.GlassUI.toggleParticles = function(enabled) {
        GlassUI.particlesEnabled = enabled;
        localStorage.setItem('glass-particles', enabled);
        
        if (enabled) {
            initParticles();
        } else {
            const particles = document.querySelector('.glass-particles');
            if (particles) particles.remove();
        }
    };

    // Set blur intensity
    window.GlassUI.setBlurIntensity = function(intensity) {
        GlassUI.blurIntensity = intensity;
        localStorage.setItem('glass-blur', intensity);
        document.documentElement.style.setProperty('--glass-blur', `${intensity}px`);
    };

    // Notification system
    window.GlassUI.notify = function(title, message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `glass-notification glass-notification--${type}`;
        
        notification.innerHTML = `
            <div class="glass-notification__title">${title}</div>
            <div class="glass-notification__message">${message}</div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slide-out 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlassUI);
    } else {
        initGlassUI();
    }

    // Re-initialize on page change (for single page apps)
    if (window.frappe) {
        frappe.router.on('change', () => {
            setTimeout(() => {
                enhanceFrappeUI();
                initGlassComponents();
            }, 100);
        });
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes slide-out {
            to {
                transform: translateX(120%);
                opacity: 0;
            }
        }
        
        .glass-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .glass-animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .glass-focus {
            position: relative;
        }
        
        .glass-focus::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary-gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .glass-focus:focus-within::after {
            transform: scaleX(1);
        }
    `;
    document.head.appendChild(style);

})();