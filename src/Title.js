
export function Title({ text, size = "35px", className = "" }) {
   return (
      <>
         <h1 className={className} style={{
            fontSize: `${size}`,
            fontFamily: "Oswald",
            fontWeight: "normal",
            padding: 0,
            margin: 0
         }}>{text}</h1>
      </>
   )
}