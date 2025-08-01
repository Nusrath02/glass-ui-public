from . import __version__ as app_version

app_name = "glass_ui"
app_title = "Glass UI"
app_publisher = "Your Company"
app_description = "Custom Frappe app with glassmorphism UI design"
app_email = "info@yourcompany.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = [
    "/assets/glass_ui/css/glassmorphism.css",
    "/assets/glass_ui/css/components.css"
]

app_include_js = [
    "/assets/glass_ui/js/glassmorphism.js",
    "/assets/glass_ui/js/ui-enhancements.js"
]

# include js, css files in header of web template
web_include_css = [
    "/assets/glass_ui/css/glassmorphism.css",
    "/assets/glass_ui/css/components.css"
]

web_include_js = [
    "/assets/glass_ui/js/glassmorphism.js",
    "/assets/glass_ui/js/ui-enhancements.js"
]

# CRITICAL: Add build configuration for esbuild
website_bundle_sourced = True

# Define build files - this tells esbuild what files to process
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

# Force include in all pages
doctype_js = {
    "*": "public/js/glassmorphism.js"
}

doctype_css = {
    "*": "public/css/glassmorphism.css"
}

# Website theme
website_theme = "glass_ui"

# Boot Session
# -------------
boot_session = "glass_ui.api.boot_session"

# Fixtures
# --------
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

# Website Context
# ---------------
website_context = {
    "favicon": "/assets/glass_ui/images/favicon.ico",
    "splash_image": "/assets/glass_ui/images/splash.png"
}

# Installation
# ------------
before_install = "glass_ui.install.before_install"
after_install = "glass_ui.install.after_install"

# Required for Frappe Cloud deployment
required_apps = ["frappe"]

# Jinja methods for template access
jinja = {
    "methods": [
        "glass_ui.utils.get_glass_theme"
    ]
}
