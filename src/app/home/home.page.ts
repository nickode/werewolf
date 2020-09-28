import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public playerName;
  public hostName;

  constructor(private http: HttpClient, private storage: Storage) {}

  public setPlayerName(event)
  {
    this.playerName = event.detail.value
    this.storage.ready().then(() => {
      this.storage.set('playerName', this.playerName)
      console.log(this.playerName)
    })
  }

  public setJoinHost(event)
  {
    this.hostName = event.detail.value
  }

  public joinGame()
  {

    this.http.post(`http://localhost:3000/join/`, {
      "playerName":this.playerName,
      "gameHostName":this.hostName
    }).subscribe((val) => {
      if(val[0].creator)
      {
        
      }
    })
  }

}
