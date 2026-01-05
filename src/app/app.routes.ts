import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecuriterComponent } from './recuriter/recuriter.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'recuriter', component: RecuriterComponent },
  { path: 'skills', component: SkillsComponent },
];
