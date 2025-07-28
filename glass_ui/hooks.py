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

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "glass_ui/public/scss/website"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "glass_ui.utils.jinja_methods",
# 	"filters": "glass_ui.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "glass_ui.install.before_install"
# after_install = "glass_ui.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "glass_ui.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"glass_ui.tasks.all"
# 	],
# 	"daily": [
# 		"glass_ui.tasks.daily"
# 	],
# 	"hourly": [
# 		"glass_ui.tasks.hourly"
# 	],
# 	"weekly": [
# 		"glass_ui.tasks.weekly"
# 	],
# 	"monthly": [
# 		"glass_ui.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "glass_ui.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "glass_ui.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "glass_ui.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"glass_ui.auth.validate"
# ]

# Translation
# --------------------------------

# Make link fields search translated document names for these DocTypes
# Recommended only for DocTypes which have limited documents with untranslated names
# For example: Role, Gender, etc.
# translated_search_doctypes = []

# Boot Session
# -------------
# Pass boot information to client side

boot_session = "glass_ui.api.boot_session"

# Fixtures
# --------
# List of fixtures to be loaded during app installation

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
# Pass context to website templates

website_context = {
    "favicon": "/assets/glass_ui/images/favicon.ico",
    "splash_image": "/assets/glass_ui/images/splash.png"
}