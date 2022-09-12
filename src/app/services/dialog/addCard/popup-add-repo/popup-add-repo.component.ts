import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popup-add-repo',
  templateUrl: './popup-add-repo.component.html',
  styleUrls: ['./popup-add-repo.component.scss']
})
export class PopupAddRepoComponent {

  public frmRepo: FormGroup;
  public frmValidators = {
      full_name:        [this._data.formData?.full_name,        [Validators.required]],
      description:      [this._data.formData?.description,      [Validators.required]],
      stargazers_count: [this._data.formData?.stargazers_count, [Validators.required]],
      forks_count:      [this._data.formData?.forks_count,      [Validators.required]],
      language:         [this._data.formData?.language,         [Validators.required]],
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public _data: any,
    public  _dialogRef: MatDialogRef<PopupAddRepoComponent>,
    private _formBuilder: FormBuilder,
  ) {
    this.frmRepo = this._formBuilder.group(this.frmValidators)
    this.onChange();
  }

  private onChange() {
    this.frmRepo.valueChanges.subscribe(val => {
      if(this._data.formData == undefined) this._data.formData = {};

      this._data.formData.full_name        = val.full_name;
      this._data.formData.description      = val.description;
      this._data.formData.stargazers_count = val.stargazers_count;
      this._data.formData.forks_count      = val.forks_count;
      this._data.formData.language         = val.language;
    });
  }

  public save() {
    if (this._data.tipo === 'insert')
      this._data.rowInserted(this._data.formData);
    else
      this._data.rowUpdated(this._data.formData);
    this._dialogRef.close();
  }

  public cancelarBotao() {
    this._dialogRef.close();
  }
}
