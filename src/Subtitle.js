
export function Subtitle({ text }) {
   return (
      <>
         <p style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "14px",
            margin: "5px 0",
            color: "#b3124d",
            lineHeight: 1.2
         }}>{text}</p>
      </>
   )
}