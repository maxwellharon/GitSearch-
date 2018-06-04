import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
// import { favicon } from '@angular/core';1

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
