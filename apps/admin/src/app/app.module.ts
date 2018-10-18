import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { TransferHttpCacheModule } from '@nguniversal/common'

import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
