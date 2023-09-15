import React from 'react';
import Local from '../components/local/local';
import { Header } from '../components/header/Header';
const Homer = () => {
    return (
     <div>
        <Header />
      <div>
        <Local pa= 'Nome: ' span={"bg"}/>
        <Local pa= 'Idade: ' span={"23"}/>
        <Local pa= 'CPF: ' span={"34223432432"}/>
  
      </div>
     </div>
    )
}
export default Homer;