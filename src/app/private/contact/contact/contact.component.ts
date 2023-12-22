import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactMessage: any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.setContactMessageDataList();
  }

  setContactMessageDataList():void{
    this.dataService.getItems('contact').subscribe(res=>{
      this.contactMessage = res;
    })
  }

}
