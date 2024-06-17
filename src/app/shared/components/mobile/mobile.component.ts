import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile.interface';
import { mobileProducts } from '../../const/mobileData';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobileArr:Array<Imobile> =mobileProducts;
  constructor() { }

  ngOnInit(): void {
  }

}
