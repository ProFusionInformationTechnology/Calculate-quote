import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blockArray:Array<Number> = [1, 2, 3];

  public addBlock() {
    this.blockArray.push(this.blockArray.length + 1)
  }
}
