import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {ChatService}  from './chat.service'
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageDetailsComponent } from './message-details/message-details.component';

@NgModule({
  declarations: [ChatDialogComponent, MessageDetailsComponent],
  providers: [ChatService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ChatDialogComponent]
})
export class ChatModule { }
