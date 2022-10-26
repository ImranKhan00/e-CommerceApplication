import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path: string = "../../assets/imgs/";
  suggestedProducts:SuggestedProduct[] = [
    {
      // bannerImage:'D:\PracticePojects\ClientSide\ecommerce-app\src\assets\imgs\Banner_Mobile.jpg',
      bannerImage:this.path+'mobileLand.jpg',
      category: {
        id:0,
        category:'electronics',
        subcategory:'mobiles'
      }
    },
    {
      bannerImage:this.path+'Banner_Laptop.png',
      category: {
        id:2,
        category:'electronics',
        subcategory:'laptops'
      }
    },
    {
      bannerImage:this.path+'Banner_Chair.jpg',
      category: {
        id:3,
        category:'furniture',
        subcategory:'chairs'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
