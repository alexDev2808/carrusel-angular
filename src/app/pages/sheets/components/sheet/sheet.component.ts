import { Component, Input } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { SafePipe } from '../../../../pipes/safe.pipe';


@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    MatTabsModule,
    SafePipe
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.css'
})
export class SheetComponent {

  public heigthScreen: any;

  constructor() {
    this.heigthScreen = window.innerHeight * 1.1;
  }

  public sheets: any[] = [
    {
      titulo: 'Produccion Inyeccion',
      url: 'https://docs.google.com/spreadsheets/d/1KdbMpaU-ttxDbwSPz-ugCvHfKkHK4UG-XHLJcNotlSo/edit?gid=1830148115#gid=1830148115'
    },
    {
      titulo: 'Produccion Estampado',
      url: 'https://docs.google.com/spreadsheets/d/1W5ijKPLuJWkgV2uHEUWC_HVdM8NYSxiqvvEY2DVP-cM/edit?gid=0#gid=0'
    },
    {
      titulo: 'Produccion Ensamble',
      url: 'https://docs.google.com/spreadsheets/d/111d1MeNNe2tLLZj9bhYB3hBq1CTkrVKvDeitnRGK7Fs/edit?gid=0#gid=0'
    }
  ];

}
