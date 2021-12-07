import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],


})
export class MenuButtonComponent implements OnInit {
  items!: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.gotopage('home') },
      { label: 'Product', icon: 'pi pi-fw pi-shopping-cart', command: () => this.gotopage('product') },
      { label: 'VR', icon: 'pi pi-fw pi-video', command: () => this.gotopage('vr')},
    ];
  }
  ngAfterViewInit() {
    (document.querySelector('.p-tabmenu .p-tabmenu-nav') as HTMLElement).style.cssText = 'justify-content:center;weigth:100px;font-size:20px;';
   
  }
  gotopage(location: string) {
    this.router.navigate([location]);
  }
}
