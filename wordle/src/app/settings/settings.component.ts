import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild("slider") "slider": ElementRef

  ngOnInit(): void {
    
  }
  sliderValue() {
    
  }

  }

