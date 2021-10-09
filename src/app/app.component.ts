import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GitHubService } from "./github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public readonly gitHubService: GitHubService) {}
}
