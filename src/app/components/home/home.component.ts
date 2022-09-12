import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { GithubService } from 'src/app/services/github.mock.service';
import { GithubService } from 'src/app/services/github.service';
import { Repo, Repos } from 'src/app/common/models/repo.model'
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public $repos = this.repoGithub();

  constructor(
    private _githubService: GithubService,
    private _dialog: DialogService,
  ) { }

  public ngOnInit(): void { }

  public repoGithub(): Observable<Repos> {
    return this._githubService.getRepos();
  }

  public log() {
    this._dialog.showAddRepo({ repoInserted: this.adicionandoRepo, tipo: 'insert'});
  }

  private adicionandoRepo(formData: Repo) {
    // this._githubService.addRepos(formData);
  }
}
