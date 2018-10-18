import { Component, OnDestroy, OnInit } from '@angular/core'
import { stack, VERSION } from '@colmena/core'
import { Subscription } from 'rxjs'
import { AppService } from '../../../app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public client = {
    version: VERSION,
    stack: stack,
  }
  public server = {}

  private sub: Subscription

  constructor(private service: AppService) {}

  ngOnInit() {
    this.sub = this.service.getStatus()
      .subscribe(status => this.server = status)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
