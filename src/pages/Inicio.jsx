import { useEffect } from "react"
import ImageCard from "../components/image-card/ImageCard"
import { useTranslation } from 'react-i18next';
import './inicio-styles.css'

const Inicio = () => {
  const { t } = useTranslation();
  const data1 = "cards.card1";
  const data2 = "cards.card2";

  useEffect(() => {
    document.title = 'web-ideas'
  }, [])

  return (
    
    <div className="init">     
      
      <ImageCard datakey="cards.card1" titleKey="cards.title1" image="cards.image1"/>      
      <ImageCard datakey={data2} titleKey="cards.title2" image="cards.image2"/>
           
    </div>
  )
}
export default Inicio
