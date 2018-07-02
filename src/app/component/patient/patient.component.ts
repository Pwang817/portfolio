import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

    constructor(private startup: StartupService) {

    }

    ngOnInit() {


      this.startup._startUp();

    }

}
