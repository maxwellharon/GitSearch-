import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = 'e6e35541af8025357b25';
  private clientsecret = '12ed9835a3a925077e6bd2ac967d71e2ada7345c';
  constructor(private http:Http) { }
  console.log("Service is now ready!")
  this.username = 'maxwellharon';
}

getProfileInfo(){
  return this.http.get(" https://api.github.com/users/maxwellharon " + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.client_secret)
  .map(res =>res.json()); 
}
