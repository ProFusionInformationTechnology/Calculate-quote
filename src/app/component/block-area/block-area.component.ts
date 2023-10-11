import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-area',
  templateUrl: './block-area.component.html',
  styleUrls: ['./block-area.component.scss']
})
export class BlockAreaComponent implements OnInit  {
  ngOnInit(): void {
    this.list.id = this.id;
    this.list.name = `項目 ${this.id}`;
  }
  @Input() id:Number = 0;

  public list = {
    id: this.id,
    values: [
      {
        name: '請輸入名稱',
        num: 0,
        orPrice: 10,
        caPrice: 10,
        orTotal: 0,
        caTotal: 0
      }
    ],
    name: `項目 ${this.id}`,
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
      caTotal: 0
    }
    this.list.values.push(data);
  }

  public calculatePrice(obj:any) {
    obj.orTotal = obj.num * obj.orPrice;
    obj.caPrice = obj.orPrice;
    obj.caTotal = obj.orTotal;
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
  }
}
