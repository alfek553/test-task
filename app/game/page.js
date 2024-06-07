import { notFound } from 'next/navigation';
//Components
import GameField from '@/components/GameField';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function LayoutsPage({ }) {




  return (
    <>
    <Header />
    
    <GameField

      pagePath="game"

    >

    </GameField>
    <Footer/>
    </>
  );
}
