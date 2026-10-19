import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
@Component({
  imports: [TranslocoPipe],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
