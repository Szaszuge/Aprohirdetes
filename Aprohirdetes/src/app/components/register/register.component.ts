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
import { User } from '../../interfaces/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [    
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  constructor(private api: ApiService, private snackbar: MatSnackBar){}

  user:User = {
    name: '',
    email: '',
    password: ''
  }

  register(){
    this.api.registration(this.user).subscribe({
      next: (res:any)=>{
        if (res.success){
          this.openSnackBar('Sikeres regisztráció!', 'OK');
        }
        else
        {
          this.openSnackBar(res.message, 'OK');
        }
      },
      error: (err)=>{
        console.log(err)
        this.openSnackBar(err.error.message, 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }
}
