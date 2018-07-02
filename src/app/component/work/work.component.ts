import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    constructor(private startup: StartupService) {

    }
    ngOnInit() {


      this.startup._startUp();

    }

}
