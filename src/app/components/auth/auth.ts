import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { SignInRequest, SignUpRequest } from '../../models/auth.model';
import {
  debounce,
  email,
  form,
  FormField,
  minLength,
  required,
} from '@angular/forms/signals';
import { HlmFieldImports } from '@spartan-ng/helm/field';

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
  ],
  host: {
    class: 'block w-full max-w-lg',
  },
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
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

  private addEmailAndPasswordValidation(schemaPath: any) {
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

  protected onSignIn(event?: Event) {
    event?.preventDefault();
    const payload: SignInRequest = this.signInRequestModel();
    console.log('Logging in with', payload);
  }

  onSignUp(event?: Event) {
    event?.preventDefault();
    const payload: SignUpRequest = this.signUpRequestModel();
    console.log('Logging in with', payload);
  }
}
