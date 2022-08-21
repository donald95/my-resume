import React from "react"
import ReactDom from "react-dom/client"
import { Page } from "./Page"
import { Section } from "./Section"
import { Title } from "./Title"
import { Detail } from "./Detail"
import { Subtitle } from "./Subtitle"
import { Listbox } from "./Listbox"
import { Datalist } from "./Datalist"
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
   },
   {
      id: 3,
      title: "RESPONSABILIDADES",
      items: [
         "Creación de productos de software para marketing y publicidad.",
         "Desarrollo de bases de datos, y establecimiento de servidores cloud para la empresa.",
         "Diseño de características y apariencia de las aplicaciones y productos de software.",
         "Mantenimiento de recursos gráficos para el rendimiento efectivo de los productos.",
         "Planeación de nuevos productos estratégicos.",
         "Soporte y mitigación de errores de los productos implantados."
      ]
   },
   {
      id: 4,
      title: "LOGROS CLAVES",
      items: [
         "Mejoramiento de eficiencia de mi equipo al aumentar la cantidad de funcionalidades terminadas por semana creando código más limpio y escalable utilizando patrones de diseños y programación  orientados a objetos en PHP.",
         "Aumento de performance de las aplicaciones reduciendo el peso de las imágenes de 600kb a 20kb sin reducir la calidad de las mismas.",
         `Incremento de clientes en un 5% que usaron la aplicación desarrollada “Distribuidora Reyes App”.`,
         `Resolución y mantenimiento de +30 errores encontrados en la aplicación “Distribuidora Reyes App”.`,
         "Integración de nuevas características dentro de los servicios cloud utilizando como proveedor Hostinet."
      ]
   },
   {
      id: 5,
      title: "PROYECTOS ACADÉMICOS",
      subtitle: "Proyecto Tesis: Sistema de Reporte en Materia de Investigación.",
      detail: "Agosto 2021 - Actualidad [Proyecto para: Universidad Nacional de Ingeniería - Consejo Nacional de Universidades]"
   },
   {
      id: 6,
      title: "RESPONSABILIDADES",
      items: [
         "Documentación del sistema utilizando ingeniería de software.",
         "Diseño e implementación de la base de datos del sistema.",
         "Diseño y desarrollo del frontend y backend del sistema.",
         "Creación de marcos de trabajo tanto para el frontend como para el backend.",
         "Formulación, evaluación y administración del proyecto.",
      ]
   },
   {
      id: 7,
      title: "LOGROS CLAVES",
      items: [
         "Documentación delDesarrollo de marco de trabajo frontend ui-bic utilizando los estándares web JS, CSS y HTML. sistema utilizando ingeniería de software.",
         "Desarrollo de marco de trabajo backend con PHP 8.1 y composer, utilizando PSR (Recomendaciones Estándar de PHP).",
         "Implementación de patrón de diseño Front Controller utilizado en Laravel.",
      ]
   },
   {
      id: 8,
      subtitle: "Marco de Trabajo Frontend UI-BIC.",
      detail: "Agosto 2021 - Actualidad [Página del trabajo: ui-bic.onrender.com]"
   },
   {
      id: 9,
      title: "RESPONSABILIDADES",
      items: [
         "Diseño de componentes del DOM.",
         "Desarrollo de componentes del DOM.",
         "Mantenimiento y refactorización de código de los componentes.",
         "Mantenimiento de la documentación del marco de trabajo.",
         "Incorporación de funcionalidades nuevas al marco de trabajo.",
         "Integración y despliegue de funcionalidades y documentación del marco de trabajo.",
      ]
   },
   {
      id: 10,
      title: "LOGROS CLAVES",
      items: [
         "Uso de programación modular en Javascript utilizando características ECMAScript avanzadas.",
         "Aumento de performance del sitio del marco de trabajo renderizando los componentes en 5.00 segundos en promedio utilizando refactorización de código.",
         "Diseño de componentes personalizados con buenas prácticas de experiencia de usuarios utilizando pruebas de usabilidad y accesibilidad.",
      ]
   },
   {
      id: 11,
      title: "HABILIDADES",
      items: [
         "Adaptabilidad", "Trabajo en equipo", "Pensamiento lógico/crítico", "Responsable", "Rápido aprendizaje",
         "Polivalente", "Honesto", "Solucionador de problemas", "Pensamiento abstracto", "Colaborador",
         "SQL", "PHP", "Java", "Javascript", "C#",
         "Golang", "Python", "Node JS", "React", "Svelt",
      ]
   },
   {
      id: 11,
      title: "EDUCACIÓN",
      subtitle: "Ingeniería de Sistemas, Universidad Nacional de Ingeniería.",
      detail: "Abril 2014 - Noviembre 2021 [Managua, Nicaragua]"
   },
   {
      id: 12,
      subtitle: "Operador de Computadora, Centro de Capacitación Comercial.",
      detail: "Enero 2012 - Mayo 2013 [Managua, Nicaragua]"
   },
   {
      id: 13,
      title: "IDIOMAS",
      detail: "Español Nativo."
   },
]

root.render(
   <>
      <Page>
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
         <Section>
            <Listbox title={data[2].title} items={data[2].items} />
            <Listbox title={data[3].title} items={data[3].items} />
         </Section>
         <Section>
            <Title text={data[4].title} size="15px" />
            <Subtitle text={data[4].subtitle} />
            <Detail text={data[4].detail} />
         </Section>
         <Section>
            <Listbox title={data[5].title} items={data[5].items} />
         </Section>
      </Page>
      <Page>
         <Section>
            <Listbox title={data[6].title} items={data[6].items} />
         </Section>
         <Section>
            <Subtitle text={data[7].subtitle} />
            <Detail text={data[7].detail} />
         </Section>
         <Section>
            <Listbox title={data[8].title} items={data[8].items} />
         </Section>
         <Section>
            <Listbox title={data[9].title} items={data[9].items} />
         </Section>
         <Section>
            <Title text={data[10].title} size="15px" />
            <Datalist items={data[10].items} />
         </Section>         
      </Page>
      <Page>
      <Section>
            <Title text={data[11].title} size="15px" />
            <Subtitle text={data[11].subtitle} />
            <Detail text={data[11].detail} />
         </Section>
         <Section>
            <Subtitle text={data[12].subtitle} />
            <Detail text={data[12].detail} />
         </Section>
         <Section>
            <Title text={data[13].title} size="15px" />
            <Detail text={data[13].detail} />
         </Section>
      </Page>
   </>
)