import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipeComponent } from './built-in-pipe.component';

describe('BuiltInPipeComponent', () => {
  let component: BuiltInPipeComponent;
  let fixture: ComponentFixture<BuiltInPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuiltInPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
