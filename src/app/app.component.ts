import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blockArrayNum:Array<Number> = [1];
  public blockArrayHasChange:Array<boolean> = [false];
  public blockArraySpecialNum:Array<Number> = [1];
  public blockArrayAll = [{
    name: `請輸入標題：項目${this.blockArrayNum.length}`,
    id: 1,
    orTotal: 0,
    caTotal: 0
  }];
  public blockArraySpecialAll = [{
    name: `計算百分比：項目${this.blockArraySpecialNum.length}`,
    id: 1,
    orTotal: 0,
    caTotal: 0
  }];

  public totalObj = {
    orTotal: 0,
    caTotal: 0
  };

  public rangeObj = {
    maxV: 0,
    minV: 0
  };

  public addBlock(type:string = 'nor') {
    if (type == 'nor') {
      this.blockArrayNum.push(this.blockArrayNum.length + 1);
      const obj = {
        name: `請輸入標題：項目${this.blockArrayNum.length}`,
        id: this.blockArrayNum.length,
        orTotal: 0,
        caTotal: 0
      };
      this.blockArrayAll.push(obj);
      this.blockArrayHasChange.push(false);
    } else if (type == 'spe') {
      this.blockArraySpecialNum.push(this.blockArraySpecialNum.length + 1);
      const obj = {
        name: `計算百分比：項目${this.blockArraySpecialNum.length}`,
        id: this.blockArrayNum.length,
        orTotal: 0,
        caTotal: 0
      };
      this.blockArraySpecialAll.push(obj);
    }
  }

  public receiveData(receiveObj:reObj) {
    const index = receiveObj['id'] - 1;
    this.blockArrayAll[index].name = receiveObj['name'];
    this.blockArrayAll[index].orTotal = receiveObj['orTotal'];
    this.blockArrayAll[index].caTotal = receiveObj['caTotal'];

    this.calculateTotalPrice();
  }

  public receiveSpecialData(receiveObj:reObj) {
    const index = receiveObj['id'] - 1;
    this.blockArraySpecialAll[index].name = receiveObj['name'];
    this.blockArraySpecialAll[index].orTotal = receiveObj['orTotal'];
    this.blockArraySpecialAll[index].caTotal = receiveObj['caTotal'];

    this.calculateTotalPrice();
  }

  public calculateTotalPrice() {
    let tempObj = {
      orTotal: 0,
      caTotal: 0
    };
    setTimeout(() => {
      this.blockArrayAll.map(val => {
        tempObj.orTotal += val.orTotal;
        tempObj.caTotal += val.caTotal;
      });
      this.blockArraySpecialAll.map(val => {
        tempObj.orTotal += val.orTotal;
        tempObj.caTotal += val.caTotal;
      });
      this.totalObj.orTotal = tempObj.orTotal;
      this.totalObj.caTotal = tempObj.caTotal;
    }, 0);
  }

  public startCalPrice() {
    let maxInd = 0;
    let maxPrice = -999;
    this.blockArrayAll.map((obj, ind) => {
      if (obj.orTotal > maxPrice) {
        maxPrice = obj.orTotal;
        maxInd = ind;
      }
    });
    this.blockArrayHasChange[maxInd] = !this.blockArrayHasChange[maxInd];
    setTimeout(() =>{
      this.blockArrayHasChange[maxInd] = !this.blockArrayHasChange[maxInd];
    }, 1)
  }
}

interface reObj {
  [name: string]: any;
  [id: number]: any;
}
