
export function Detail({ text }) {
   return (
      <>
         <p style={{
            fontFamily: "Roboto",
            fontWeight: "normal",            
            fontSize: "min(3.2vmin, 12px)",
            margin: "5px 0",
            color: "#666666",
            lineHeight: 1.4,      
         }}>{text}</p>
      </>
   )
}