import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ProxyService } from '../services/proxy.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor(private elementRef: ElementRef, private renderer: Renderer2,private proxy:ProxyService) {}
  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem("darkMode") == "true";
    document.body.classList.toggle("bg-dark", this.isDarkMode);
    this.togglerText = this.isDarkMode ? "Light Mode" : "Dark Mode";

  }
  isDarkMode: boolean = false;
  togglerText:string = ""
  collapseNavbar() {
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      this.renderer.removeClass(navbarToggler, 'collapsed');
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode
    localStorage.setItem("darkMode", JSON.stringify(this.isDarkMode))
    this.proxy.darkModeEmitter.emit(this.isDarkMode)
    document.body.classList.toggle("bg-dark", this.isDarkMode);
    this.togglerText = this.isDarkMode ? "Light Mode" : "Dark Mode";
  }
}

