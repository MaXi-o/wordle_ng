import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent{
  guess!:string[]
  @HostListener('window:keydown', ['$event']) spaceEvent(event: any){
    console.log(event.key)
    this.keyPressed = event.key;
    console.log(event)
    
   if (event.keyCode >= 65 && event.keyCode <=90){
    this.guess.push(this.keyPressed)
   }
   else {
     console.log("fail")
   }
   console.log(this.guess)
  }
  
  keyPressed!: string;

}
