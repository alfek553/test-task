import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameField from "@/components/GameField";
import Initial from "@/components/Initial";
export default function Home() {

  
  return (
    <>
    {/* <Header /> */}


      <Initial pagePath={"/"} />


    </>
   
  );
}
