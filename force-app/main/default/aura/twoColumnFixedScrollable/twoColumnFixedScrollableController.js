({
    toggleSection : function(component, event, helper) {
        var isCollapsed = component.get('v.isSidebarCollapsed');
        component.set('v.isSidebarCollapsed', !isCollapsed);
    }
})