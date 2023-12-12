import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
