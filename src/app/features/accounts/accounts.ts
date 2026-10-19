import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { provideIcons } from '@ng-icons/core';
import { tablerCirclePlus } from '@ng-icons/tabler-icons';
@Component({
  imports: [TranslocoPipe],
  selector: 'app-accounts',
  styleUrl: './accounts.scss',
  templateUrl: './accounts.html',
  providers: [provideIcons({ tablerCirclePlus })],
})
export class Accounts {
}
