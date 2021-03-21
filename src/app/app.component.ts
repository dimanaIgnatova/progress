import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Questions';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  startNewQuiz() {
    if (this.dataService.allQustionTypes[0] != null) {
      
    }
    this.dataService.result = 0;
    this.dataService.assignTypes();
    this.dataService.generateIds();
    this.router.navigateByUrl('/question/' + this.dataService.allQustionTypes.pop() + '/' + this.dataService.allIds.pop());
  }
}
