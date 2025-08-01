// Glass UI - Force UI Enhancements Loading

// Force immediate execution
(function() {
    'use strict';
    
    console.log('Glass UI - Force loading started');
    
    // Force apply styles immediately
    function forceApplyGlassStyles() {
        // Create and inject critical CSS
        const criticalCSS = `
            body {
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%) !important;
                background-attachment: fixed !important;
                min-height: 100vh !important;
            }
            
            .container, .layout-main-section, .page-container {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                margin: 10px !important;
            }
            
            .navbar, .navbar-default {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
            }
            
            .card, .widget, .form-section {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
                color: rgba(255, 255, 255, 0.95) !important;
            }
            
            .form-control, input, select, textarea {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                color: rgba(255, 255, 255, 0.95) !important;
                border-radius: 8px !important;
            }
            
            .btn {
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                color: rgba(255, 255, 255, 0.95) !important;
                border-radius: 8px !important;
                transition: all 0.3s ease !important;
            }
            
            .btn:hover {
                background: rgba(255, 255, 255, 0.15) !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 8px 40px 0 rgba(31, 38, 135, 0.45) !important;
            }
            
            body, .text-muted, .control-label, label {
                color: rgba(255, 255, 255, 0.95) !important;
            }
        `;
        
        // Remove existing glass styles
        const existingGlassStyle = document.getElementById('glass-ui-force-styles');
        if (existingGlassStyle) {
            existingGlassStyle.remove();
        }
        
        // Inject new styles
        const styleElement = document.createElement('style');
        styleElement.id = 'glass-ui-force-styles';
        styleElement.textContent = criticalCSS;
        document.head.appendChild(styleElement);
        
        console.log('Glass UI - Critical styles injected');
    }
    
    // Force apply to existing elements
    function forceApplyToElements() {
        // Apply to all existing elements
        document.querySelectorAll('.container, .layout-main-section, .page-container').forEach(el => {
            el.style.cssText += `
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                margin: 10px !important;
            `;
        });
        
        document.querySelectorAll('.navbar, .navbar-default').forEach(el => {
            el.style.cssText += `
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
            `;
        });
        
        document.querySelectorAll('.card, .widget, .form-section').forEach(el => {
            el.style.cssText += `
                background: rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
                color: rgba(255, 255, 255, 0.95) !important;
            `;
        });
        
        console.log('Glass UI - Styles applied to existing elements');
    }
    
    // Create animated background
    function createAnimatedBackground() {
        // Set body background
        document.body.style.cssText += `
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%) !important;
            background-attachment: fixed !important;
            min-height: 100vh !important;
        `;
        
        // Create pattern overlay
        const patternOverlay = document.createElement('div');
        patternOverlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(255, 219, 112, 0.2) 0%, transparent 50%) !important;
            pointer-events: none !important;
            z-index: -1 !important;
        `;
        
        // Remove existing overlay
        const existingOverlay = document.getElementById('glass-ui-pattern-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        patternOverlay.id = 'glass-ui-pattern-overlay';
        document.body.appendChild(patternOverlay);
        
        console.log('Glass UI - Animated background created');
    }
    
    // Initialize everything
    function initializeGlassUI() {
        console.log('Glass UI - Initializing...');
        
        // Apply styles immediately
        forceApplyGlassStyles();
        
        // Create background
        createAnimatedBackground();
        
        // Apply to existing elements
        forceApplyToElements();
        
        // Set up mutation observer to catch dynamic content
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    setTimeout(() => {
                        forceApplyToElements();
                    }, 100);
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        console.log('Glass UI - Initialization complete');
    }
    
    // Execute immediately and on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGlassUI);
    } else {
        initializeGlassUI();
    }
    
    // Also execute on window load
    window.addEventListener('load', () => {
        setTimeout(initializeGlassUI, 500);
    });
    
    // For Frappe route changes
    if (window.frappe && frappe.router) {
        frappe.router.on('change', () => {
            setTimeout(initializeGlassUI, 200);
        });
    }
    
    // Add to window for manual triggering
    window.forceGlassUI = initializeGlassUI;
    
    console.log('Glass UI - Force enhancement script loaded');
    
})();
