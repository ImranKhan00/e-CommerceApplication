import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  selectedPaymentName = 'a';
  selectedPaymentMethod = new FormControl('0');
  constructor() { }

  ngOnInit(): void {
    //issue sligh
    this.selectedPaymentMethod.valueChanges.subscribe((res:any) => {
      if(res ==='0') this.selectedPaymentName='';
      else this.selectedPaymentName = res.toString();
    });
  }

}
