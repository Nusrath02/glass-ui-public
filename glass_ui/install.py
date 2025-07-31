import frappe

def before_install():
    """Called before app installation"""
    pass

def after_install():
    """Called after app installation"""
    frappe.clear_cache()
    frappe.db.commit()
