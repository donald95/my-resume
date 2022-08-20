import "./Page.css"
export function Page(props) {
   return (
      <div className="Page-main">
         {props.children}
      </div>
   )
}