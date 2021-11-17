import React from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import busd_abi from '../../busd_abi.json';
import { Container, NFTCard } from './styles';
// import MisteryBoxImage from '../../assets/caixa.jpg';

interface BuyNFTProps {
  id: string;
  name: string;
  url_image?: string;
  price: string;
  busd_real_price: string;
}
const web3 = new Web3(Web3.givenProvider);

// vendo em qual altera essa desgraca

const busdContractAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
// // const totalToTransfer = '50000000000000000000';

export function BuyNFT({ name, price, url_image, id, busd_real_price }: BuyNFTProps) {
  const ethEnabled = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      const metamaskAccount = await window.ethereum.send('eth_requestAccounts');
      const busdContract = new web3.eth.Contract(
        busd_abi as AbiItem[],
        busdContractAddress
      );

      try {
        await busdContract.methods
          .transfer(
            '0x4C486eD00E15e498640512c15Ccd9e06B3682Bd6',
            busd_real_price
          )
          .send({
            from: await metamaskAccount.result[0],
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container id={id}> 
      <NFTCard>
        <img src={url_image} alt="mistery_box" />
        <h1>{name}</h1>
      </NFTCard>
      <button onClick={ethEnabled}>{price}</button>
    </Container>
  );
}
