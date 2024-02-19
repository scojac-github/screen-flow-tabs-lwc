# Overview

Component to display two or more Screen Flows in separate tabs on Lightning or Experience Cloud page.

# Use Case

Suppose you have two or more Screen Flows that are not dependent on each other but you want to display them on a single page in Salesforce rather than navigating to differnt pages or creating separate actions. With this LWC you can now add dynamically add these screen flows to a single page and separate them with tabs.

# How to use

Simply add to a Lightning or Experience Cloud page and pass in a JSON string with corresponding tab labels and Flow API names.

Example: 

`[{"label": "Tab 1", "flowName": "Screen_Flow_One_API_Name"}, {"label": "Tab 2", "flowName": "Second_Flow_API_Name"}]`

