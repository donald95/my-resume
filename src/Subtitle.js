
export function Subtitle({ text }) {
   return (
      <>
         <p style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "min(3.2vmin, 14px)",
            margin: "5px 0",
            color: "#b3124d",
            lineHeight: 1.2
         }}>{text}</p>
      </>
   )
}