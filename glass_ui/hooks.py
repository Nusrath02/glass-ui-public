from . import __version__ as app_version

app_name = "glassn"
app_title = "Glassn"
app_publisher = "Your Company"
app_description = "Custom Frappe app with glassmorphism UI design"
app_email = "info@yourcompany.com"
app_license = "MIT"

# Required apps
required_apps = ["frappe"]

# Includes in <head> - Fixed paths for Frappe Cloud
# ------------------

# CSS files for desk (admin interface)
app_include_css = [
    "/assets/glass_ui/css/glassmorphism.css",
    "/assets/glass_ui/css/components.css"
]

# JS files for desk (admin interface)
app_include_js = [
    "/assets/glass_ui/js/glassmorphism.js",
    "/assets/glass_ui/js/ui-enhancements.js"
]

# CSS files for website (public pages)
web_include_css = [
    "/assets/glass_ui/css/glassmorphism.css",
    "/assets/glass_ui/css/components.css"
]

# JS files for website (public pages)
web_include_js = [
    "/assets/glass_ui/js/glassmorphism.js",
    "/assets/glass_ui/js/ui-enhancements.js"
]

# Force include in all doctypes - This ensures your styles load everywhere
doctype_css = {
    "*": [
        "/assets/glass_ui/css/glassmorphism.css",
        "/assets/glass_ui/css/components.css"
    ]
}

doctype_js = {
    "*": [
        "/assets/glass_ui/js/glassmorphism.js",
        "/assets/glass_ui/js/ui-enhancements.js"
    ]
}

# Build configuration for production
build_css_files = {
    "glass_ui.bundle.css": [
        "glass_ui/public/css/glassmorphism.css",
        "glass_ui/public/css/components.css"
    ]
}

build_js_files = {
    "glass_ui.bundle.js": [
        "glass_ui/public/js/glassmorphism.js",
        "glass_ui/public/js/ui-enhancements.js"
    ]
}

# Website theme configuration
website_theme = "glass_ui"

# Fixtures for custom fields
fixtures = [
    {
        "dt": "Custom Field", 
        "filters": [["module", "=", "Glass UI"]]
    },
    {
        "dt": "Property Setter",
        "filters": [["module", "=", "Glass UI"]]
    }
]

# Boot session to inject custom data
boot_session = "glass_ui.boot.get_bootinfo"

# Website context
website_context = {
    "favicon": "/assets/glass_ui/images/favicon.ico",
    "splash_image": "/assets/glass_ui/images/splash.png",
    "disable_signup": 0
}

# Override standard templates if needed
# override_whitelisted_methods = {
#     "frappe.desk.desktop.get_desktop_page": "glass_ui.overrides.get_desktop_page"
# }

# Document Events
doc_events = {
    "*": {
        "validate": "glass_ui.utils.validate_doc",
        "on_update": "glass_ui.utils.on_doc_update"
    }
}

# Jinja template methods
jinja = {
    "methods": [
        "glass_ui.utils.get_glass_theme_data",
        "glass_ui.utils.get_user_theme_preference"
    ]
}

# Install hooks
before_install = "glass_ui.install.before_install"
after_install = "glass_ui.install.after_install"

# Scheduler Events (optional)
# scheduler_events = {
#     "daily": [
#         "glass_ui.tasks.daily_cleanup"
#     ]
# }

# Override doctype class (use with caution)
# override_doctype_class = {
#     "User": "glass_ui.overrides.CustomUser"
# }

# Translation
# translate_in_build = True
