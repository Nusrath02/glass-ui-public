// Glass UI - UI Enhancements and Animations

(function() {
    'use strict';

    // Advanced UI enhancements
    const UIEnhancements = {
        init() {
            this.initAdvancedAnimations();
            this.initDynamicBackgrounds();
            this.initInteractiveElements();
            this.initCustomCharts();
            this.initPageTransitions();
            this.initCustomCursors();
            this.initMagneticButtons();
        },

        // Advanced animations
        initAdvancedAnimations() {
            // Parallax scrolling for glass elements
            let ticking = false;
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.glass-parallax');
                
                parallaxElements.forEach(element => {
                    const speed = element.dataset.parallaxSpeed || 0.5;
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            }
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            });

            // Stagger animations for lists
            const animateLists = () => {
                document.querySelectorAll('.glass-stagger-list').forEach(list => {
                    const items = list.querySelectorAll('.glass-stagger-item');
                    items.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.1}s`;
                        item.classList.add('glass-fade-in-up');
                    });
                });
            };
            
            if (window.frappe) {
                frappe.router.on('change', animateLists);
            }
            animateLists();
        },

        // Dynamic gradient backgrounds
        initDynamicBackgrounds() {
            const gradientBg = document.createElement('div');
            gradientBg.className = 'glass-gradient-bg';
            gradientBg.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
                opacity: 0.5;
            `;
            
            // Animated gradient
            const animateGradient = () => {
                const time = Date.now() * 0.001;
                const color1 = `hsl(${Math.sin(time) * 60 + 200}, 70%, 50%)`;
                const color2 = `hsl(${Math.sin(time + 2) * 60 + 250}, 70%, 50%)`;
                const color3 = `hsl(${Math.sin(time + 4) * 60 + 300}, 70%, 50%)`;
                
                gradientBg.style.background = `
                    radial-gradient(circle at 20% 50%, ${color1} 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, ${color2} 0%, transparent 50%),
                    radial-gradient(circle at 40% 20%, ${color3} 0%, transparent 50%)
                `;
                
                requestAnimationFrame(animateGradient);
            };
            
            if (localStorage.getItem('glass-dynamic-bg') !== 'false') {
                document.body.appendChild(gradientBg);
                animateGradient();
            }
        },

        // Interactive hover effects
        initInteractiveElements() {
            // Magnetic hover effect
            document.querySelectorAll('.glass-magnetic').forEach(element => {
                element.addEventListener('mousemove', (e) => {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                
                element.addEventListener('mouseleave', () => {
                    element.style.transform = '';
                });
            });

            // Glow effect on hover
            document.querySelectorAll('.glass-glow').forEach(element => {
                element.addEventListener('mousemove', (e) => {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    element.style.setProperty('--glow-x', `${x}px`);
                    element.style.setProperty('--glow-y', `${y}px`);
                });
            });
        },

        // Custom chart animations
        initCustomCharts() {
            // Animate chart values
            const animateValue = (element, start, end, duration) => {
                const startTime = performance.now();
                
                const updateValue = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = start + (end - start) * easeOutQuart;
                    
                    element.textContent = Math.round(current);
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateValue);
                    }
                };
                
                requestAnimationFrame(updateValue);
            };

            // Initialize counters
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        const target = parseInt(entry.target.dataset.target) || 100;
                        animateValue(entry.target, 0, target, 2000);
                        entry.target.classList.add('animated');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.glass-counter').forEach(counter => {
                counterObserver.observe(counter);
            });
        },

        // Page transitions
        initPageTransitions() {
            if (!window.frappe) return;

            const transitionOverlay = document.createElement('div');
            transitionOverlay.className = 'glass-transition-overlay';
            transitionOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                z-index: 9999;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(transitionOverlay);

            frappe.router.on('before-change', () => {
                transitionOverlay.style.opacity = '1';
                transitionOverlay.style.pointerEvents = 'all';
            });

            frappe.router.on('change', () => {
                setTimeout(() => {
                    transitionOverlay.style.opacity = '0';
                    transitionOverlay.style.pointerEvents = 'none';
                }, 100);
            });
        },

        // Custom cursor effects
        initCustomCursors() {
            if (window.innerWidth < 768) return; // Disable on mobile

            const cursor = document.createElement('div');
            cursor.className = 'glass-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border: 2px solid var(--glass-border);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                display: none;
            `;
            document.body.appendChild(cursor);

            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.display = 'block';
            });

            // Smooth cursor movement
            const animateCursor = () => {
                const dx = mouseX - cursorX;
                const dy = mouseY - cursorY;
                
                cursorX += dx * 0.1;
                cursorY += dy * 0.1;
                
                cursor.style.left = cursorX - 10 + 'px';
                cursor.style.top = cursorY - 10 + 'px';
                
                requestAnimationFrame(animateCursor);
            };
            animateCursor();

            // Cursor interactions
            document.querySelectorAll('a, button, .clickable').forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.style.width = '40px';
                    cursor.style.height = '40px';
                    cursor.style.transform = 'translate(-10px, -10px)';
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.style.width = '20px';
                    cursor.style.height = '20px';
                    cursor.style.transform = 'translate(0, 0)';
                });
            });
        },

        // Magnetic buttons
        initMagneticButtons() {
            document.querySelectorAll('.glass-magnetic-btn').forEach(button => {
                button.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                    this.querySelector('span').style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.querySelector('span').style.transform = '';
                });
            });
        }
    };

    // Utility functions
    const Utils = {
        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };

    // Custom animations CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glass-fade-in-up {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .glass-fade-in-up {
            animation: glass-fade-in-up 0.6s ease forwards;
        }
        
        @keyframes glass-pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.8;
            }
        }
        
        .glass-pulse {
            animation: glass-pulse 2s ease infinite;
        }
        
        .glass-glow {
            position: relative;
            overflow: hidden;
        }
        
        .glass-glow::before {
            content: '';
            position: absolute;
            top: var(--glow-y, 50%);
            left: var(--glow-x, 50%);
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .glass-glow:hover::before {
            opacity: 1;
        }
        
        .glass-magnetic-btn {
            position: relative;
            transition: transform 0.2s ease;
        }
        
        .glass-magnetic-btn span {
            display: block;
            transition: transform 0.2s ease;
        }
    `;
    document.head.appendChild(style);

    // Initialize enhancements
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => UIEnhancements.init());
    } else {
        UIEnhancements.init();
    }

    // Re-initialize on route change
    if (window.frappe) {
        frappe.router.on('change', () => {
            setTimeout(() => UIEnhancements.init(), 100);
        });
    }

    // Expose to global scope
    window.GlassUIEnhancements = UIEnhancements;
    window.GlassUIUtils = Utils;

})();