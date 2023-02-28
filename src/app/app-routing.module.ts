import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUrlComponent } from './create-url/create-url.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';

const routes: Routes = [
  {path: 'urls', component: UrlListComponent},
  {path: 'create-url', component: CreateUrlComponent},
  {path: '', redirectTo: 'urls', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
