import { Component, OnInit } from '@angular/core';
import { GitHubService } from "./github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toTriageCount: number;
  toTestCount: number;

  constructor(private readonly gitHubService: GitHubService) {}

  ngOnInit() {
    this.gitHubService.getToTriageCount().subscribe((count) => this.toTriageCount = count);
    this.gitHubService.getToTestCount().subscribe((count) => this.toTestCount = count);
  }

  getClass(toTriageCount: number) {
    if (toTriageCount <= 10) {
      return 'bg-success';
    }
    if (toTriageCount <= 20) {
      return 'bg-primary';
    }
    if (toTriageCount <= 50) {
      return 'bg-warning';
    }
    return 'bg-danger';
  }
}
