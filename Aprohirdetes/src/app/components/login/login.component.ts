import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private api: ApiService, private auth: AuthService, private snackbar: MatSnackBar) {}

  user = {
    name: '',
    password: ''
  };

  login() {
    this.api.login(this.user).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.auth.login(res.token);
          this.openSnackBar('Sikeres bejelentkezés!', 'OK');
        } else {
          this.openSnackBar(res.message, 'OK');
        }
      },
      error: (err) => {
        console.log(err);
        this.openSnackBar(err.error.message, 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }
}