import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.css']
})
export class EcoComponent implements OnInit {

    constructor(private startup: StartupService) {

    }

    ngOnInit() {


      this.startup._startUp();

    }

}
