import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {

    user = [];
    repos = [];
    username:string;

  constructor(private githubService:GithubService) { 
    this.user=null;

  }

  searchUser(){
    //Update User Name
    this.githubService.updateUser(this.username);

      //Get User Info
    this.githubService.getUser().subscribe(user => {
        console.log(user);
        this.user=user;
    });

    //Get Repository Info
    this.githubService.getRepo().subscribe(repos => {
        console.log(repos);
        this.repos=repos;
    });
  }

  ngOnInit() {
  }

}
