import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerCirclePlus } from '@ng-icons/tabler-icons';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
@Component({
  imports: [
    TranslocoPipe,
    NgIcon,
    HlmButtonImports,
    HlmDialogImports,
    HlmFieldImports,
    HlmInputImports
  ],
  selector: 'app-accounts',
  styleUrl: './accounts.scss',
  templateUrl: './accounts.html',
  providers: [provideIcons({ tablerCirclePlus })],
})
export class Accounts {}
