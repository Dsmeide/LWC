import { LightningElement, wire } from 'lwc';
import getconlist from '@salesforce/apex/dm_getContacts.getContactList';
import {updateRecord} from 'lightning/uiRecordApi';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id'


const column = [
    {label:'First Name', fieldName: 'FirstName', type:'text', editable:true},
    {label:'Last Name', fieldName: 'LastName', type:'text', editable:true},
    {label:'Phone', fieldName: 'Phone', type:'phone', editable:true},
    {label:'Email', fieldName: 'Email', type:'email', editable:true}
]

export default class Dm_lwcWireProgram extends LightningElement {

col=column;
@wire(getconlist) contacts;

handleSave(event) {
    const fields={};
    fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
    fields[FIRST_NAME_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
    fields[LAST_NAME_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;
    const recordApi={fields};
    updateRecord(recordApi).then(Response =>{
        alert('Updated Sucessfully ' +Response.id);
    }).catch();
}
}