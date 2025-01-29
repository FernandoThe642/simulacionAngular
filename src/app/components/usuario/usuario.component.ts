import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  cedulaUsuario: string = '';
  usuario: any = null;
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService) {}

  buscarUsuario() {
    if (this.cedulaUsuario.length !== 10 || !/^\d+$/.test(this.cedulaUsuario)) {
      this.errorMessage = "Cédula incorrecta";
      this.usuario = null;
      return;
    }
  
    this.usuarioService.getUsuario(this.cedulaUsuario).subscribe({
      next: (data) => {
        this.usuario = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = "Usuario no encontrado";
        this.usuario = null;
      }
    });
  }
  

}
