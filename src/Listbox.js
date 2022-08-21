
export function Listbox({ title, items = [] }) {
   return (
      <>
         <h3 style={{
            color: "#666666",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "min(3.2vmin, 13px)"
         }}>{title}</h3>
         <ul style={{
            fontFamily: "Roboto",
            fontWeight: "normal",
            fontSize: "min(3.2vmin, 12px)",
            margin: "5px 0",            
            lineHeight: 1.4,
         }}>
            {items.map((item, index) => <li key={index} style={{
               color: "#666666",
            }}>{item}</li>)}
         </ul>
      </>
   )
}