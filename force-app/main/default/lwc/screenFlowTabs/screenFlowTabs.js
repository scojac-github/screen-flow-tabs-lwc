import { LightningElement, api } from 'lwc';

export default class TabsetScoped extends LightningElement {
    // Tab 1 properties
    @api tab1Label = 'Tab 1';
    @api tab1FlowName = '';

    // Tab 2 properties
    @api tab2Label = 'Tab 2';
    @api tab2FlowName = '';

    // Tab 3 properties
    @api tab3Label = 'Tab 3';
    @api tab3FlowName = '';

    handleFlowStatusChange(event) {
        // Handle flow status changes if needed
    }
}
