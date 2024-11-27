import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Dm_lwcImperation_create extends LightningElement {

name;
phone;
fax;
industry;

handleName(event) {
    this.name = event.target.value;
}

handlePhone(event) {
    this.phone = event.target.value;
}

handleFax(event) {
    this.fax = event.target.value;
}

handleIndustry(event) {
    this.industry = event.target.value;
}

handleClick() {
    // step1 : capture list of fields
    const fields = {Name : this.name, Phone : this.phone,Fax : this.fax, Industry : this.industry};

    // step2 : create API record with field
    const recordInput = {apiName : 'Account', fields : fields};

    // step3 : Call Imperation --> createRecord.then().catch();

    // createRecord(recordInput).then().catch(error=>{
    //     console.log('Record Creation is failed : ' +error.body.message);
    // });
    createRecord(recordInput)
        .then(response=> {
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Record created: ' + response.id,
                variant: 'success',
            });
            this.dispatchEvent(evt);
            // Handle successful record creation here
        })
        .catch(error => {
            const evt = new ShowToastEvent({
                title: 'Error: ' + error.body.message,
                message: 'Error: ' + error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(evt);
            // Handle any errors here
        });
}

}