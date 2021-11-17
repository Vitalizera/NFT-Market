import React, { useEffect, useState } from 'react';
import { BuyNFT } from '../BuyNFT';

import { Container } from './styles';

interface NftItemsProps {
  id: number;
  name: string;
  url_image?: string;
  price: string;
  busd_real_price: string;
  // saodkasokdkodasokdoaksd
}
const items = [
  {
    id: 0,
    name: 'CAIXA SIMPLES',
    price: '50 BVIK',
    busd_real_price: '1000000000000000000',
    url_image: 'https://i.imgur.com/NEc9sRL.png',
  },
  {
    id: 1,
    name: 'Mistery Box 2',
    price: '60 BVIK',
    busd_real_price: '600000000000000000000',
    url_image: 'https://i.imgur.com/s5nQ6En.png',
  },
  {
    id: 2,
    name: 'Mistery Box 3',
    price: '70 BVIK',
    busd_real_price: '700000000000000000000',
    url_image: 'https://i.imgur.com/sylGvlC.png',
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
