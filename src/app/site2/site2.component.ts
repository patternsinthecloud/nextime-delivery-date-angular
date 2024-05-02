import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
}

interface Order {
  OrderId: number;
  shippingAddress: object;
  items: Item[];
}

@Component({
  selector: 'app-site2',
  templateUrl: './site2.component.html',
})
export class Site2Component {

  addresses: Address[] = [
    {
      name: '10 Sims Ave',
      street: '10 Sims Ave',
      street2: null,
      city: 'Providence',
      state: 'RI',
      postalCode: '02909',
      country: 'US',
    },
    {
      name: '289 Buxton Street',

      street: '289 Buxton Street',
      city: 'North Smithfield',
      state: 'RI',
      country: 'US',
      postalCode: '06277',
    },
    {
      name: '8 Conifer Court',
      street: '8 Conifer Court',
      city: 'Coventry',
      state: 'RI',
      country: 'US',
      postalCode: '02816',
    },
  ];

  orders: Order[] = [
    {
      OrderId: 641390,
      shippingAddress: {},
      items: [
        {
          id: 986006,
          productId: '6312',
          qty: 1,
          regularPrice: 31.0,
          salePrice: 26.35,
        },
        {
          id: 986007,
          productId: '4007',
          qty: 1,
          regularPrice: 10.75,
          salePrice: 9.14,
        },
        {
          id: 986008,
          productId: '505966',
          qty: 1,
          regularPrice: 6.0,
          salePrice: 5.1,
        },
        {
          id: 986009,
          productId: '474162',
          qty: 2,
          regularPrice: 8.75,
          salePrice: 7.44,
        },
      ],
    },
    {
      OrderId: 245299,
      shippingAddress: {},
      items: [
        {
          id: 571386,
          productId: '6312',
          qty: 1,
          regularPrice: 31.0,
          salePrice: 26.35,
        },
        {
          id: 840998,
          productId: '4147',
          qty: 2,
          regularPrice: 10.75,
          salePrice: 9.14,
        },
        {
          id: 840999,
          productId: '4007',
          qty: 2,
          regularPrice: 10.75,
          salePrice: 9.14,
        },
        {
          id: 891685,
          productId: '512905',
          qty: 1,
          regularPrice: 11.5,
          salePrice: 9.77,
        },
      ],
    },
    {
      OrderId: 245299,
      shippingAddress: {},
      items: [
        {
          id: 571386,
          productId: '6312',
          qty: 1,
          regularPrice: 31.0,
          salePrice: 26.35,
        },
        {
          id: 840998,
          productId: '4147',
          qty: 2,
          regularPrice: 10.75,
          salePrice: 9.14,
        },
        {
          id: 840999,
          productId: '4007',
          qty: 2,
          regularPrice: 10.75,
          salePrice: 9.14,
        },
        {
          id: 891685,
          productId: '512905',
          qty: 1,
          regularPrice: 11.5,
          salePrice: 9.77,
        },
      ],
    },
  ];

  deliveryDates = [
    '2024-02-22',
    '2024-02-25',
    '2024-02-27',
    '2024-02-28',
    '2024-02-29',
  ];

  selectedAddress: Address | undefined;
  selectedOrder: Order | undefined;
  selectedDeliveryDate: string | undefined;
  siteId: number | undefined;
  apiReadonlyToken: string = 'a1sd34f4fg5';

  updateShippingAddress(address: string) {
    this.selectedAddress = JSON.parse(address);
  }

  updateOrder(order: string) {
    this.selectedOrder = JSON.parse(order);
  }

  updateDeliveryDate(date: string) {
    this.selectedDeliveryDate = date;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.siteId = +params.get('id')!;
    });
  }
}
