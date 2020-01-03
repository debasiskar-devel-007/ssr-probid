import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private cookieService: CookieService
    ) {}


    canActivate() {
        console.log('This is auth guard');
        console.log(this.cookieService.get('jwtToken'));
        if (this.cookieService.get('jwtToken') == null || this.cookieService.get('jwtToken').length < 10) {
            this.router.navigate(['/']);
        } else return true;
        return false;
    }
}
