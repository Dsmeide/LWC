import { LightningElement, api } from 'lwc';

export default class DM_lwcEditForm extends LightningElement {
@api recordId;

handleReset(){
    const inputfields=this.template.querySelectorAll('lightning-input-field');
    inputfields.forEach(field=>{
        field.reset();
    },);
}
}