import frappe

def before_install():
    """Actions to perform before installing Glass UI"""
    frappe.log("Installing Glass UI Theme...")

def after_install():
    """Actions to perform after installing Glass UI"""
    try:
        # Create custom fields for theme preferences
        create_custom_fields()
        
        # Set default theme settings
        set_default_settings()
        
        # Create sample data or configurations
        setup_theme_defaults()
        
        frappe.log("Glass UI Theme installed successfully!")
        
    except Exception as e:
        frappe.log_error(f"Glass UI installation error: {str(e)}")

def create_custom_fields():
    """Create custom fields for Glass UI"""
    
    # Add Glass UI theme field to User doctype
    if not frappe.db.exists("Custom Field", {"fieldname": "glass_ui_theme", "dt": "User"}):
        custom_field = frappe.get_doc({
            "doctype": "Custom Field",
            "dt": "User",
            "fieldname": "glass_ui_theme",
            "label": "Glass UI Theme",
            "fieldtype": "Select",
            "options": "Default\nDark\nLight\nAuto",
            "default": "Auto",
            "insert_after": "language",
            "module": "Glass UI"
        })
        custom_field.insert()

def set_default_settings():
    """Set default Glass UI settings"""
    
    # You can add default settings to System Settings or create a custom doctype
    settings = {
        "glass_ui_enabled": 1,
        "glass_ui_default_theme": "default",
        "glass_ui_animations": 1,
        "glass_ui_particles": 1
    }
    
    # Store in cache or custom settings
    for key, value in settings.items():
        frappe.cache().set_value(key, value)

def setup_theme_defaults():
    """Setup default theme configurations"""
    
    # Create default theme configuration
    theme_config = {
        "blur_intensity": 10,
        "animation_speed": "medium",
        "particle_count": 50,
        "glass_opacity": 0.1
    }
    
    frappe.cache().set_value("glass_ui_config", theme_config)
