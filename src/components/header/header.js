import img1 from "./img/img1.svg"
import img2 from "./img/img2.svg"
import img3 from "./img/img3.svg"
import img4 from "./img/img4.svg"
import img5 from "./img/img5.svg"
import img6 from "./img/img6.svg"
import {MdAccountCircle} from "react-icons/md"
import {MdProductionQuantityLimits} from "react-icons/md"
import {BsFillGeoAltFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc" 
import {BiSearchAlt} from "react-icons/bi"
import {BiCategoryAlt} from "react-icons/bi"
let sky={
    "desc12":"colors"
}
let cloud={
    "desc11":"transparency",
    __proto__:sky
}
let rain={
    "desc10":"precipitation",
    __proto__:cloud
}
let animals={
    "desc8":"weight",
    "desc9":"height",
    __proto__:rain
}
let people={
    "desc6":"weight",
    "desc7":"height",
    __proto__:animals
}

let great_grandFather={
    "desc4":"hello", 
    "desc5":"Hello grandMother"
    
}
let grandFather={
    "desc3":"Hello grandFather",
    __proto__:great_grandFather
}
let father={
    "desc2":"Hello world",
    __proto__:grandFather
}
let array_icons=[
{"img_src":<MdAccountCircle/>,
"desc": "Account",__proto__:father},

{"img_src":<MdProductionQuantityLimits/>,
"desc":"Product",__proto__:father},
{"img_src":<BsFillGeoAltFill/>,
"desc":"Geo",__proto__:father},
{"img_src":<FcLike/>,
"desc":"Like",__proto__:father},
{"img_src":<BiSearchAlt/>,
"desc":"Search",__proto__:father},
{"img_src":<BiCategoryAlt/>,
"desc":"Category",__proto__:father}

]
let like_descriptor = array_icons[3]
let like_desc=Object.getOwnPropertyDescriptor(like_descriptor,"desc")
console.log(like_desc)
console.log(array_icons)
Object.defineProperty(like_descriptor,"desc",{
  
    enumerable:true
})
for (let key in like_descriptor) {
     console.log(key)   
    }
let data=null;

like_descriptor.desc="DisLike"
console.log(like_descriptor)
let jsonString=JSON.stringify(array_icons,null,0)
let arrayObj=JSON.parse(jsonString)
console.log(arrayObj)
console.log(jsonString)
setInterval(function() {
  
},1000)
let getDataBinance=await fetch("https://api.binance.com/api/v3/ticker/price")
console.log(getDataBinance)
if(getDataBinance.ok)
{console.log(getDataBinance)
 data=await getDataBinance.json();
console.log(data)
let strData=JSON.stringify(data,null,4)
console.log(strData)
}

// let count=0
// setTimeout(()=>
// {
//     console.log("Hello")
//     setTimeout(()=>{
//         console.log("goodbay")
//     },
//     5000
//     )
//     console.log("Maxim")
// },
// 7000
// )
// console.log("Pasha")
// let count=0
// setInterval( async ()=>{
// let data_From_site=await fetch("http://universities.hipolabs.com/search?country=")
// if(data_From_site.ok){
// let json_from_site=data_From_site.json()
// console.log(json_from_site)}
// }
// , 4000)
// console.log("Hello")
let count=0

setInterval(()=>{

    let req=new Promise((resolve,reject)=>{
    setTimeout( async()=>{
        let data_json=await fetch("http://universities.hipolabs.com/search?country=")
   console.log("get data")
   
   resolve(data_json.json())
    },3000)
})
req.then((res)=>{
    console.log("then")
    console.log(res)
    return new Promise((resolve,re)=>{
setTimeout(()=>{
    console.log("first element")
    resolve(res[count])
},5000)

    }) 
})
.then((res)=>{
    console.log(res)
    return new Promise((resolve,re)=>{
        setTimeout(()=>{
            let info_country=res.web_pages
            console.log("web_pages")
            resolve(info_country)
        },5000
        )
    })
})
.then((itog)=>{
    console.log(itog)
    let itog_link=itog[0]
    console.log(itog_link)
    count++
})
},20000)

export {array_icons,data}