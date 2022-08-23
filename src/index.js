import React from "react"
import ReactDom from "react-dom/client"
import { Page } from "./Page"
import { Section } from "./Section"
import { Title } from "./Title"
import { Detail } from "./Detail"
import { Subtitle } from "./Subtitle"
import { Listbox } from "./Listbox"
import { Datalist } from "./Datalist"
import { Info } from "./Info"
import { data } from "./data"
import "./Fonts.css"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>      
      <Page>
         <Info />
         <Section>
            <Title text={data[0].title[0]} className="main-title" />
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
   </React.StrictMode>
)