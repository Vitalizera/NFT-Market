import React, { useState } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import busd_abi from '../../busd_abi.json';
import { Container, NFTCard } from './styles';
import MisteryBoxImage from "../assets/D_NQ_NP_685253-MLB46765702054_072021-O.jpg";

const web3 = new Web3(Web3.givenProvider);

const busdContractAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const totalToTransfer = '50000000000000000000';

export function BuyNFT() {

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
            totalToTransfer
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
    <Container>
      <NFTCard>
        <img src={MisteryBoxImage} alt='mistery_box' />
        <h1>Mistery Box</h1>
      </NFTCard>
      <button onClick={ethEnabled}>Price: 50 BUSD</button>
    </Container>
  );
}
