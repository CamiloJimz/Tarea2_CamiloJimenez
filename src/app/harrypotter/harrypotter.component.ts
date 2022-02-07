import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  constructor(private harryService:HarrypotterService) { }

  harry:any;

  ngOnInit(): void {
    this.getHarry();
  }

  getHarry(){
    this.harryService.getHarry().subscribe(resp =>{
      console.log(resp);
      this.harry = resp;
    })
  }
}
