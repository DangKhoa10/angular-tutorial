import { Component, Injectable, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { io } from "socket.io-client";

@Component({
  selector: 'app-room-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-chat.component.html',
  styleUrl: './room-chat.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class RoomChatComponent implements OnInit{
  newMessage = '';
  messageList: string[] = [];
  socket = io('ws://localhost:9000');
  constructor() {}


  ngOnInit(){
    // this.socket.on('message', (message: string) => {
    //   this.messageList.push(message);
    // });
  }

  sendMessage() {
   // this.socket.emit('message', (this.newMessage));
    this.newMessage = '';
  }
}
