import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {

  public game:any
  public players:any

  constructor(private http:HttpClient, private router:Router, private stg: Storage) { }

  ngOnInit() {

    this.stg.ready().then(() => {
      this.stg.get('hostname').then(host => {
        console.log(host)
      })
    })

  }

  getPlayers()
  {
    return this.players
  }

  showPlayers()
  {
    console.log(this.players)
  }

  showGame()
  {
    console.log(this.game)
  }
}
