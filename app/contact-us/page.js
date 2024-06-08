import { notFound } from 'next/navigation';
//Components
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default async function LayoutsPage({

  }) {

  

  
    return (
      <>
      <ContactForm

        pagePath="Contact-Us"

      >

      </ContactForm>
      </>
    );
  }
  