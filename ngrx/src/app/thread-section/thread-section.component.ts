import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadService: ThreadService) 
  { 

  }

  ngOnInit() {
    this.threadService.loadUserThreads();
  }

}
