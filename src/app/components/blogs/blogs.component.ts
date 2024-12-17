import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      (data) => {
        this.blogs = data.posts || [];
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
