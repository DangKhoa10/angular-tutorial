import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { io } from "socket.io-client";

@Component({
  selector: 'app-room-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']  // Use styleUrls
})

export class RoomChatComponent implements OnInit, OnDestroy {
  newMessage = '';
  messageList: string[] = [];
  socket: any
  isBrowser: boolean = false

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.socket = io('http://localhost:9000');


    }
  }


  ngOnDestroy(): void {
    if (this.isBrowser) {

      this.socket.disconnect();

    }
  }



  ngOnInit() {
    if (this.isBrowser) {

      this.socket.on('message', (message: string) => {
        this.messageList.push(message);
      });
    }
  }

  sendMessage() {
    if (this.isBrowser) {

      this.socket.emit('message', (this.newMessage));
      this.newMessage = '';
    }
  }
}
