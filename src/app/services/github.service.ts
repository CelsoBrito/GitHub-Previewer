import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepoService, Repos } from '../common/models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements IRepoService {
  PERFIL = 'angular';
  GITHUB_URL = `http://api.github.com/users/${this.PERFIL}`;

  constructor(private _httpClient: HttpClient) { }

  public getRepos(): Observable<Repos> {
    return this._httpClient.get<Repos>(`${this.GITHUB_URL}/repos`);
  }
}
