import frappe
from frappe import _

@frappe.whitelist()
def set_theme(theme):
    """Set the glass UI theme preference"""
    if theme not in ['light', 'dark']:
        frappe.throw(_('Invalid theme. Must be "light" or "dark"'))
    
    # Save theme preference for current user
    user_settings = frappe.get_doc({
        'doctype': 'User',
        'name': frappe.session.user
    })
    
    # Store in user's custom data
    frappe.db.set_value('User', frappe.session.user, 'custom_glass_theme', theme)
    frappe.db.commit()
    
    return {'theme': theme}

@frappe.whitelist()
def get_theme():
    """Get the current glass UI theme preference"""
    theme = frappe.db.get_value('User', frappe.session.user, 'custom_glass_theme')
    return {'theme': theme or 'light'}

@frappe.whitelist()
def set_glass_settings(settings):
    """Set glass UI settings"""
    import json
    
    if isinstance(settings, str):
        settings = json.loads(settings)
    
    # Validate settings
    allowed_settings = ['blur_intensity', 'particles_enabled', 'animations_enabled', 'dynamic_bg']
    
    for key in settings:
        if key not in allowed_settings:
            frappe.throw(_('Invalid setting: {0}').format(key))
    
    # Save settings
    frappe.db.set_value('User', frappe.session.user, 'custom_glass_settings', json.dumps(settings))
    frappe.db.commit()
    
    return {'status': 'success', 'settings': settings}

@frappe.whitelist()
def get_glass_settings():
    """Get glass UI settings"""
    import json
    
    settings_str = frappe.db.get_value('User', frappe.session.user, 'custom_glass_settings')
    
    if settings_str:
        return json.loads(settings_str)
    
    # Return default settings
    return {
        'blur_intensity': 10,
        'particles_enabled': True,
        'animations_enabled': True,
        'dynamic_bg': False
    }

def boot_session(bootinfo):
    """Pass glass UI settings to client on boot"""
    if frappe.session.user != 'Guest':
        bootinfo.glass_ui_settings = get_glass_settings()
        bootinfo.glass_ui_theme = get_theme()['theme']