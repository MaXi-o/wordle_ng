import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

@Injectable()
export class SettingsComponent implements OnInit {

  wordLenght: any


  ngOnInit(): void {
    if (this.wordLenght === undefined) {
      this.wordLenght = 5
    }
  }

  }

