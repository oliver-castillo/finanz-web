import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-auth',
  imports: [HlmTabsImports, HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  host: {
    class: 'block w-full max-w-lg',
  },
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {}
