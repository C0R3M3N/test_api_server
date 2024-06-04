

export function Food(props) {

   const k = props.ingredients
   return(
      <div>
         {props.title}
         {props.text}
         <h4>{props.name}</h4>
            <h6>{k && k.map(i => <p key={i}>{i}</p>)}</h6>
            <hr/>
      </div>
   )
}