import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from 'src/app/services/gameofthrones.service';

@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css']
})
export class GameofthronesComponent implements OnInit {

  constructor(private gotService:GameofthronesService) { }

  got:any;

  ngOnInit(): void {
    this.getGot();
  }

  getGot(){
    this.gotService.getGot().subscribe(resp =>{
      console.log(resp);
      this.got = resp;
    })
  }

}
