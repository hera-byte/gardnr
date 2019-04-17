import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) {
    }
  
    ngAfterViewInit() {
      if (!this.userService.signin) {
        console.log('not signed in');
        this.showLogin();
      }
    }
  
    ngOnInit() {
  
    }
  
    showLogin() {
      this.router.navigateByUrl('/login');
    }
}
