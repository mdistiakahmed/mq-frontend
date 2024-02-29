import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UploadComponent } from './pages/upload/upload.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { QuoteDetailsPageComponent } from './pages/quote-details-page/quote-details-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'quote/:category', component: CategoryPageComponent },
  { path: 'quote-details/:id', component: QuoteDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
