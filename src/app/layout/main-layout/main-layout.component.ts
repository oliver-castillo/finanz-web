import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { LanguageSelect } from './language-select/language-select';

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, RouterOutlet, HlmSidebarImports, LanguageSelect],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayout {}
