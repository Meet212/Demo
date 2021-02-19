import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './nav/home/home.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'home' ,component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
