import frappe

def validate_doc(doc, method):
    """Validate document with Glass UI enhancements"""
    pass

def on_doc_update(doc, method):
    """Handle document updates for Glass UI"""
    pass

def get_glass_theme_data():
    """Get theme data for Jinja templates"""
    return {
        "theme": "glass_ui",
        "version": "1.0.0",
        "assets_path": "/assets/glass_ui/"
    }

def get_user_theme_preference():
    """Get user's theme preference"""
    if frappe.session.user == "Guest":
        return "default"
    
    user = frappe.get_doc("User", frappe.session.user)
    return getattr(user, "glass_ui_theme", "default")

@frappe.whitelist()
def set_user_theme_preference(theme):
    """Set user's theme preference"""
    if frappe.session.user == "Guest":
        return
    
    user = frappe.get_doc("User", frappe.session.user)
    user.glass_ui_theme = theme
    user.save(ignore_permissions=True)
    
    return {"success": True}

@frappe.whitelist()
def get_theme_settings():
    """Get current theme settings"""
    return {
        "theme": get_user_theme_preference(),
        "blur_intensity": 10,
        "animations_enabled": True,
        "particles_enabled": True
    }
