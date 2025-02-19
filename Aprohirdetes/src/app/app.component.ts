import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router'; // 🔹 Router importálása
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aprohirdetes';
  isLoggedIn = false;

  constructor(private authService: AuthService, private snackbar: MatSnackBar, private router: Router) {} // 🔹 Router injektálása

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
    this.openSnackBar('Sikeres kijelentkezés!', 'OK');
    this.router.navigate(['/home']); // 🔹 Redirect kijelentkezés után
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 3000 });
  }
}
