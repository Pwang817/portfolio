import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    constructor(private startup: StartupService) {

    }
    ngOnInit() {


      this.startup._startUp();

    }

}
