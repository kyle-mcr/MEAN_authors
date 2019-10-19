import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'products/new', component:NewComponent},
  {path:'products/edit/:id', component:EditComponent},
  {path:'products/show/:id', component:ShowComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
