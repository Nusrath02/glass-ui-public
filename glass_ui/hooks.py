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

# Force include in all pages - this might be the missing piece
doctype_js = {"*": ["/assets/glass_ui/js/glassmorphism.js"]}
doctype_css = {"*": ["/assets/glass_ui/css/glassmorphism.css"]}

# Include in specific pages
page_js = {"*": "/assets/glass_ui/js/glassmorphism.js"}

# Website theme
website_theme = "glass_ui"
website_bundle_sourced = True

# Build configuration
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

# Boot Session
boot_session = "glass_ui.api.boot_session"

# Installation
before_install = "glass_ui.install.before_install"
after_install = "glass_ui.install.after_install"

# Required apps
required_apps = ["frappe"]

# Document Events - Apply to all doctypes
doc_events = {
    "*": {
        "on_update": "glass_ui.utils.apply_glass_effects"
    }
}

# Website Context
website_context = {
    "favicon": "/assets/glass_ui/images/favicon.ico",
    "splash_image": "/assets/glass_ui/images/splash.png"
}

# Fixtures
fixtures = [
    {
        "dt": "Custom Field",
        "filters": [["module", "=", "Glass UI"]]
    }
]

# Override template
override_doctype_class = {
    "*": "glass_ui.overrides.GlassDocType"
}

# Jinja methods
jinja = {
    "methods": [
        "glass_ui.utils.get_glass_theme",
        "glass_ui.utils.include_glass_assets"
    ]
}
