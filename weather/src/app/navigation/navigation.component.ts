import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  collapseNavbar() {
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      this.renderer.removeClass(navbarToggler, 'collapsed');
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}

