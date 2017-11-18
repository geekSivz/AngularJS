import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationInfoComponent } from './declaration-info.component';

describe('DeclarationInfoComponent', () => {
  let component: DeclarationInfoComponent;
  let fixture: ComponentFixture<DeclarationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
