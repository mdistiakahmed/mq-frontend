import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  Meta,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './pages/upload/upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { QuotesLeftPanelComponent } from './components/quotes-left-panel/quotes-left-panel.component';
import { QuotesRightPanelComponent } from './components/quotes-right-panel/quotes-right-panel.component';
import { CardModule } from 'primeng/card';
import { LoaderComponent } from './components/loader/loader.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { TooltipModule } from 'primeng/tooltip';
import { QuoteDetailsPageComponent } from './pages/quote-details-page/quote-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    UploadComponent,
    QuotesLeftPanelComponent,
    QuotesRightPanelComponent,
    LoaderComponent,
    CategoryPageComponent,
    QuoteDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule,
    DropdownModule,
    ProgressSpinnerModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ScrollPanelModule,
    PaginatorModule,
    CardModule,
    TooltipModule,
  ],
  providers: [DatePipe, provideClientHydration(), MessageService, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
