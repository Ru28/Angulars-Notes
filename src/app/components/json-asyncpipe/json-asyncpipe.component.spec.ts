import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAsyncpipeComponent } from './json-asyncpipe.component';

describe('JsonAsyncpipeComponent', () => {
  let component: JsonAsyncpipeComponent;
  let fixture: ComponentFixture<JsonAsyncpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonAsyncpipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonAsyncpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
