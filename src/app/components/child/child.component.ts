import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryService } from 'src/app/memory.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

// export class ChildComponent implements OnInit{
//   dataRecieved: number[][] = [];

//   constructor(private service: MemoryService) { }

//   ngOnInit(): void {
//     this.service.broadCast$.subscribe((data) => {
//       this.dataRecieved.push(data)
//     })
//   }

// }


export class ChildComponent implements OnInit, OnDestroy {
  dataRecieved: number[][] = [];
  private subscription: Subscription | undefined;

  constructor(private service: MemoryService) { }

  ngOnInit(): void {
    this.subscription = this.service.broadCast$.subscribe((data) => {
      this.dataRecieved.push(data)
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}