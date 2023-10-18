import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-area-special',
  templateUrl: './block-area-special.component.html',
  styleUrls: ['./block-area-special.component.scss']
})
export class BlockAreaSpecialComponent {
  ngOnInit(): void {
    console.error(this.listAll)
  }

  // ngOnChanges(): void {
  //   console.error('變更後', this.listAll)
  // }

  @Input() listAll:Array<object> = [];
}
