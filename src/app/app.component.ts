import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue = '';
  buttons = [
    { label: 'AC', value: () => this.clearDisplay() ,disabled: false },
    { label: 'CE', value: () => this.clearLastChar() ,disabled: false },
    { disabled: true},
    { disabled: true},
    { label: '7', value: '7' ,disabled: false },
    { label: '8', value: '8' ,disabled: false },
    { label: '9', value: '9' ,disabled: false },
    { label: '/', value: '/' ,disabled: false },
    { label: '4', value: '4' ,disabled: false },
    { label: '5', value: '5' ,disabled: false },
    { label: '6', value: '6' ,disabled: false },
    { label: '*', value: '*' ,disabled: false },
    { label: '1', value: '1' ,disabled: false },
    { label: '2', value: '2' ,disabled: false },
    { label: '3', value: '3' ,disabled: false },
    { label: '-', value: '-' ,disabled: false },
    { label: '0', value: '0' ,disabled: false },
    { label: '.', value: '.' ,disabled: false },
    { label: '=', value: () => this.compute() ,disabled: false },
    { label: '+', value: '+',disabled: false }
  ];

  commands = ['+','-','/','*']

  handleButtonClick(button: any) {
    if (button.value) {

      if (typeof button.value === 'function') {
        button.value();
      } else {
                    // All but   this.displayValue += button.value; before push
       if (this.commands.includes(this.displayValue.toString().substring(this.displayValue.length - 1)) &&
       this.commands.includes(button.value) ){

        if((this.displayValue.toString().substring(this.displayValue.length - 1) === '*' ||
        this.displayValue.toString().substring(this.displayValue.length - 1) === '/') &&
        button.value === '-'){
          this.displayValue += button.value;
        } else{
          this.displayValue = this.displayValue.substring(0,this.displayValue.length - 1)
          this.displayValue += button.value;
        }

      }else{
        this.displayValue += button.value;
       }

      }
    }
  }

  compute() {
    try {
      // remove to fixed before push
      this.displayValue = eval(this.displayValue).toFixed(2).replace(/[.,]00$/, "").toString();
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay() {
    this.displayValue = '';
  }

  clearLastChar() {
    this.displayValue = this.displayValue.slice(0, -1);
  }
}
