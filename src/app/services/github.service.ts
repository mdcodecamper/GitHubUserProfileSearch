import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName:string;

  constructor(private _http:Http) { 

    console.log('Github Service is Ready...');
    this.userName = 'mdcodecamper';

  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+ this.userName).map(res => res.json());

  }

  getRepo(){
    return this._http.get('http://api.github.com/users/'+ this.userName + '/repos').map(res => res.json());

  }

  updateUser(username:string){
    this.userName=username;

  }

}
