import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoManyComponent } from './video-many.component';

describe('VideoManyComponent', () => {
  let component: VideoManyComponent;
  let fixture: ComponentFixture<VideoManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
