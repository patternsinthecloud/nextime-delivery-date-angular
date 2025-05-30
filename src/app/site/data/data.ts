import { NextimeRequest } from 'src/app/models/nextimeRequest.dto';

export const flatRateRequestDemoData: NextimeRequest = {
  addresses: [
    {
      street: '10 Sims Ave',
      city: 'Providence',
      state: 'RI',
      country: 'US',
      postalCode: '02909',
      name: 'Local Pickup at Farm Fresh Sims Market',
    },
    {
      street: '5193 Old Post Rd',
      city: 'Charlestown',
      state: 'RI',
      country: 'US',
      postalCode: '06277',
      name: '5193 Old Post Rd',
    },
    // {
    //   street: '397 Boston Post Rd',
    //   city: 'Wayland',
    //   state: 'MA',
    //   country: 'US',
    //   postalCode: '01778',
    //   name: 'Local Pickup at Wayland Winter Market',
    // },
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
        },
        {
          id: 946054,
          productId: '426480',
          qty: 1,
          regularPrice: 12.75,
          salePrice: 15.75,
          imageUrl: 'assets/images/orange-juice.jpg',
          title: 'Orange Juice',
          description:
            'Straight up Orange Juice! Nothing like the standard store-bought stuff.',
        },
        {
          id: 946054,
          productId: '426480',
          qty: 1,
          regularPrice: 12.55,
          salePrice: 15.55,
          imageUrl: 'assets/images/Get-Your-Glow-2.jpg',
          title: 'Get Your Glow',
          description: 'Keep Refrigerated | Consume within 3 days of receiving',
        },
      ],
    },
    {
      orderId: '1002',
      items: [
        {
          id: 773779,
          productId: '4026',
          qty: 1,
          regularPrice: 2.5,
          salePrice: 5.75,
          imageUrl: 'assets/images/Rise-and-Shine.jpg',
          title: 'From the Earth',
          description: '',
        },
      ],
    },
  ],
};

export const uspsRateRequestDemoData: NextimeRequest = flatRateRequestDemoData;

export const shipperHqRequestDemoData: NextimeRequest = {
  addresses: [
    {
      street: '3000 Reed Street',
      city: 'Wheat Ridge',
      state: 'CO',
      country: 'US',
      postalCode: '80033',
      name: '3000 Reed Street',
    },
  ],
  orders: [
    {
      orderId: '2001',
      items: [
        {
          id: 773779,
          productId: '4026',
          qty: 1,
          regularPrice: 27.0,
          salePrice: 29.0,
          imageUrl: 'assets/images/it-cosmetics.png',
          title: 'It Cosmetics Confidence in a Cleanser',
          description: '',
        },
        {
          id: 946054,
          productId: '122',
          qty: 1,
          regularPrice: 28.0,
          salePrice: 29.0,
          imageUrl: 'assets/images/anti-aging.png',
          title: 'Anti-Aging Cleasing Get 8.5 oz',
          description: '',
        },
      ],
    },
    {
      orderId: '2002',
      items: [
        {
          id: 773779,
          productId: '4026',
          qty: 1,
          regularPrice: 75.95,
          salePrice: 76.95,
          imageUrl: 'assets/images/bamboo.png',
          title: 'BAMBOO Eau de Parfum 1 oz.',
          description: '',
        },
        {
          id: 946054,
          productId: '122',
          qty: 1,
          regularPrice: 26.55,
          salePrice: 27.55,
          imageUrl: 'assets/images/le-labo.png',
          title: 'Le labo Shampoo 8.5 oz',
          description: '',
        },
      ],
    },
  ],
};

export const gardenCupRequestDemoData: NextimeRequest = {
  addresses: [
    {
      street: '123 Main St',
      city: 'Pittsburgh',
      state: 'PA',
      country: 'US',
      postalCode: '15000',
      name: '123 Main St',
    },
    {
      street: '456 Elm St',
      city: 'Anchorage',
      state: 'AK',
      country: 'US',
      postalCode: '00500',
      name: '456 Elm St',
    },
    {
      street: '789 Maple Ave',
      city: 'American Fork',
      state: 'UT',
      country: 'US',
      postalCode: '84003',
      name: '789 Maple Ave',
    },
    {
      street: '101 Oak Dr',
      city: 'Flagstaff',
      state: 'AZ',
      country: 'US',
      postalCode: '86001',
      name: '101 Oak Dr',
    },
    {
      street: '202 Pine Ln',
      city: 'Twin Falls',
      state: 'ID',
      country: 'US',
      postalCode: '83301',
      name: '202 Pine Ln',
    },
    {
      street: '303 Birch Rd',
      city: 'Chanute',
      state: 'KS',
      country: 'US',
      postalCode: '66710',
      name: '303 Birch Rd',
    },
    {
      street: '404 Cedar St',
      city: 'Columbia',
      state: 'SC',
      country: 'US',
      postalCode: '29002',
      name: '404 Cedar St',
    },
    {
      street: '505 Spruce Way',
      city: 'Edgartown',
      state: 'MA',
      country: 'US',
      postalCode: '02535',
      name: '505 Spruce Way',
    },
    {
      street: '606 Aspen Blvd',
      city: 'Asheville',
      state: 'NC',
      country: 'US',
      postalCode: '28702',
      name: '606 Aspen Blvd',
    },
    {
      street: '707 Chestnut Ct',
      city: 'Agawam',
      state: 'MA',
      country: 'US',
      postalCode: '01001',
      name: '707 Chestnut Ct',
    },
    {
      street: '808 Walnut Cir',
      city: 'Edmond',
      state: 'OK',
      country: 'US',
      postalCode: '73003',
      name: '808 Walnut Cir',
    },
    {
      street: '909 Cypress Pl',
      city: 'Advance',
      state: 'NC',
      country: 'US',
      postalCode: '27014',
      name: '909 Cypress Pl',
    },
  ],
  orders: [
    {
      orderId: '1001',
      items: [
        {
          id: 123456,
          productId: '123456',
          qty: 2,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Southwest_2d706604-aeb2-453f-be82-5248647d7eaf_600x.jpg?v=1677718723',
          title: 'Southwest w/Fajita Chicken',
          description: 'Southwest w/Fajita Chicken',
        },
        {
          id: 123457,
          productId: '123457',
          qty: 2,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Cobb_600x.jpg?v=1673581686',
          title: 'Chicken Bacon Cobb',
          description: 'Chicken Bacon Cobb',
        },
        {
          id: 123458,
          productId: '123458',
          qty: 2,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/files/AsianChoppedNoOranges_600x.png?v=1716476049',
          title: 'Asian Chopped w/Honey Garlic Chicken',
          description: 'Asian Chopped w/Honey Garlic Chicken',
        },
      ],
    },
    {
      orderId: '1001',
      items: [
        {
          id: 123460,
          productId: '123460',
          qty: 4,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Medi_836bfa21-1229-4ff6-b9d4-1d3dc863c818_600x.jpg?v=1677717918',
          title: 'Mediterranean w/Grilled Chicken',
          description: 'Mediterranean w/Grilled Chicken',
        },
        {
          id: 123461,
          productId: '123461',
          qty: 2,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Caprese_fd051ca1-1a7b-4a26-b64a-fbf21334723a_600x.jpg?v=1677711665',
          title: 'Caprese w/Grilled Chicken',
          description: 'Caprese w/Grilled Chicken',
        },
      ],
    },
  ],
};
