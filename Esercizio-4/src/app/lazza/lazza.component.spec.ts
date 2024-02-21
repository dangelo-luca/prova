import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzaComponent } from './lazza.component';

describe('LazzaComponent', () => {
  let component: LazzaComponent;
  let fixture: ComponentFixture<LazzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
