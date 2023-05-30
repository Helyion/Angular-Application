import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form = {
    email: null,
    password: null
  }
  constructor(private tokenServices: TokenService) {

  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.form)
    this.tokenServices.saveToken("token")
  }
}
