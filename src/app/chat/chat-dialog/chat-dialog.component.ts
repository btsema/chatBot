import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { EntityItemModel } from '../models/entity-items.model copy';
import { ResponseModel } from '../models/response.model';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  repos: any;
  responses: ResponseModel;
  errorMessage;
  loading: boolean;
  inputMessage: '';
  enableButton: boolean;
  returnedItems: EntityItemModel[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.enableButton = false;
  }

  private preCall() {
    this.loading = true;
    this.returnedItems = [];
  }

  public getMessage(inputMessage) {
    this.preCall();
    this.chatService.getMessage(inputMessage).subscribe(
      (response) => {
        this.repos = response;
        this.responses = response;

        for (let key in this.responses.entities) {
          this.returnedItems.push(this.responses.entities[key][0] as EntityItemModel);
        }
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      })
  }
}