import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleCardComponent } from './sample-card/sample-card.component';
import { PostsComponent } from "./posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleCardComponent, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';
}
