import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project';
  doc = inject(DOCUMENT);
  
  constructor(@Inject(PLATFORM_ID) private platformId:any){}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      console.log("Browser");
    }
  }
}
