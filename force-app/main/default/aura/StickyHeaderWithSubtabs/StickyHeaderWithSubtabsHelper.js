({
    updateStickyHeaderTop: function(component) {
        var subTabsHeight = 0;

        // Adjust based on the subtab element's height or presence
        var subTabs = document.querySelector('.tabContainer.oneConsoleTabContainer.slds-grid.active.navexConsoleTabContainer');
        if (subTabs) {
            subTabsHeight = subTabs.offsetHeight || 0;
        }

        // Set the top value for the sticky header and sidebar
        var newTop = subTabsHeight > 0 ? (subTabsHeight + 60) + 'px' : '60px'; // Adjust values as needed
        component.set('v.stickyTop', newTop);

        // Update styles dynamically
        var stickyHeader = component.find("stickyHeader");
        if (stickyHeader) {
            stickyHeader.getElement().style.top = newTop;
        }

        var toggleButton = component.find("toggleButton");
        if (toggleButton) {
            toggleButton.getElement().style.top = newTop;
        }

        var sideStyle = component.find("sideStyle");
        if (sideStyle) {
            sideStyle.getElement().style.top = newTop;
        }
    }
})