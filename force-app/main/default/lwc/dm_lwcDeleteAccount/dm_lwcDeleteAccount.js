import { LightningElement, wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex }  from '@salesforce/apex';
import getLatestAccounts from '@salesforce/apex/dm_lwcAccController.getAccountList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const columns = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'text'},
    {label: 'Industry', fieldName: 'Industry', type: 'text'}
];

export default class Dm_lwcDeleteAccount extends LightningElement {
    cols=columns;
    wireAccountList=[];
    error;
    accountList=[];
    // selectedRows;
    selectedRecord;
    

    @wire(getLatestAccounts) accList(result) {
        this.wireAccountList=result;

        if(result.data){
            this.accountList=result.data;
            this.error=undefined;
        }
        else if(result.error) {
            this.error=result.error;
            this.accountList=[];
        }
        

    }
    handleSelection(event) {
        if(event.detail.selectedRows.length>0) {
            this.selectedRecord=event.detail.selectedRows[0].Id;
        }
        
    }
    handleDelete() {
        deleteRecord(this.selectedRecord).then(()=>{
            refreshApex(this.wireAccountList);
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Record deleted',
                variant: 'success',
            });

            this.dispatchEvent(evt);
        })
        .catch(error=>{
            const evt = new ShowToastEvent({
                title: 'Error',
                message: 'Error !!!: ' + error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(evt);
        });
    }
}