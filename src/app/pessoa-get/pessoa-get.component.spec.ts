import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaGetComponent } from './pessoa-get.component';

describe('PessoaGetComponent', () => {
  let component: PessoaGetComponent;
  let fixture: ComponentFixture<PessoaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
