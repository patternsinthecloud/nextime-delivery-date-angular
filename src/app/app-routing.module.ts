import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSiteComponent } from 'src/app/new-site/new-site.component';
import { SiteComponent } from 'src/app/site/site.component';
import { Site2Component } from 'src/app/site2/site2.component';

const routes: Routes = [
  { path: 'site2/:id', component: Site2Component },
  { path: 'new-site/:id', component: NewSiteComponent },
  { path: 'site/:id', component: SiteComponent },
  { path: '', redirectTo: '/site/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
