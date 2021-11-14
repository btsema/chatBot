import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.witAi.witAiClientId;

  constructor(private apiService: ApiService) {
  }

  getMessage(inputMessage): Observable<any> {
    let url = this.getUrl(inputMessage);
    return this.apiService.get(url);
  }

  private getUrl(inputMessage) {
    return environment.witAi.witAiGetInfoUrl + '?q=' + inputMessage;
  }
}