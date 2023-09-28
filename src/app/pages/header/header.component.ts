import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  imagePath!: string;

  constructor(private renderer: Renderer2) {
    this.setImagePath();
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event)
    this.setImagePath();
  }

  setImagePath() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 600) {
      this.imagePath = '/assets/header_mobile.png';
    } else {
      this.imagePath = '/assets/header_md.png';
    }
  }
}
