({
    setSidebarTop: function(component) {
        // Find the tab header and subtab header elements
        let tabHeader = document.querySelector('.tabBarContainer');
        let subtabHeader = document.querySelector('.slds-sub-tabs');

        if (!tabHeader) {
            console.error('Tab header not found');
            return;
        }

        // Get the bottom position of the tab header
        let tabHeaderBottom = tabHeader.getBoundingClientRect().bottom;
        let subtabHeaderBottom = subtabHeader ? subtabHeader.getBoundingClientRect().bottom : null;

        // Find the sidebar component
        let side = component.find("sidebar");
        if (!side) {
            console.error('Sidebar component not found');
            return;
        }

        let sideElement = side.getElement();
        if (!sideElement) {
            console.error('Sidebar element not found');
            return;
        }

        // Determine the sidebar top position
        let sidebarTop;
        if (subtabHeaderBottom) {
            sidebarTop = subtabHeaderBottom;
        } else {
            sidebarTop = tabHeaderBottom;
        }

        // Set the CSS variable
        sideElement.style.setProperty('--sidebar-top', sidebarTop + 'px');
        console.log('--sidebar-top set to', sidebarTop);
    }
})