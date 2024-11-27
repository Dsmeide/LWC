import { LightningElement } from 'lwc';

export default class Welcome extends LightningElement {

    eFname;
    eLname;


handleClick(){
    //for multiple lightning-inputs
    var inputs = this.template.querySelectorAll('lightning-input');
    //for single lightning input
    // this.ename = this.template.querySelector('lightning-input').value;
    inputs.forEach(function(element){
        if(element.name === 'fName')
            this.eFname = element.value;
        else if(element.name==='lName') {
            this.eLname = element.value;
        }
    },this);
}



}