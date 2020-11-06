import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from './../../services/users/users.service'

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardGuard implements CanActivate {
  
  constructor(private usersService: UsersService,
     private router: Router
     ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.usersService.isLoggedUser()) {
      this.router.navigate(['/signin'])
      return false;
    }
    return true;
  }
  
}
