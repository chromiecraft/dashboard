import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

interface GitHubResponse {
  total_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) {}

  getCount(filter: string): Observable<number> {
    return this.http.get<GitHubResponse>(`https://api.github.com/search/issues?page=0&per_page=1&q=${filter}`).pipe(
      map((result) => result.total_count),
    );
  }

  getToTriageCount(): Observable<number> {
    return this.getCount(`repo:chromiecraft/chromiecraft+type:issue+state:open+label:"Needs%20Triage"`);
  }

  getToTestCount(): Observable<number> {
    return this.getCount(`repo:azerothcore/azerothcore-wotlk+type:pr+state:open+label:"Waiting%20To%20Be%20Tested""`);
  }
}
