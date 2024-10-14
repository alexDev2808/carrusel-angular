import { Component } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { SheetComponent } from './components/sheet/sheet.component';

@Component({
  selector: 'app-sheets',
  standalone: true,
  imports: [
    SheetComponent
  ],
  templateUrl: './sheets.component.html',
  styleUrl: './sheets.component.css'
})
export class SheetsComponent {

}
