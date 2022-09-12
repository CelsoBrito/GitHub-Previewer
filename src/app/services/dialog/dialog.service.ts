import { ComponentType } from '@angular/cdk/portal';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PopupAddRepoComponent } from './addCard/popup-add-repo/popup-add-repo.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public _dialog: MatDialog,
    public _breakPointObserver: BreakpointObserver
  ) { }

  public create_custom(componentOrTemplateRef: ComponentType<unknown> | TemplateRef<unknown>, config?: MatDialogConfig<any>): Observable<any> {
    return this._dialog.open(componentOrTemplateRef, config).afterClosed();
  }

  public showAddRepo(data: { repoInserted: (formData: any) => void; tipo: string; }) {
    this.create_custom(PopupAddRepoComponent, {
      width: this._breakPointObserver.isMatched('(max-width: 599px)')
        ? '100vw'
        : '45%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      disableClose: true,
      closeOnNavigation: false,
      panelClass: 'custom-dialog-with-toolbar',
      data: data,
    });
  }


}
