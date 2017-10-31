import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web-services',
  templateUrl: './web-services.component.html',
  styleUrls: ['./web-services.component.css']
})
export class WebServicesComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/posts/1';
  post$;
  post2$;

  constructor(private httpClient: HttpClient, private postService: PostService) {
    this.post$ = httpClient.get(this.url);
    this.post2$ = postService.getPost();
  }

  ngOnInit() {
  }



}
