import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedityComponent } from './humedity.component';

describe('HumedityComponent', () => {
  let component: HumedityComponent;
  let fixture: ComponentFixture<HumedityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumedityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
