import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaSPAComponent } from './mahasiswa-spa.component';

describe('MahasiswaSPAComponent', () => {
  let component: MahasiswaSPAComponent;
  let fixture: ComponentFixture<MahasiswaSPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahasiswaSPAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahasiswaSPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
