import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // 🔹 Importáld a MatCardModule-t
import { MatButtonModule } from '@angular/material/button'; // 🔹 Gombokhoz kell

@Component({
  selector: 'app-hirdetesek',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], // 🔹 Hozzáadva az imports-hoz
  templateUrl: './hirdetesek.component.html',
  styleUrls: ['./hirdetesek.component.scss']
})
export class HirdetesekComponent {
  hirdetesek = [
    {
      title: 'Eladó egyedi készítésű kemény fa ülőgarnitúra',
      price: '132.000',
      description: 'Eladó egyedi készítésű kemény fa (japán akác) ülőgarnitúra szivacsbetéttel, 2 db díszpárnával helyhiány miatt.',
      location: '6500 Baja, Petőfi s. u. 8.',
      phone: '06-70/333-22-11',
      email: 'valaki@gmail.com',
      date: '2025.02.10',
      image: 'https://via.placeholder.com/400' // Itt majd egy valódi kép lesz
    },
    {
      title: 'Eladó egyedi készítésű puha kő fekvőgarnitúra',
      price: '132.000',
      description: 'Eladó egyedi készítésű kemény fa (japán akác) ülőgarnitúra szivacsbetéttel, 2 db díszpárnával helyhiány miatt.',
      location: '6500 Baja, Petőfi s. u. 8.',
      phone: '06-70/333-22-11',
      email: 'valaki@gmail.com',
      date: '2025.02.10',
      image: 'https://via.placeholder.com/400' // Itt majd egy valódi kép lesz
    }
  ];

  alertTelefon(phone: string) {
    alert(`Hívja ezt a számot: ${phone}`);
  }

  alertEmail(email: string) {
    alert(`Küldjön emailt erre a címre: ${email}`);
  }
}
