import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from '../../news';
import { NewsService } from '../../newsservice';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css'],
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
export class HomeIndexComponent implements OnInit {

  News!: News[];
  responsiveOptions = [{}];
  data!: any;
  safeSrc: any;

  constructor(private NewsService: NewsService, private sanitizer: DomSanitizer) {


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  convertText(text: any) {
    return this.data = this.sanitizer.bypassSecurityTrustHtml(text);
  }
  ngOnInit() {
    this.NewsService.getProductsSmall().then(news => {
      this.News = news;
      console.log(news);
    });
    
  }


  ngAfterViewInit() {
    (document.querySelector('body.bgcolor') as HTMLElement).style.background = 'none';
  }

}
