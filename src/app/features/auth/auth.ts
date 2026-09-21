import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { SignInRequest, SignUpRequest } from '../../models/auth.model';
import { debounce, email, form, FormField, minLength, required } from '@angular/forms/signals';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle } from '@ng-icons/lucide';

@Component({
  selector: 'app-auth',
  imports: [
    HlmTabsImports,
    HlmCardImports,
    HlmLabelImports,
    HlmInputImports,
    HlmButtonImports,
    HlmFieldImports,
    FormField,
    HlmAlertImports,
    NgIcon,
  ],
  host: {
    class: 'mx-auto flex min-h-screen w-full max-w-lg items-center justify-center',
  },
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  providers: [provideIcons({ lucideAlertTriangle })],
})
export class Auth {
  signInRequestModel = signal<SignInRequest>({
    email: '',
    password: '',
  });

  signUpRequestModel = signal<SignUpRequest>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  private addEmailAndPasswordValidation(schemaPath: any): void {
    debounce(schemaPath.email, 500);
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Email is invalid' });

    debounce(schemaPath.password, 500);
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters long' });
  }

  protected readonly signInForm = form(this.signInRequestModel, (schemaPath) => {
    this.addEmailAndPasswordValidation(schemaPath);
  });

  protected readonly signUpForm = form(this.signUpRequestModel, (schemaPath) => {
    required(schemaPath.firstName, { message: 'First name is required' });
    required(schemaPath.lastName, { message: 'Last name is required' });
    this.addEmailAndPasswordValidation(schemaPath);
  });

  protected readonly signInErrorMessage = signal<string | null>(null);
  protected readonly signUpErrorMessage = signal<string | null>(null);

  private readonly authService: AuthService = inject(AuthService);
  private readonly router = inject(Router);

  protected onSignIn(event?: Event): void {
    event?.preventDefault();
    this.signInErrorMessage.set(null);

    if (!this.signInForm().valid()) {
      return;
    }

    this.authService.signIn(this.signInRequestModel()).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (error: HttpErrorResponse) => this.handleAuthError(error, this.signInErrorMessage),
    });
  }

  protected onSignUp(event?: Event): void {
    event?.preventDefault();
    this.signUpErrorMessage.set(null);

    if (!this.signUpForm().valid()) {
      return;
    }

    this.authService.signUp(this.signUpRequestModel()).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (error: HttpErrorResponse) => this.handleAuthError(error, this.signUpErrorMessage),
    });
  }

  private handleAuthError(
    error: HttpErrorResponse,
    writableSignal: WritableSignal<string | null>,
  ): void {
    writableSignal.set(error.error?.message);
  }
}
