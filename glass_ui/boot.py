import frappe

def get_bootinfo():
    """Add Glass UI configuration to boot info"""
    bootinfo = frappe._dict()
    
    # Add Glass UI theme settings
    bootinfo.glass_ui_enabled = True
    bootinfo.glass_ui_theme = frappe.db.get_single_value("System Settings", "glass_ui_theme") or "default"
    
    # Add user preferences
    if frappe.session.user != "Guest":
        user_settings = frappe.get_doc("User", frappe.session.user)
        bootinfo.glass_ui_user_theme = getattr(user_settings, "glass_ui_theme", "auto")
    
    return bootinfo

@frappe.whitelist()
def get_glass_ui_settings():
    """Get Glass UI settings for frontend"""
    return {
        "enabled": True,
        "theme": frappe.db.get_single_value("System Settings", "glass_ui_theme") or "default",
        "animations_enabled": True,
        "particles_enabled": True,
        "blur_intensity": 10
    }
