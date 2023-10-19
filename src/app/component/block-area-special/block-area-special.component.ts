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
}

interface reObj {
  [name: string]: any;
  [id: number]: any;
}
