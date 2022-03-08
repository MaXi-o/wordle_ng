import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private messageSource = new BehaviorSubject<string>("Default message");
    currentMessage = this.messageSource.asObservable();
    changeMessage(message: string){
        this.messageSource.next(message)
    }
}
