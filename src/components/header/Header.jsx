import {array_icons,data} from "./header"
import "./header.css"
const Header = () => {
    return (<div className="header">
{array_icons.map((elem)=>{
    console.log(elem)
return (<>{elem.img_src}
{/* <p>{elem.desc}</p>
<p>{elem.__proto__.desc2}</p>
<p>{elem.__proto__.__proto__.desc3}</p>
<p>{elem.__proto__.__proto__.__proto__.desc4}</p> */}
<p>{elem.desc}</p>
<p>{elem.desc2}</p>
<p>{elem.desc3}</p>
<p>{elem.desc4}</p>
<p>{elem.desc5}</p>


</>

)
})}
{Array.from(data).map(({price,symbol})=>{
    return(<div className="crypto">
<div className="price">
    {price}
</div>

   
    <div className="symbol">
        {symbol}
    </div>
     </div>)
})}

    </div>  );
    
}
 
export default Header;