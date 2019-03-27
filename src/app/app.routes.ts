import { EmployeeListComponent } from './components/table/employee-list.component';
import { VisitNewComponent } from './components/visit-new/visit-new.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'visits', component: VisitNewComponent },
    { path: 'employee', component: EmployeeListComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
