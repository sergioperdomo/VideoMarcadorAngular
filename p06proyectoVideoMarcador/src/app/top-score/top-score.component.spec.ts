import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScoreComponent } from './top-score.component';

describe('TopScoreComponent', () => {
  let component: TopScoreComponent;
  let fixture: ComponentFixture<TopScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
