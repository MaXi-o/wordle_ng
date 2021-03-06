import { Component, HostListener, OnInit} from '@angular/core';



@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  guess: any = []
  keyPressed!: string;
  @HostListener('window:keydown', ['$event']) spaceEvent(event: any){
    console.log(event.key)
    this.keyPressed = event.key.toUpperCase();
    
   if (event.keyCode >= 65 && event.keyCode <=90 && this.guess.length < 5){
    this.guess.push(this.keyPressed)
    console.log("added", this.keyPressed, "to guess array")
   }
   else if (event.keyCode === 8 && this.guess.length != 0) {
     console.log("Backspace deleted last letter")
     this.guess.pop()
   }
   
   console.log(this.guess)
   this.guessOutput0 = this.guess[0]
   this.guessOutput1 = this.guess[1]
   this.guessOutput2 = this.guess[2]
   this.guessOutput3 = this.guess[3]
   this.guessOutput4 = this.guess[4]

  }
  guessOutput0!: string;
  guessOutput1!: string;
  guessOutput2!: string;
  guessOutput3!: string;
  guessOutput4!: string;

  ngOnInit(): void {
  }

}
