export function Datalist({ items }) {
   return (
      <ul style={{
         columns: "4 auto",
         columnGap: "30px",
         fontFamily: "Roboto",
         fontWeight: "normal",
         fontSize: "12px",
         margin: "5px 0",
         lineHeight: 1.4,
      }}>
         {items.map((item, index) => <li key={index} style={{
            color: "#666666",
         }}>{item}</li>)}
      </ul>
   )
}