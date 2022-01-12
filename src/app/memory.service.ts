import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MemoryService {

private memorySub = new Subject<number[]>()
broadCast$ = this.memorySub.asObservable();

  constructor() { 

    interval(200).subscribe(()=>{
      const arr = []
      for(let i=0; i< 100000; i++){
        arr.push(Math.random())
      }
      this.memorySub.next(arr)
    })
  }

}
