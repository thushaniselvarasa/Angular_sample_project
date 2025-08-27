import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsService } from '../Services/posts.service';
import { PostCardItemComponent } from './post-card-item/post-card-item.component';  

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PostCardItemComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  postForm!: FormGroup;
  posts: any[] = [];
  newPosts: any[] = [];
  items: string[] = [];

  availableTags = ['history', 'american', 'crime'];

  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: ['', Validators.required],
      userId: ['', Validators.required],
      views: [0, Validators.required],
      reactions: this.fb.group({
        likes: [0],
        dislikes: [0]
      })
    });

    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts().subscribe((res: any) => {
      this.posts = res.posts || [];
    });
  }


  onPostSubmit(): void {
    if(this.postForm.valid) {
      const postData = this.postForm.value;
      this.postsService.createPost(postData).subscribe((res: any) => {
        this.posts.push(this.postForm.value );
        this.postForm.reset();
      });

    }
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

