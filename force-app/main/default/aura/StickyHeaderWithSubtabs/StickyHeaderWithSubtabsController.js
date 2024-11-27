({
    onScriptsLoaded: function(component, event, helper) {
        // Set initial sticky header top value
        helper.updateStickyHeaderTop(component);

        // Attach event listener to adjust sticky header on tab change
        window.addEventListener('resize', $A.getCallback(function() {
            helper.updateStickyHeaderTop(component);
        }));

        // Monitor for sub-tab changes using MutationObserver
        const observer = new MutationObserver($A.getCallback(function(mutationsList) {
            for(let mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    helper.updateStickyHeaderTop(component);
                }
            }
        }));

        // Use the provided selector for the subtabs container
        const subTabsContainer = document.querySelector('.tabContainer.oneConsoleTabContainer.slds-grid.active.navexConsoleTabContainer');
        if (subTabsContainer) {
            observer.observe(subTabsContainer, { childList: true, subtree: true, attributes: true });
        }
    },

    toggleSection: function(component, event, helper) {
        // Toggle the sidebar collapsed state
        var isSidebarCollapsed = component.get("v.isSidebarCollapsed");
        component.set("v.isSidebarCollapsed", !isSidebarCollapsed);

        // Update sticky header top value
        helper.updateStickyHeaderTop(component);
    }
})