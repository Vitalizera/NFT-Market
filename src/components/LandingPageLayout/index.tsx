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
  },
  {
    id: 1,
    name: 'Mistery Box 2',
    price: '60 BUSD',
    busd_real_price: '60000000000000000000',
  },
  {
    id: 2,
    name: 'Mistery Box 3',
    price: '70 BUSD',
    busd_real_price: '70000000000000000000',
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
        />
      ))}
    </Container>
  );
}
