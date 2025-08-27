import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-post-card-item',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './post-card-item.component.html',
  styleUrl: './post-card-item.component.css'
})
export class PostCardItemComponent {
  @Input() posts: any[] = [];
   
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }
}
  