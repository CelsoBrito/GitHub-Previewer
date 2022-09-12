import { Observable } from "rxjs";

export type Repo = {
  full_name?: string;
  description?: string;
  stargazers_count?: string;
  forks_count?: string;
  language?: string;
}

export type Repos = Array<Repo>;

export interface IRepoService {
  getRepos(): Observable<Repos>
}
