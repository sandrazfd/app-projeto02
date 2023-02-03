import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{


  ngOnInit(): void {
    this.userlog = this.storage.getItem('username');
  }
  
  storage: Storage = localStorage;
  userlog!: string | null;
}
