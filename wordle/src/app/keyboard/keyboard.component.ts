
import { Component} from '@angular/core';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent{
  onKeypress(event: any){
    console.log(event)
  }

}

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let guess: string[] = ["a" ,"b"];
console.log(guess.length)

// function getResult(event:KeyboardEvent) {
//   var keyEventPresses = event.key;
//   console.log(keyEventPresses);


//   if (alphabet.indexOf(keyEventPresses) != -1 && guess.length < 5) {
//     guess.push(keyEventPresses);
//     console.log(guess.length);
//     console.log("guess is",guess)
//   }

//   if (keyEventPresses === "Enter" && guess.length === 5) {
//     console.log("pressed enter");
//   } else if (keyEventPresses === "Backspace") {
//     console.log("delete last letter")
//   }}

//   getResult()
