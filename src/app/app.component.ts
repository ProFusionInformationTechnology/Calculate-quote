import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public testArray:Array<Number> = [1, 2, 3];
  public testAdd() {
    this.testArray.push(this.testArray.length + 1)
  }
}
