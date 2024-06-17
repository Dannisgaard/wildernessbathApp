import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSymbolsComponent } from './temperature-symbols.component';

describe('TemperatureSymbolsComponent', () => {
  let component: TemperatureSymbolsComponent;
  let fixture: ComponentFixture<TemperatureSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureSymbolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
