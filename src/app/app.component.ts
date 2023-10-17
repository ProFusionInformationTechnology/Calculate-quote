import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blockArrayNum:Array<Number> = [1, 2, 3];

  public addBlock() {
    this.blockArrayNum.push(this.blockArrayNum.length + 1)
  }
}
