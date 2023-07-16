import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../services/proxy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private proxy:ProxyService){}
  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem("darkMode") == "true";
    this.proxy.darkModeEmitter.subscribe((data:boolean) => {
      this.isDarkMode = data
    })
  }
  isDarkMode:boolean = false;

}
