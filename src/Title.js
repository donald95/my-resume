
export function Title({ text, size = "50px" }) {
   return (
      <>
         <h1 style={{
            fontSize: `min(5vmin,  ${size})`,
            fontFamily: "Oswald",
            fontWeight: "normal",
            padding: 0,
            margin: 0
         }}>{text}</h1>
      </>
   )
}