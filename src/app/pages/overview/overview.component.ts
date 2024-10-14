import { Component } from '@angular/core';
import { ZoneComponent } from './components/zone/zone.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    ZoneComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
