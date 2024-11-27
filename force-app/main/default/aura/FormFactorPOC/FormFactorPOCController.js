({
    // doInit: function(component, event, helper) {
    //     const isDesktop = $A.get("$Browser.formFactor") === 'DESKTOP';
    //     component.set("v.isDesktop", isDesktop);
    // },
    toggleSection : function(component, event, helper) {
        console.log("found button");
        component.set('v.isSidebarCollapsed', !component.get('v.isSidebarCollapsed'));
    },
    headerToggleSection : function(component, event, helper) {
        console.log("found Header button");
        component.set('v.isHeaderCollapsed', !component.get('v.isHeaderCollapsed'));
    }
})