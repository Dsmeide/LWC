import { LightningElement, api } from 'lwc';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Name_Field from '@salesforce/schema/Account.Name';
import Id_Field from '@salesforce/schema/Account.Id';
import Type_Field from '@salesforce/schema/Account.Type';
// import FirstName_Field from '@salesforce/schema/Contact.FirstName';
// import AccountId_Field from '@salesforce/schema/Contact.AccountId';
// import Email_Field from '@salesforce/schema/Contact.Email';


export default class Dm_lwcCustomRecordForm extends LightningElement {

@api recordId;
@api objectApiName;

customFields = [Phone_Field, Name_Field, Id_Field, Type_Field];

}