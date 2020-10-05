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

  constructor(private http: HttpClient, private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  public setPlayerName(event)
  {
    this.storage.ready().then(() => {
      this.storage.set('username',event.detail.value)
    })
  }

  public setGameHostName(event)
  {
    this.storage.ready().then(() => {
      this.storage.set('hostname',event.detail.value)
    })
  }

}
