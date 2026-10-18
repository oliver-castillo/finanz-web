import { Component, input } from '@angular/core';
import { HlmSidebarTrigger } from '@spartan-ng/helm/sidebar';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { lucideCircleFadingPlus } from '@ng-icons/lucide';

@Component({
  imports: [HlmSidebarTrigger, NgIcon, HlmButtonImports],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  providers: [provideIcons({ lucideCircleFadingPlus })],
})
export class Header {
  readonly title = input.required<string>();
}
