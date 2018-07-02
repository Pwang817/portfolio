import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private startup: StartupService) {

    }
    ngOnInit() {


      this.startup._startUp();

    }

}
