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
        caTotal: 0,
      }
    ],
    name: `項目 ${this.id}`,
    orTotal: 0,
    caTotal: 0,
  }

  public consoleValue(e:Event) {
    console.error((e.target as HTMLInputElement).value)
    console.error(this.list)
  }
}
