import * as moment from 'moment';
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { ShippingDetails } from '../models/shippingDetails.dto';
import { Address } from '../models/address.dto';
import { Order } from '../models/order.dto';
import {
  RequestsDataService,
  SITES_DATA_SERVICE,
} from './data/requestData.service';
import { NextimeRequest } from '../models/nextimeRequest.dto';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent {
  siteId: number | undefined;
  returnedObject?: ShippingDetails;
  showJson = false;
  selectedAddress: Address | undefined;
  selectedOrder: Order | undefined;
  selectedOrderDate: string | undefined;
  selectedDelivery: string | undefined;
  deliveryDate: string | undefined;
  date = new FormControl(new Date());
  sitesData: NextimeRequest = { addresses: [], orders: [] };

  constructor(
    private route: ActivatedRoute,
    @Inject(SITES_DATA_SERVICE)
    private dataService: RequestsDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.siteId = +params.get('id')!;
      this.sitesData = this.dataService.getSiteRequestData(this.siteId);

      this.selectedAddress = this.sitesData.addresses[0];
      this.selectedOrder = this.sitesData.orders[0];
      this.selectedOrderDate = moment(this.date.value)
        .add('day')
        .format('YYYY-MM-DD[T]HH:mm:ss[Z]');
    });
  }

  getOlderDay(date: string | undefined) {
    if (!date) return '';
    const newDate = moment.utc(date).subtract(1, 'd').format('dddd DD');
    return newDate;
  }

  handleDateUpdate(evt: CustomEvent | Event) {
    if (evt instanceof CustomEvent) {
      this.returnedObject = evt.detail;
      if (evt.detail.deliveryDate) {
        this.deliveryDate = moment
          .utc(evt.detail.deliveryDate)
          .format('YYYY-MM-DD');
      } else {
        this.deliveryDate = undefined;
      }
      this.selectedDelivery = evt.detail?.shippingLine?.shippingMethod;
    }
  }

  handleProcessingDateChange(
    event: MatDatepickerInputEvent<moment.Moment, any>
  ) {
    this.selectedOrderDate = event.value?.format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  }

  toggleJson() {
    this.showJson = !this.showJson;
  }

  handleOrderDateChange(event: Event) {
    this.selectedOrderDate = (event.target as HTMLInputElement).value;
  }

  getTotal(): number {
    return this.selectedOrder
      ? this.selectedOrder.items.reduce((a, b) => a + b.regularPrice * b.qty, 0)
      : 0;
  }
}
