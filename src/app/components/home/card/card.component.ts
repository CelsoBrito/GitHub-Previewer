import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/common/models/repo.model';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() repo: Repo = {}

  constructor(
    private _dialog: DialogService,
  ) {

  }

  public onRowInserting() {
    // this._dialog.showAddRepo({ repoInserted: this.newCard, tipo: 'insert' });
  }

  public newCard(formData: Repo): void {
  }


}
