import { Component, Input } from '@angular/core';

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

  public list = {
    id: this.id,
    name: `計算百分比：項目${this.id}`,
    orTotal: 0,
    caTotal: 0,
    target: '',
    operation: ''
  };

  public selectList = '請選擇選項';
  public selectOperation = '+';

  public addList(obj:reObj) {
    this.selectList = obj['name'];
  };

  public addOperation(status:string) {
    switch (status) {
      case 'add':
        this.selectOperation = '+';
        break;
        case 'mul':
        this.selectOperation = '*';
        break;
      default:
        break;
    }
  }
}

interface reObj {
  [name: string]: any;
  [id: number]: any;
}
