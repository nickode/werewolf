import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit { // Consider CreateComponent to be like an "object" in java. You use methods from this object to manipulate the HTML and CSS of this "page"
  public hostname:string
    public players:number
    public wolves:number
    public hunter:boolean
    public sear:boolean
    public bearwatcher:boolean
    public medic:boolean

  constructor(private http: HttpClient, private storage:Storage) { }

  ngOnInit() {
    this.players = 0
    this.wolves = 0
    this.hunter = false
    this.sear = false
    this.bearwatcher = false
    this.medic = false
    
    this.storage.ready().then(() => {
      this.storage.get('username').then((val) => {
        
        this.hostname = val
        
        
      }).then(() => {
        console.log(this.hostname)
      })
    })
  }

  createGame()
  {


    this.http.post("http://localhost:3000/create",
    {hostname: this.hostname, players:this.players, wolves:this.wolves, hunter:this.hunter, sear:this.sear, bearwatcher:this.bearwatcher, medic:this.medic}, {params:{players:this.players.toString()}})
    .subscribe((val) => {
      console.log(val)
    })

    
  }

  setHunter(event)
  {
    this.hunter = event.detail.checked
  }

  setSear(event)
  {
    this.sear = event.detail.checked
  }

  setBearwatcher(event)
  {
    this.bearwatcher = event.detail.checked
  }

  setMedic(event)
  {
    this.medic = event.detail.checked
  }

  setPlayers(event)
  {
    this.players = event.detail.value
  }

  setWolves(event)
  {
    this.wolves = event.detail.value
  }

}
