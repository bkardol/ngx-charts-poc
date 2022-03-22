import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { BarVertical2DComponent, BarVerticalComponent } from '@swimlane/ngx-charts';
import { MockComponent } from 'ng-mocks';

import { GraphComponent } from './graph.component';

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GraphComponent,
        MockComponent(FaIconComponent),
        MockComponent(BarVerticalComponent),
        MockComponent(BarVertical2DComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
