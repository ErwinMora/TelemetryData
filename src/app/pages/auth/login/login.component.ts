import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// PrimeNG Imports
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../core/auth/auth.service'; // Importamos el AuthService

@Component({
  selector: 'app-login',
  imports: [InputGroup, InputGroupAddon, InputGroupModule, InputGroupAddonModule, PasswordModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authService: AuthService, private _router: Router, private _messageService: MessageService) { } // Inyectamos el AuthService y MessageService

  // Variables del formulario
  email = '';
  password = '';

  login() { // Método para manerjar el login
    if (!this.email || !this.password) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Favor de completar todos los campos requeridos.' });
      return;
    }

    this._authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this._messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Inicio de sesión correcto.' });
          this._router.navigate(['/graphs/home']);
        },
        error: () => {
          this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales incorrectas.' });
        }
      });
  }
}
