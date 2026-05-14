import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Inicio from './pages/inicio';
import './languages/i18n.js';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {  
  const { t } = useTranslation();
  const header = [t('header.title'), t('header.subtitle'), t('header.image')];

  return (
    <>
    <Header background="var(--primary)" image={header[2]} titleText={header[0]} subtitleText={header[1]} titleColor="var(--title)" subtitleColor="var(--subtitle)" />
    <Inicio />
    <Footer background="var(--primary)" dataKey="footer.infofooter" />  
    </>
  )
}

export default App
