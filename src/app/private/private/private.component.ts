import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/auth/service/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  isToggled = false;
  isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

  
  constructor(private authService:AuthService,
    private router:Router) { }
  
  ngOnInit(): void {
  }
  
  toggleSidebar(): void {
    this.isToggled = !this.isToggled;
  }

  logoutClicked():void{
    this.authService.removeToken();
    this.router.navigate(['/'])
  }
}
