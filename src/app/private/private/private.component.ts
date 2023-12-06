import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  isToggled = false;
  isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  toggleSidebar(): void {
    this.isToggled = !this.isToggled;
  }
}
