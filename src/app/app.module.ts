import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AngularWebStorageModule } from 'angular-web-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpdateComponent } from './components/update/update.component';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { ExampleOfEventComponent } from './components/event/example-of-event/example-of-event.component';
import { ShowEventComponent } from './components/event/show-event/show-event.component';
import { InputEventComponent } from './components/event/input-event/input-event.component';
import { LishmembersComponent } from './components/lishmembers/lishmembers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    SigninComponent,
    AdminComponent,
    UpdateComponent,
    AddmemberComponent,
    ExampleOfEventComponent,
    ShowEventComponent,
    InputEventComponent,
    LishmembersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
