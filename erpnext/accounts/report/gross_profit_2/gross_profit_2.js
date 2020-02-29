// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Gross Profit 2"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"reqd": 1,
			"default": frappe.defaults.get_user_default("Company")
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.str_to_obj("2019-07-03")
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.str_to_obj("2020-02-23")
		},
		{
			"fieldname":"from_date2",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.str_to_obj("2020-02-24")
		},
		{
			"fieldname":"to_date2",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.str_to_obj("2020-07-02")
		},
		{
			"fieldname":"sales_invoice",
			"label": __("Sales Invoice"),
			"fieldtype": "Link",
			"options": "Sales Invoice"
		},
		{
			"fieldname":"group_by",
			"label": __("Group By"),
			"fieldtype": "Select",
			"options": "Item Group",
			"default": "Item Group"
		},
	]
}
