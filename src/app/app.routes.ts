import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SheetsComponent } from './pages/sheets/sheets.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'sheets',
        component: SheetsComponent
    }
];
