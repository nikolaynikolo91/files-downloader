import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.scss'],
})
export class SpinerComponent implements OnInit {
  showSpinner = false;
  cancelSpinner= false;

  constructor() {}

  ngOnInit(): void {}

  onSpinnerStart() {
    this.showSpinner = true;
  }
  onSpinnerStrop() {
    this.showSpinner = false;
  }

  onMouseEnter(){
    this.cancelSpinner = true
    console.log(this.cancelSpinner, 'mouse enter')
  }
  mouseLeave(){
    this.cancelSpinner = false
    console.log(this.cancelSpinner, 'mouse leave')
  }
}
