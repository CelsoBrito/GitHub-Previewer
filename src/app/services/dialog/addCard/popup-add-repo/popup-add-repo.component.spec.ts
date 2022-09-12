import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddRepoComponent } from './popup-add-repo.component';

describe('PopupAddRepoComponent', () => {
  let component: PopupAddRepoComponent;
  let fixture: ComponentFixture<PopupAddRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
