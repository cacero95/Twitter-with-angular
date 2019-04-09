import {Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';

import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';

export const ROUTES: Routes =[
    {path:'home', component:HomeComponent},
    {path:'search', component: SearchComponent},
    {path:'dashboard/:id', component: DashboardComponent},
    {path:'contact', component: ContactComponent},
    {path:'info',component:InfoComponent},
    {path:'', pathMatch: 'full', redirectTo:'home'},
    {path:'**', pathMatch: 'full', redirectTo:'home'}
];