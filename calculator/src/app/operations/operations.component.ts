import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {

  operationResult:string = '0';
  inputNumber:number = 0;
  operator:string = '';

  click(val:number) {
    if (this.operationResult === '0') {
      this.operationResult = val.toString();
    } else {
      this.operationResult = `${this.operationResult}${val}`;
    }
  }

  operation(action:string) {
    this.inputNumber = parseInt(this.operationResult);
    this.operator = action;
    this.operationResult = ' ';
  }

  calculate() {
    const firstNum = this.inputNumber;
    const secondNum = parseInt(this.operationResult);

    let result:number =0;
    if (this.operator === 'x') {
      result = firstNum * secondNum;
    }
    else if (this.operator === '/') {
      result = firstNum / secondNum;
    }
    else if (this.operator === '+') {
      result = firstNum + secondNum;
    }
    else if (this.operator === '-') {
      result = firstNum - secondNum;
    }
    this.inputNumber = result;
    this.operationResult = result.toString();
  }

  delete(){
    this.operationResult = '';
  }

}
