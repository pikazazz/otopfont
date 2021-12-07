import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})
export class VRComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    (document.querySelector('body.bgcolor') as HTMLElement).style.background = 'black';
  }
}
