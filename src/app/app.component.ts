import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blockArrayNum:Array<Number> = [1];
  public blockArrayAll = [{
    name: '未命名',
    id: 1,
    orTotal: 0,
    caTotal: 0
  }];

  public addBlock() {
    this.blockArrayNum.push(this.blockArrayNum.length + 1);
    const obj = {
      name: '未命名',
      id: this.blockArrayNum.length,
      orTotal: 0,
      caTotal: 0
    };
    this.blockArrayAll.push(obj);
  }

  public receiveData(receiveObj:Object) {
    console.error(receiveObj)
  }
}
