import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private postService: PostService) {}

  listPost: Post[] = [];
  post: Post= new Post();
  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.listPost = data;
    });
  }

  cadastrarPost(){
      this.postService.postMensagens(this.post).subscribe((data: any)=>{
        this.post = data;
        location.assign('/feed')
      })
  }
}
