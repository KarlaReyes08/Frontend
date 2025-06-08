import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
loginForm: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    // Inicializa aquí
    this.loginForm = this.formBuilder.group({
      email: ['Karlareyes@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest);
      this.router.navigateByUrl('/inicio');
    } else {
      this.loginForm.markAllAsTouched();
      alert('Error al ingresar los datos');
    }
  }
}