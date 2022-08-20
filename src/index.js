import React from "react"
import ReactDom from "react-dom/client"
import { Page } from "./Page"
import { Content } from "./Content"
import { Section } from "./Section"
import { Title } from "./Title"
import { Detail } from "./Detail"
import { Subtitle } from "./Subtitle"
import "./Fonts.css"

const root = ReactDom.createRoot(document.getElementById('root'))

const data = [
   {
      id: 1,
      title: ["DONALD JOSÉ MUNGUÍA GUADAMUZ", "FULLSTACK DEVELOPER"],
      detail: `Creando y liberando productos de software escalables 
      de forma autónoma, a nivel acadeḿica y en empresa publicitaria. 
      Cumpliendo con la calidad y requerimientos técnicos. 
      Habilidad para el desarrollo creativo y orientado al rendimiento 
      dentro de equipos colaborativos.`
   },
   {
      id: 2,
      title: "EXPERIENCIA DE TRABAJO MÁS RECIENTES",
      subtitle: "Pasante Fullstack Developer en Century Creativa",
      detail: "Noviembre 2020 - Marzo 2021 [Managua, Nicaragua] [Servicios de Marketing, Comunicación y Publicidad]"
   }
]

root.render(
   <>
      <Page>
         <Content>
            <Section>
               <Title text={data[0].title[0]} />
               <Title text={data[0].title[1]} size="15px" />
               <Detail text={data[0].detail} />
            </Section>
            <Section>
               <Title text={data[1].title} size="15px" />
               <Subtitle text={data[1].subtitle} />
               <Detail text={data[1].detail} />
            </Section>
         </Content>
      </Page>
   </>
)