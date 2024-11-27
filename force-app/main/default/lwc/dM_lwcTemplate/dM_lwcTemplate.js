import { LightningElement, api } from 'lwc';

export default class DM_lwcTemplate extends LightningElement {
    @api recordId;
    firstNumb;
    secNumb;
    thirdNumb;
    result;
    animals = ['Dog', 'Cat', 'Tiger', 'Lion'];
    fruits = ['Apple', 'Orange', 'Banana'];
    evenNumbers = [2, 4, 6, 8, 10];
    student = {'Name': 'John', 'Age': 30, 'Salary': 50000};
    students = [{'Name': 'John', 'Age': 30, 'Salary': 50000},
                {'Name': 'Jane', 'Age': 25, 'Salary': 30000},
                {'Name': 'Mark', 'Age': 35, 'Salary': 45000},
                {'Name': 'Mike', 'Age': 40, 'Salary': 60000}];

    // handleChange(event) {
    //     this.firstNumb = event.target.value;
    // }
    // handleChange2(event) {
    //     this.secNumb = event.target.value;
    // }
    // handleChange3(event) {
    //     this.thirdNumb = event.target.value;
    // }
    handleChangeData(event) {
       const cmp = event.target.name;
       if(cmp === 'firstNumb'){
           this.firstNumb = event.target.value;
           console.log("get" + this.firstNumb);
       }else if(cmp === 'secNumb'){
           this.secNumb = event.target.value;
           console.log("get" + this.secNumb);
       }else if(cmp === 'thirdNumb'){
           this.thirdNumb = event.target.value;
           console.log("get" + this.thirdNumb);
       }
    }

    calc() {
        const a=Number(this.firstNumb);
        const b=Number(this.secNumb);
        const c=Number(this.thirdNumb);
        if(a>b && a>c){
            this.result=a;
            console.log("A " + this.result);
        }else if(b>a && b>c){
            this.result=b;
            console.log("B " + this.result);
        }else{
            this.result=c;
            console.log("C " + this.result);
        }
        
        
    }
    clear() {
        this.secNumb='';
        this.firstNumb='';
        this.thirdNumb='';
        this.result='';
    }
}