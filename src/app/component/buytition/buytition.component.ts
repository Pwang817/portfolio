import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';

@Component({
  selector: 'app-buytition',
  templateUrl: './buytition.component.html',
  styleUrls: ['./buytition.component.css']
})
export class BuytitionComponent implements OnInit {

    constructor(private startup: StartupService) {

    }

    ngOnInit() {


      this.startup._startUp();

    }

}
