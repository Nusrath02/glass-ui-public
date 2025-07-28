from frappe import _

def get_data():
    return [
        {
            "label": _("Glass UI"),
            "icon": "fa fa-palette",
            "items": [
                {
                    "type": "page",
                    "name": "glass-ui-settings",
                    "label": _("Glass UI Settings"),
                    "description": _("Configure Glass UI theme and effects"),
                },
                {
                    "type": "page",
                    "name": "glass-ui-dashboard",
                    "label": _("Glass Dashboard"),
                    "description": _("Custom glassmorphism dashboard"),
                },
            ]
        },
        {
            "label": _("Tools"),
            "icon": "fa fa-wrench",
            "items": [
                {
                    "type": "page",
                    "name": "glass-ui-components",
                    "label": _("Component Gallery"),
                    "description": _("Preview all glass UI components"),
                },
                {
                    "type": "doctype",
                    "name": "Glass UI Theme",
                    "label": _("Theme Manager"),
                    "description": _("Manage glass UI themes"),
                },
            ]
        }
    ]