import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/auth/service/auth.service';
import { CurrentUserService } from 'src/shared/services/current-user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  isToggled = false;
  isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

  menuList: any[] = [];

  constructor(private authService:AuthService,
    private currentUserService:CurrentUserService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.setUserMenu();
  }

  setUserMenu():void{
    this.currentUserService.getUserRole().subscribe(res=>{
      if(res=='admin'){
        this.menuList = this.currentUserService.getAdminMenu();
      }else if(res=='user'){
        this.menuList = this.currentUserService.getUserMenu();
      }else if(res=='therapist'){
        this.menuList = this.currentUserService.getTherapistMenu();
      }else{
        this.menuList = [];
      }
    })
  }
  
  toggleSidebar(): void {
    this.isToggled = !this.isToggled;
  }

  logoutClicked():void{
    this.authService.clearTokens();
    this.router.navigate(['/'])
  }
}
