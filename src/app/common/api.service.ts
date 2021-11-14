import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(url): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getClientId()}`
      })
    })
  }

  private getClientId() {
    let clientId = environment.witAi.witAiClientId;
    if (clientId == null) {
      throw 'Wit.ai clientID is missing'
    }
    return environment.witAi.witAiClientId;
  }
}