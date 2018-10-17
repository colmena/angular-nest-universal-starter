import { Component, OnInit } from '@angular/core'
import { stack } from '@colmena/core'
import { AppService } from './app.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'colmena-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'admin'
  public stack: any[] = stack
  public status = {}
  private sub: Subscription

  constructor(private service: AppService) {}

  ngOnInit() {
    this.sub = this.service.getStatus()
      .subscribe(status => this.status = status)
  }
}
