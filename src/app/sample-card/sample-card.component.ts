import { ProductService } from './../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import {Product} from '../Models/product';

@Component({
  selector: 'app-sample-card',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sample-card.component.html',
  styleUrl: './sample-card.component.css'
})
export class SampleCardComponent implements OnInit {

  public loginForm!:FormGroup;
  public submitted = false; 
  public product:any = [];

  constructor(private fb:FormBuilder, private productService:ProductService){

  }
  

  ngOnInit():void {
   this.loginForm = this.fb.group({
    email:[null,[Validators.required]],
    password:[null,[Validators.required]]

   });

   this.getProduct();
  }
  public getProduct(){
      this.productService.getProduct().subscribe(data => {
        this.product = data;
      });
    }

  
   onSubmit(): void {
    if (this.loginForm.valid) {
      this.submitted = true;
    }
  }

  
} 
