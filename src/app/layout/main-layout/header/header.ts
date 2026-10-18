import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { HlmSidebarTrigger } from '@spartan-ng/helm/sidebar';
import { HlmButtonImports } from '@spartan-ng/helm/button';

export interface HeaderAction {
  label: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

@Component({
  imports: [HlmSidebarTrigger, HlmButtonImports, NgIcon],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly title = input.required<string>();
  readonly actions = input<readonly HeaderAction[]>([]);
}
