import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

  constructor(private renderer : Renderer2){ }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "login-page")
  }

}
