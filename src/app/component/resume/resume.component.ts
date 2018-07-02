import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

    constructor(private startup: StartupService) {

    }
    ngOnInit() {


      this.startup._startUp();

    }

}
