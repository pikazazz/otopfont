import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from './news';
import { NewsService } from './newsservice';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [`
  .box {
      background-color: var(--surface-e);
      text-align: center;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 4px;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }
`]
})
export class HomeComponent implements OnInit {
  constructor(){

  }
  ngOnInit(){
    
  }
}
