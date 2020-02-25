import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmissionComponent } from './modifmission.component';

describe('ModifmissionComponent', () => {
  let component: ModifmissionComponent;
  let fixture: ComponentFixture<ModifmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
