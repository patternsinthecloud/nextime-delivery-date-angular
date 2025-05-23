import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('AppComponent', () => {
  let paramMapSubject: BehaviorSubject<ParamMap>;
  let mockActivatedRoute: { paramMap: BehaviorSubject<ParamMap> };

  beforeEach(async () => {
    paramMapSubject = new BehaviorSubject<ParamMap>(
      convertToParamMap({ id: '1' })
    );
    mockActivatedRoute = {
      paramMap: paramMapSubject
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nextime-delivery-date-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nextime-delivery-date-angular');
  });

  it('should set siteId from route parameters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.componentInstance;
    expect(app.siteId).toEqual(1);

    paramMapSubject.next(convertToParamMap({ id: '2' }));
    expect(app.siteId).toEqual(2);
  });
});
