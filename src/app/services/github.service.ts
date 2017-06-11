import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName:string;
  private client_id ='a13cea87f4bf83ffb39b';
  private client_secret='859f4812bfb10e98fd59f837640c6541417d34b5';

  constructor(private _http:Http) { 

    console.log('Github Service is Ready...');
    this.userName = 'mdcodecamper';

  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+ this.userName + '?client_id='+this.client_id + '&client_secret='+ this.client_secret).map(res => res.json());

  }

  getRepo(){
    return this._http.get('http://api.github.com/users/'+ this.userName + '/repos?client_id='+ this.client_id + '&client_secret='+ this.client_secret).map(res => res.json());

  }

  updateUser(username:string){
    this.userName=username;

  }

}
