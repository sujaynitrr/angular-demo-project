import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeParentComponent } from './on-change-parent.component';

describe('OnChangeParentComponent', () => {
  let component: OnChangeParentComponent;
  let fixture: ComponentFixture<OnChangeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnChangeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnChangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
