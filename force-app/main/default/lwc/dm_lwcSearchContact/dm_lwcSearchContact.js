import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/dm_ApexSearchContact.findContacts';

const columns = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'text'},
    {label: 'Email', fieldName: 'Email', type: 'text'}
];

export default class Dm_lwcSearchContact extends LightningElement {
    searchkey;
    col = columns;
    @wire(findContacts,{searchtext:'$searchkey'}) contact;
    handleChange(event) {
        this.searchkey = event.target.value;
    }
}