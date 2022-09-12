import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepoService, Repo, Repos } from '../common/models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements IRepoService {

  allRepos: Repos = [
      {
        full_name: 'repo1',
        description: 'desc1',
        stargazers_count: '0',
        forks_count: '0',
        language: 'Typescript',
      },
      {
        full_name: 'repo2',
        description: 'desc2',
        stargazers_count: '1',
        forks_count: '1',
        language: 'Javascript',
      },
    ];

  public getRepos(): Observable<Repos> {
    return of(this.allRepos);
  }

  public addRepos(repo: Repo) {
    this.allRepos.push(repo);
  }
}
