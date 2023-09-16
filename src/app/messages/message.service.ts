import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [];
  isDisplayed = false;

  get messages(): string[] {
    return this._messages;
  }

  get isMessageDisplayed(): boolean {
    return this.isDisplayed;
  }

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }
}
