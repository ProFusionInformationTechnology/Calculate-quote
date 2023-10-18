import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blockArrayNum:Array<Number> = [1];
  public blockArraySpecialNum:Array<Number> = [1];
  public blockArrayAll = [{
    name: '未命名',
    id: 1,
    orTotal: 0,
    caTotal: 0
  }];

  public totalObj = {
    orTotal: 0,
    caTotal: 0
  };

  public addBlock(type:string = 'nor') {
    if (type == 'nor') {
      this.blockArrayNum.push(this.blockArrayNum.length + 1);
      const obj = {
        name: '未命名',
        id: this.blockArrayNum.length,
        orTotal: 0,
        caTotal: 0
      };
      this.blockArrayAll.push(obj);
    } else if (type == 'spe') {
      this.blockArraySpecialNum.push(this.blockArraySpecialNum.length + 1);
    }
  }

  public receiveData(receiveObj:reObj) {
    const index = receiveObj['id'] - 1;
    this.blockArrayAll[index].name = receiveObj['name'];
    this.blockArrayAll[index].orTotal = receiveObj['orTotal'];
    this.blockArrayAll[index].caTotal = receiveObj['caTotal'];

    this.calculateTotalPrice();
  }

  public calculateTotalPrice() {
    this.totalObj = {
      orTotal: 0,
      caTotal: 0
    };
    this.blockArrayAll.map(val => {
      this.totalObj.orTotal += val.orTotal;
      this.totalObj.caTotal += val.caTotal;
    });
  }
}

interface reObj {
  [name: string]: any;
  [id: number]: any;
}
