import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor(private startup: StartupService) {

    }
    ngOnInit() {


      this.startup._startUp();

    }

}
