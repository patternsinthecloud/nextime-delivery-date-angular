import { Component } from '@angular/core';
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
  [key: number]: {
    addresses: Address[];
    orders: Order[];
  };
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

  mockData: shippingData = {
    8: {
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
    4: {
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
    },
  };

  orderDates = [
    '2024-02-29',
    '2024-03-01',
    '2024-03-02',
    '2024-03-03',
    '2024-03-04',
    '2024-03-05',
    '2024-03-06',
  ];

  selectedAddress: Address | undefined;
  selectedOrder: Order | undefined;
  orderDate: string | undefined;
  selectedOrderDate: string | undefined;
  selectedDelivery: string | undefined;
  showOrderDate: string | undefined;
  deliveryDate: string | undefined;

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
      this.selectedDelivery = evt.detail?.shippingLine?.name;

      if (evt.detail?.shippingLine?.nextOrderDate) {
        const newOrderDate = moment
          .utc(evt.detail.shippingLine.nextOrderDate)
          .format('YYYY-MM-DD');

        if (!this.orderDates.includes(newOrderDate.toString())) {
          this.orderDates.push(newOrderDate);
        }
        this.orderDate = newOrderDate;
      }
    }
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
      this.orderDate = this.orderDates[0];
      this.selectedOrderDate = this.orderDate;
    });
  }
}
