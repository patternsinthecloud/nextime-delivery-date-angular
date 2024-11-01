import { NextimeRequest } from 'src/app/models/nextimeRequest.dto';

export const flatRateRequestDemoData: NextimeRequest = {
  addresses: [
    {
      street: '5193 Old Post Rd',
      city: 'Charlestown',
      state: 'RI',
      country: 'US',
      postalCode: '06277',
      name: '5193 Old Post Rd',
    },
  ],
  orders: [
    {
      orderId: '2002',
      items: [
        {
          id: 773779,
          productId: '4026',
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
          productId: '426480',
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
          productId: '4026',
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
          productId: '426480',
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

export const gardenCupRequestDemoData: NextimeRequest = {
  addresses: [
    {
      street: '1002 E. 14th St',
      city: 'Chanute',
      state: 'KS',
      country: 'US',
      postalCode: '66720',
      name: '1002 E. 14th St, 66720',
    },
    {
      street: '630 Addison Ave W.',
      city: 'Twin Falls',
      state: 'ID',
      country: 'US',
      postalCode: '83301',
      name: '630 Addison Ave W., 83301',
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
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Southwest_2d706604-aeb2-453f-be82-5248647d7eaf_600x.jpg?v=1677718723',
          title: 'Southwest w/Fajita Chicken',
          description: 'Southwest w/Fajita Chicken',
        },
        {
          id: 123457,
          productId: '123457',
          qty: 1,
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
          qty: 1,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/files/AsianChoppedNoOranges_600x.png?v=1716476049',
          title: 'Asian Chopped w/Honey Garlic Chicken',
          description: 'Asian Chopped w/Honey Garlic Chicken',
        },
        {
          id: 123459,
          productId: '123459',
          qty: 1,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Caesar_6a58b52b-b05b-4a85-bb47-43b987a5fb35_600x.jpg?v=1677709305',
          title: 'Caesar w/Grilled Chicken',
          description: 'Caesar w/Grilled Chicken',
        },
        {
          id: 123460,
          productId: '123460',
          qty: 1,
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
          qty: 1,
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl:
            'https://gardencup.com/cdn/shop/products/OG-Caprese_fd051ca1-1a7b-4a26-b64a-fbf21334723a_600x.jpg?v=1677711665',
          title: 'Caprese w/Grilled Chicken',
          description: 'Caprese w/Grilled Chicken',
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
          regularPrice: 11.99,
          salePrice: 11.99,
          imageUrl: '',
          title: 'Ritual  Green',
          description: 'Ritual Greens',
        },
      ],
    },
  ],
};
