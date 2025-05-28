import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteComponent } from './site.component';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { RequestsDataService, SITES_DATA_SERVICE } from './data/requestData.service';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import * as moment from 'moment';
import { DateSuffix } from '../date-suffix.pipe';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;
  let paramMapSubject: BehaviorSubject<ParamMap>;
  let mockRequestsDataService: jasmine.SpyObj<RequestsDataService>;

  beforeEach(async () => {
    paramMapSubject = new BehaviorSubject<ParamMap>(
      convertToParamMap({ id: '1' })
    );

    mockRequestsDataService = jasmine.createSpyObj('RequestsDataService', ['getSiteRequestData']);
    mockRequestsDataService.getSiteRequestData.and.returnValue({
      addresses: [
        {
          street: '10 Sims Ave',
          city: 'Providence',
          state: 'RI',
          country: 'US',
          postalCode: '02909',
          name: 'Local Pickup at Farm Fresh Sims Market',
        }
      ],
      orders: [
        {
          orderId: '1001',
          items: [
            {
              id: 773779,
              productId: '4026',
              qty: 1,
              regularPrice: 12.5,
              salePrice: 15.75,
              imageUrl: 'assets/images/Green-Lemonade-1.jpg',
              title: 'Green Lemonade',
              description: 'Keep Refrigerated | Consume within 3 days of receiving',
            }
          ],
        }
      ]
    });

    await TestBed.configureTestingModule({
      declarations: [SiteComponent, DateSuffix],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        NgxJsonViewerModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: paramMapSubject } },
        { provide: SITES_DATA_SERVICE, useValue: mockRequestsDataService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    // Set date control explicitly
    component.date = new FormControl(new Date());
    fixture.detectChanges();
  });

  // Use isolated tests that don't require DOM rendering
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with data from service based on siteId', () => {
    expect(mockRequestsDataService.getSiteRequestData).toHaveBeenCalledWith(1);
    expect(component.selectedAddress).toBeDefined();
    expect(component.selectedOrder).toBeDefined();
    expect(component.selectedOrderDateForNextimeRequest).toBeDefined();
  });

  it('should update selectedOrderDateForNextimeRequest when processing date changes', () => {
    const mockEvent = {
      value: moment('2023-05-15')
    } as MatDatepickerInputEvent<moment.Moment, any>;

    component.handleProcessingDateChange(mockEvent);

    // Expect date to be the next day (May 16, 2023) in the format YYYY-MM-DD[T]HH:mm:ss[Z]
    expect(component.selectedOrderDateForNextimeRequest).toContain('2023-05-16');
  });

  it('should handle date updates from custom events', () => {
    const mockDetail = {
      date: '2023-05-19T00:00:00Z',
      deliveryDate: '2023-05-20T00:00:00Z',
      shippingLine: {
        name: 'Express Shipping',
        nextOrderDate: '2023-05-22T00:00:00Z',
        nextShippingDate: '2023-05-23T00:00:00Z',
        shippingCarrier: 1,
        shippingMethod: 'Express',
        total: 15.99
      }
    };

    const mockEvent = new CustomEvent('update', { detail: mockDetail });
    component.handleDateUpdate(mockEvent);

    expect(component.returnedObject).toEqual(mockDetail);
    expect(component.deliveryDate).toEqual('2023-05-20');
    expect(component.selectedDelivery).toEqual('Express');
  });

  it('should handle date updates with undefined deliveryDate', () => {
    const mockDetail = {
      date: '2023-05-19T00:00:00Z',
      shippingLine: {
        name: 'Express Shipping',
        nextOrderDate: '2023-05-22T00:00:00Z',
        nextShippingDate: '2023-05-23T00:00:00Z',
        shippingCarrier: 1,
        shippingMethod: 'Express',
        total: 15.99
      }
    };

    const mockEvent = new CustomEvent('update', { detail: mockDetail });
    component.handleDateUpdate(mockEvent);

    expect(component.returnedObject).toEqual(mockDetail);
    expect(component.deliveryDate).toBeUndefined();
    expect(component.selectedDelivery).toEqual('Express');
  });

  it('should toggle JSON view', () => {
    expect(component.showJson).toBeFalse();
    component.toggleJson();
    expect(component.showJson).toBeTrue();
    component.toggleJson();
    expect(component.showJson).toBeFalse();
  });

  it('should handle order date changes', () => {
    const mockEvent = {
      target: {
        value: '2023-05-18T12:00:00Z'
      }
    } as unknown as Event;

    component.handleOrderDateChange(mockEvent);
    expect(component.selectedOrderDateForNextimeRequest).toEqual('2023-05-18T12:00:00Z');
  });

  it('should calculate correct total for selected order', () => {
    // The mock order has one item with regularPrice 12.5 and qty 1
    expect(component.getTotal()).toEqual(12.5);

    // Update the selected order to have multiple items
    component.selectedOrder = {
      orderId: '1002',
      items: [
        { id: 1, productId: '1', qty: 2, regularPrice: 10, salePrice: 8, imageUrl: '', title: '', description: '' },
        { id: 2, productId: '2', qty: 1, regularPrice: 5, salePrice: 4, imageUrl: '', title: '', description: '' }
      ]
    };

    // Expect: (2 * 10) + (1 * 5) = 25
    expect(component.getTotal()).toEqual(25);
  });

  it('should handle getOlderDay method', () => {
    expect(component.getOlderDay(undefined)).toEqual('');
    expect(component.getOlderDay('2023-05-15T00:00:00Z')).toEqual('Sunday 14');
  });
});
