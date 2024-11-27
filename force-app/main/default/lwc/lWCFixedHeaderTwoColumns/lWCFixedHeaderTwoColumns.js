import { LightningElement, track } from 'lwc';

export default class RecordPageLayout extends LightningElement {
    @track isSidebarCollapsed = false;

    get toggleIcon() {
        return this.isSidebarCollapsed ? 'utility:chevronright' : 'utility:chevronleft';
    }

    get toggleAltText() {
        return this.isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar';
    }

    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
}
