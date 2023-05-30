import { Component } from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent {

  constructor(private tokenService: TokenService) {
  }
  logout(): void{
    this.tokenService.clearToken()
  }
}
