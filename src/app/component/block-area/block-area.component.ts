import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-area',
  templateUrl: './block-area.component.html',
  styleUrls: ['./block-area.component.scss']
})
export class BlockAreaComponent {
  @Input() id:Number = 0;

  public consoleValue(e:Event) {
    console.error((e.target as HTMLInputElement).value)
  }
}
