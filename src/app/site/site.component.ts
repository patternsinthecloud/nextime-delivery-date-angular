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
    1: this.beautyLoopMockData,
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
    13: {
      addresses: [
        {
          street: "1002 E. 14th St",
          city: "Chanute",
          state: "KS",
          country: "US",
          postalCode: "66720",
          name: "1002 E. 14th St, 66720"
        },
        {
          street: "630 Addison Ave W.",
          city: "Twin Falls",
          state: "ID",
          country: "US",
          postalCode: "83301",
          name: "630 Addison Ave W., 83301"
        },
      ],
      orders: [
        {
          orderId: '1001',
          items: [
            {
              id: 123456,
              productId: '123456',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/products/OG-Southwest_2d706604-aeb2-453f-be82-5248647d7eaf_600x.jpg?v=1677718723',
              title: 'Southwest w/Fajita Chicken',
              description: 'Southwest w/Fajita Chicken',
            },
            {
              id: 123457,
              productId: '123457',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/products/OG-Cobb_600x.jpg?v=1673581686',
              title: 'Chicken Bacon Cobb',
              description: 'Chicken Bacon Cobb',
            },
            {
              id: 123458,
              productId: '123458',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/files/AsianChoppedNoOranges_600x.png?v=1716476049',
              title: 'Asian Chopped w/Honey Garlic Chicken',
              description: 'Asian Chopped w/Honey Garlic Chicken',
            },
            {
              id: 123459,
              productId: '123459',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/products/OG-Caesar_6a58b52b-b05b-4a85-bb47-43b987a5fb35_600x.jpg?v=1677709305',
              title: 'Caesar w/Grilled Chicken',
              description: 'Caesar w/Grilled Chicken',
            },
            {
              id: 123460,
              productId: '123460',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/products/OG-Medi_836bfa21-1229-4ff6-b9d4-1d3dc863c818_600x.jpg?v=1677717918',
              title: 'Mediterranean w/Grilled Chicken',
              description: 'Mediterranean w/Grilled Chicken',
            },
            {
              id: 123461,
              productId: '123461',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: 'https://gardencup.com/cdn/shop/products/OG-Caprese_fd051ca1-1a7b-4a26-b64a-fbf21334723a_600x.jpg?v=1677711665',
              title: 'Caprese w/Grilled Chicken',
              description: 'Caprese w/Grilled Chicken',
            }
          ],
        },
        {
          orderId: '1002',
          items: [
            {
              id: 840999,
              productId: '4026',
              qty: 1,
              regularPrice: 11.99,
              salePrice: 11.99,
              imageUrl: '',
              title: 'Ritual  Green',
              description: 'Ritual Greens',
            },
          ],
        },
      ],
    },
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.siteId = +params.get('id')!;

      this.selectedAddress = this.mockData[this.siteId].addresses[0];
      this.selectedOrder = this.mockData[this.siteId].orders[0];
      this.selectedOrderDate = moment(this.date.value)
        .add('day')
        .format('YYYY-MM-DD[T]HH:mm:ss[Z]');
      });
  }
}
