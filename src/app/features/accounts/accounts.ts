import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerCirclePlus } from '@ng-icons/tabler-icons';
import { HlmButtonImports } from '@spartan-ng/helm/button';
@Component({
  imports: [TranslocoPipe, NgIcon, HlmButtonImports],
  selector: 'app-accounts',
  styleUrl: './accounts.scss',
  templateUrl: './accounts.html',
  providers: [provideIcons({ tablerCirclePlus })],
})
export class Accounts {
}
