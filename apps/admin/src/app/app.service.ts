import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  public getStatus() {
    return this.http.get(environment.apiUrl + '/status')
  }

}
