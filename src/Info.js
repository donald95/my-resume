
const infoStyle = {
   display: "flex",
   flexWrap: "wrap",
   gap: "2px 1vmin",
   fontFamily: "Roboto",
   fontWeight: "normal",
   fontSize: "10px",
   marginBottom: "5px",
}

export function Info() {
   return (
      <div style={infoStyle}>
         <span style={{ color: "#b3124d", }}>jdonaldmunguia@gmail.com</span><span>·</span>
         <span style={{ color: "#b3124d", }}>(+ 505) 7796 1765</span><span>·</span>
         <span style={{ color: "#b3124d", }}>linkedin.com/in/jdonaldmunguia</span><span>·</span>
         <span style={{ color: "#b3124d", }}>myresume-3q79.onrender.com</span><span>·</span>
         <span style={{ color: "#b3124d", }}>Managua, Nicaragua</span>
      </div>
   )
}