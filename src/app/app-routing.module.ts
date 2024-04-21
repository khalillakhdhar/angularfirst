import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'angular',component:AngularComponent},
  {path:'react',component:ReactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
