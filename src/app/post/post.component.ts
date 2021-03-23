import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post, Comment } from '../models/Post';
import { User } from '../models/User';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  users: User[] = [];
  comments: Comment[] = [];
  page: number = 1;
  pageSize: number = 8;
  closeResult = '';
  showPost: boolean = true;

  constructor(private postService: PostService, private userApi: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(posts);
    }, (err: any) => {
      console.error(err);
    });

    this.userApi.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    }, (err: any) => {
      console.error(err);
    });

    this.postService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
      console.log(comments);
    }, (err: any) => {
      console.error(err);
    });
  }

  getUsernameById(id: number) {
    let user = this.users.find(user => user.id === id);
    return user !== undefined ? user.username : '';
  }

  getPostComments(id: number) {
    let postComments: Comment[] = this.comments.filter(comment => comment.postId === id);
    return postComments;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
