import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WebServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
