import { LightningElement, api } from 'lwc';

export default class TabsetScoped extends LightningElement {
    @api tabsConfig = '[{"label": "Tab 1", "flowName": ""}, {"label": "Tab 2", "flowName": ""}]';

    get tabs() {
        return JSON.parse(this.tabsConfig);
    }

    handleFlowStatusChange(event) {
        // Handle flow status changes if needed
    }
}
