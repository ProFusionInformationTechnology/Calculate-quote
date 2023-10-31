import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-block-area',
  templateUrl: './block-area.component.html',
  styleUrls: ['./block-area.component.scss']
})
export class BlockAreaComponent implements OnInit  {
  ngOnInit(): void {
    this.list.id = this.id;
    this.list.name = `請輸入標題：項目${this.id}`;
  }

  ngOnChanges() {
    if (this.reChangeValue) {
      this.reCalPrice();
    }
  }

  @Input() reChangeValue:boolean = false;

  @Input() id:Number = 0;

  @Input() changeValObj:Obj = {
    ratio: 0
  };

  @Output() totalPrices = new EventEmitter<object>();

  public list = {
    id: this.id,
    values: [
      {
        name: '請輸入名稱',
        num: 0,
        orPrice: 10,
        caPrice: 10,
        orTotal: 0,
        caTotal: 0,
        diff: 0
      }
    ],
    name: `請輸入標題：項目${this.id}`,
    orTotal: 0,
    caTotal: 0,
  }

  public addListValue() {
    const data = {
      name: '請輸入名稱',
      num: 0,
      orPrice: 10,
      caPrice: 10,
      orTotal: 0,
      caTotal: 0,
      diff: 0
    }
    this.list.values.push(data);
  }

  public calculatePrice(obj:any) {
    obj.orTotal = obj.num * obj.orPrice;
    obj.caPrice = obj.orPrice;
    obj.caTotal = obj.orTotal;
    obj.diff = (obj.caPrice - obj.orPrice) / obj.orPrice * 100;
    this.calculateAllOrPrice()
  }

  public calculateAllOrPrice() {
    let price = 0;
    Object.keys(this.list.values).map(index => {
      const num = Number(index);
      price += this.list.values[num].orTotal;
    })
    this.list.orTotal = price;
    this.list.caTotal = price;

    this.outputData();
  }

  public outputData() {
    const data = {
      id: this.id,
      name: this.list.name,
      orTotal: this.list.orTotal,
      caTotal: this.list.caTotal
    }
    this.totalPrices.emit(data);
  }

  public reCalPrice() {
    let price = 0;
    this.list.values.map(obj => {
      let tarRatio = 1 + this.decideNum();
      obj.caPrice = Math.round(obj.orPrice * tarRatio);
      obj.caTotal = Math.round(obj.num * obj.caPrice);
      obj.diff = Math.round((obj.caPrice - obj.orPrice) / obj.orPrice * 100);
      price += obj.caTotal;
    });
    this.list.caTotal = price;
    this.outputData();
  }

  public decideNum() {
    let ranNum = Math.random();
    if (ranNum <= 0.20) {
      return (this.changeValObj['ratio'] - 2) / 100;
    } else if (ranNum <= 0.40) {
      return (this.changeValObj['ratio'] - 1) / 100;
    } else if (ranNum <= 0.60) {
      return this.changeValObj['ratio'] / 100;
    } else if (ranNum <= 0.80) {
      return (this.changeValObj['ratio'] + 1) / 100;
    } else {
      return (this.changeValObj['ratio'] + 2) / 100;
    }
  }
}

interface Obj {
  [name: string]: any;
  [id: number]: any;
}