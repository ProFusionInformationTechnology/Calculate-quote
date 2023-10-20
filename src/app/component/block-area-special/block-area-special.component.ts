import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block-area-special',
  templateUrl: './block-area-special.component.html',
  styleUrls: ['./block-area-special.component.scss']
})
export class BlockAreaSpecialComponent {
  ngOnInit(): void {
    this.list.id = this.id;
    this.list.name = `計算百分比：項目${this.id}`;
  }

  @Input() id:Number = 0;

  @Input() listAll:Array<reObj> = [];

  @Output() totalPrices = new EventEmitter<object>();

  public list = {
    id: this.id,
    name: `計算百分比：項目${this.id}`,
    orTotal: 0,
    caTotal: 0,
    target: '',
    operation: ''
  };

  public hasSelect: boolean = false;
  public selectList = '請選擇選項';
  public setRatio = 1.0;

  public calOrValue = 0;
  public calCaValue = 0;

  public addList(obj:reObj) {
    this.selectList = obj['name'];
    if (!this.hasSelect) {
      this.hasSelect = !this.hasSelect;
    }
    this.calculateValue();
  };

  public calculateValue() {
    if (!this.hasSelect) {
      return
    }

    let targetVal = 0;

    this.listAll.map(obj => {
      if (obj['name'] === this.selectList) {
        targetVal = obj['orTotal'];
      }
    });

    this.calOrValue = targetVal * this.setRatio;
    this.calCaValue = this.calOrValue;

    this.outputData();
  }

  public outputData() {
    const data = {
      id: this.id,
      name: this.list.name,
      orTotal: this.calOrValue,
      caTotal: this.calCaValue
    }
    this.totalPrices.emit(data);
  }
}

interface reObj {
  [name: string]: any;
  [id: number]: any;
}
