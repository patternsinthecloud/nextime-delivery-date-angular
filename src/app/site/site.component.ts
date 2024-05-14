import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

interface ShippingDetails {
  date: string;
  shippingLine: {
    name: string;
    nextOrderDate: string;
    nextShippingDate: string;
    shippingCarrier: number;
    shippingMethod: string;
    total: number;
  };
}

interface CustomEvent extends Event {
  detail: ShippingDetails;
}

interface Address {
  name?: string;
  street: string;
  street2?: string | null;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Item {
  id: number;
  productId: string;
  qty: number;
  regularPrice: number;
  salePrice: number;
  imageUrl: string;
  description: string;
  title: string;
}

interface Order {
  orderId: string;
  items: Item[];
}

interface shippingData {
  [key: number]: mockData
}

interface mockData {
  addresses: Address[];
  orders: Order[];
}

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent {
  siteId: number | undefined;
  returnedObject?: ShippingDetails;
  showJson = false;

  beautyLoopMockData: mockData = {
    addresses: [
      {
        street: '2108 S Lamar Blvd',
        city: 'Austin',
        state: 'TX',
        country: 'US',
        postalCode: '78704',
        name: '2108 S Lamar Blvd',
      },
    ],
    orders: [
      {
        orderId: '2002',
        items: [
          {
            id: 773779,
            productId: '11042',
            qty: 1,
            regularPrice: 81.0,
            salePrice: 76.95,
            imageUrl: 'assets/images/image6.png',
            title: 'BAMBOO Eau de Parfum 1 oz.',
            description:
              "Strong and graceful, one of GUCCI's most recognizable design signatures has defined references in today's GUCCI woman.",
          },
          {
            id: 946054,
            productId: '11015',
            qty: 1,
            regularPrice: 27.55,
            salePrice: 27.55,
            imageUrl: 'assets/images/image5.png',
            title: 'Le Labo Shampoo 8.5 oz',
            description:
              'A thick, rich, deeply nourishing shampoo. This plant-based formula is made with macadamia to repair.',
          },
        ],
      },
      {
        orderId: '2001',
        items: [
          {
            id: 804091,
            productId: '11042',
            qty: 1,
            regularPrice: 29.0,
            salePrice: 29.0,
            imageUrl: 'assets/images/image7.png',
            title: 'It Cosmetics Confidence in a Cleanser',
            description:
              'Suitable for all skin types, this is a revolutionary one-step, hydrating cleanser that melts away dirt, oil, and makeup.',
          },
          {
            id: 1029226,
            productId: '11048',
            qty: 1,
            regularPrice: 39.0,
            salePrice: 36.0,
            imageUrl: 'assets/images/image8.png',
            title: 'Anti-Aging Cleansing Gel 8.5 oz',
            description:
              'Helps to effectively detoxify the pores. Oil free and anti wrinkle technology.',
          },
        ],
      },
    ],
  };

  mockData: shippingData = {
    1: {
      addresses: [
        {
          name: 'Local Pickup at Farm Fresh Sims Market',
          street: '10 Sims Ave',
          street2: null,
          city: 'Providence',
          state: 'RI',
          postalCode: '02909',
          country: 'US',
        },
        {
          name: '5193 Old Post Rd',
          street: '5193 Old Post Rd',
          city: 'Charlestown',
          state: 'RI',
          country: 'US',
          postalCode: '06277',
        },
        {
          name: 'Local Pickup at Wayland Winter Market',
          street: '397 Boston Post Rd',
          city: 'Wayland',
          state: 'MA',
          country: 'US',
          postalCode: '02813',
        },
      ],
      orders: [
        {
          orderId: '1001',
          items: [
            {
              id: 571386,
              productId: '461150',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'assets/images/image3.png',
              title: 'Ritual Greens',
              description: 'Ritual Greens',
            },
            {
              id: 840998,
              productId: '426480',
              qty: 1,
              regularPrice: 20.0,
              salePrice: 20.0,
              imageUrl: 'assets/images/image2.png',
              title: 'Ritual Greens 2',
              description: 'Ritual Greens 2',
            },
            {
              id: 840999,
              productId: '4026',
              qty: 1,
              regularPrice: 10.49,
              salePrice: 10.49,
              imageUrl: 'assets/images/image.png',
              title: 'Ritual Greens 3',
              description: 'Ritual Greens',
            },
          ],
        },
        {
          orderId: '1002',
          items: [
            {
              id: 840999,
              productId: '4026',
              qty: 1,
              regularPrice: 10.49,
              salePrice: 10.49,
              imageUrl: 'assets/images/image3.png',
              title: 'Ritual  Green',
              description: 'Ritual Greens',
            },
          ],
        },
      ],
    },
    3: this.beautyLoopMockData,
    4: this.beautyLoopMockData,
    5: {
      addresses: [
        {
          name: "120 5th Avenue",
          street:"120 5th Avenue",
          city:"New York",
          state:"NY",
          country:"US",
          postalCode:"10011"
        },
      ],
      orders: [
        {
          orderId: '11493',
          items:[
            {
              id: 967275,
              productId:"46700115001661",
              qty:3,
              regularPrice:10,
              salePrice:9,
              imageUrl: 'assets/images/image3.png',
              title: 'Ritual Greens',
              description: 'Ritual Greens',
            }
         ],
        },
      ],
    },
    7: this.beautyLoopMockData,
  };

  selectedAddress: Address | undefined;
  selectedOrder: Order | undefined;
  orderDate: string | undefined;
  selectedOrderDate: string | undefined;
  selectedDelivery: string | undefined;
  showOrderDate: string | undefined;
  deliveryDate: string | undefined;
  date = new FormControl(new Date());
  apiReadonlyToken: string = 'a1sd34f4fg5';

  getOlderDay(date: string | undefined) {
    if (!date) return '';

    const newDate = moment.utc(date).subtract(1, 'd').format('dddd');

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
    this.selectedOrderDate = event.value?.format('YYYY-MM-DD');
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.siteId = +params.get('id')!;

      this.selectedAddress = this.mockData[this.siteId].addresses[0];
      this.selectedOrder = this.mockData[this.siteId].orders[0];
      this.selectedOrderDate = moment(this.date.value)
        .add('day')
        .format('YYYY-MM-DD');
    });
  }
}
