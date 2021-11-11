import React, { useEffect, useState } from 'react';
import { BuyNFT } from '../BuyNFT';

import { Container } from './styles';

interface NftItemsProps {
  id: number;
  name: string;
  url_image?: string;
  price: string;
  busd_real_price: string;
}
const items = [
  {
    id: 0,
    name: 'Mistery Box 1',
    price: '50 BUSD',
    busd_real_price: '50000000000000000000',
    //url_image: 'https://i.imgur.com/UBnMor3.jpeg',
  },
  {
    id: 1,
    name: 'Mistery Box 2',
    price: '60 BUSD',
    busd_real_price: '60000000000000000000',
    //url_image: 'https://i.imgur.com/UBnMor3.jpeg',
  },
  {
    id: 2,
    name: 'Mistery Box 3',
    price: '70 BUSD',
    busd_real_price: '70000000000000000000',
    //url_image: 'https://i.imgur.com/LhjJ7he.jpeg',
  },
  {
    id: 3,
    name: 'Mistery Box 4',
    price: '80 BUSD',
    busd_real_price: '80000000000000000000',
    //url_image: 'https://i.imgur.com/UBnMor3.jpeg',
  },
];

export function LandingPageLayout() {
  const [nftItems, setNftItems] = useState<NftItemsProps[]>([]);
  useEffect(() => {
    setNftItems(items);
  }, []);
  return (
    <Container>
      {nftItems.map((item) => (
        <BuyNFT
          id={item.id.toString()}
          key={item.id}
          name={item.name}
          price={item.price}
          busd_real_price={item.busd_real_price}
          url_image={item.url_image}
        />
      ))}
    </Container>
  );
}
