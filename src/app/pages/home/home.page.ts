import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {Router}from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public playerName;
  public gameHostName;

  constructor(private http: HttpClient, private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  public setPlayerName(event)
  {
    this.playerName = event.detail.value
    console.log(this.playerName)
  }

  public setGameHostName(event)
  {
    this.gameHostName = event.detail.value
  }

  public joinGame()
  {

    this.storage.ready().then(() => {
      this.storage.set('username', this.playerName).then(() => {
        this.storage.set('hostname', this.gameHostName).then(() => {
          this.router.navigate(['/join'])
        })
      })
      
    })
  }

  public createGame()
  {
    this.storage.ready().then(() => {
      console.log(this.playerName)
      this.storage.set('username', this.playerName).then(() => {
        this.storage.set('hostname', this.gameHostName).then(() => {
          this.router.navigate(['/create'])
        })
      })
      
    })
  }

}
