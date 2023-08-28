import { Component } from '@angular/core';

interface Post {
  username: string;
  caption: string;
  likes: number;
  comments: string[];
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  posts: Post[] = [
    {
      username: 'user1',
      caption: 'This is post 1',
      likes: 10,
      comments: ['Comment 1', 'Comment 2']
    },
    {
      username: 'user2',
      caption: 'This is post 2',
      likes: 5,
      comments: ['Comment 3']
    }
  ];

  newPost: Post = {
    username: '',
    caption: '',
    likes: 0,
    comments: []
  };

  addPost() {
    if (this.newPost.username.trim() !== '' && this.newPost.caption.trim() !== '') {
      this.posts.push({ ...this.newPost });
      this.newPost.username = '';
      this.newPost.caption = '';
    }
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
