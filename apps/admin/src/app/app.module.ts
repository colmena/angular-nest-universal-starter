import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { NxModule } from '@nrwl/nx'
import { AppComponent } from './app.component'
import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    NxModule.forRoot(),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
