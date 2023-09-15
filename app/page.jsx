import React from "react";
import Header from "../app/components/header/Header";
import style from "./page.module.css";
import Footer from "./components/footer/Footer";

export default function Home(){
    return (
        <div className={style.bg}>
          <Header />
          <Footer />
        </div>
    );
}