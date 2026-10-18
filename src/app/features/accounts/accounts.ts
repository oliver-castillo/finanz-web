import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { tablerCirclePlus } from '@ng-icons/tabler-icons';
import { Header, type HeaderAction } from '../../layout/main-layout/header/header';

@Component({
  imports: [Header],
  selector: 'app-accounts',
  styleUrl: './accounts.scss',
  templateUrl: './accounts.html',
  providers: [provideIcons({ tablerCirclePlus })],
})
export class Accounts {
  readonly headerActions: HeaderAction[] = [
    {
      label: 'features.accounts.addAccount',
      icon: 'tablerCirclePlus',
      className: 'hidden sm:flex',
    },
  ];
}
