## Routing
#### Example on routing in SAPUI5
Configuration:
```json5
"routing": {
        "config": {
        "routerClass": "sap.m.routing.Router",
        "type": "View",
        "viewType": "XML",
        "path": "it.davidegiacomini.view",  // Path to the views
        "controlId": "app",                 // Still exactly don't know
        "controlAggregation": "pages"       // Routing is by page
    },
    "routes": [
            {
                "pattern": "",          // URL route (host/index.html#)
                "name": "",             // Name for navigation in SAPUI5 (navTo(""))
                "target": "home"        // Target view, defined in "targets"
            },
            {
                "pattern": "home",      // URL route (host/index.html#home)
                "name": "home",         // Name for navigation in SAPUI5 (navTo("home"))
                "target": "home"        // Target view, defined in "targets"
            },
            {
                "pattern": "contact",   // URL route (host/index.html#contact)
                "name": "contact",      // Name for navigation in SAPUI5 (navTo("contact"))
                "target": "contact"     // Target view, defined in "targets"
            }
        ],
        "targets": {
            "home": {                   // Target view
                "viewName": "App",      // Name of the view (App.view.xml)
                "viewLevel": 1          // Level used for transitions while navigating
            },
            "contact": {
                "viewName": "Contact",  // Name of the view (Contact.view.xml)
                "viewLevel": 2          // Level used for transitions while navigating
            }
        }
    }
```
Navigation:
```typescript
// Navigates to the home page
public onNavHome(): void {
    (this.getOwnerComponent() as Component).getRouter().navTo("home");
}

// Navigates to the root page, which, based on the previous configuration, is the home page
public onNavRoot(): void {
    (this.getOwnerComponent() as Component).getRouter().navTo("");
}

// Navigates to the contact page
public onNavContact(): void {
    (this.getOwnerComponent() as Component).getRouter().navTo("contact");
}

// Navigates back to the previous page
public onNavBack(): void {
    const history = History.getInstance();
    const previousHash = history.getPreviousHash();

    if (previousHash !== undefined) {
        window.history.go(-1);
    } else {
        (this.getOwnerComponent() as Component).getRouter().navTo("", {}, true);
    }
} 
```

## Controls

The controls are the web components, as far as I understood. They are the building blocks of the UI. They are the buttons, the input fields, the tables, the lists, etc. They are the elements that the user interacts with.