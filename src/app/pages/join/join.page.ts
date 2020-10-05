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
  public hostname:string
  public username:string

  constructor(private http:HttpClient, private router:Router, private storage: Storage) { }

  ngOnInit() {

    this.storage.ready().then(() => {

      this.storage.get('hostname').then(hostname => {
        this.hostname = hostname

        this.storage.get('username').then(username =>{
          this.username = username

        }).then(() => {
          console.log(this.username)
          console.log(this.hostname)

          this.http.get(`http://localhost:3000/games/${this.hostname}`).subscribe(game => {
            this.game = game
          })

        }).then(() => {
          this.http.get(`http://localhost:3000/players/${this.hostname}`).subscribe(players => {
            this.players = players
            console.log(this.players)
          })
        })
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
