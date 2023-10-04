import React from 'react';
import './style.css';
import {ar} from './arr.js';
import {useState,useEffect,useRef} from 'react';

export default function App() {
 const [data,setData] = useState(ar);
 const [items,setItems] = useState([])
let af =  useRef([]);

 useEffect(()=>{
   const res = data.sort((a,b)=>{
     return a.kotTime.localeCompare(b.kotTime)
    
   })
   let array =[]
   res.map(ele=>{
     if(!array.includes(ele.kotTime)){
    array.push(ele.kotTime)
     }
   })
   let i=0;
   const ans1=[];
   while(i<array.length){
     let ans2=[]
    res.map(ele=>{
      if(array[i]==ele.kotTime){
        ans2.push(ele)
      }
    })
    ans1.push(ans2)
    i++;
    
   }
   console.log(ans1.length)
   for(let i=0;i<ans1.length;i++){
       af.current.push(ans1[i]);
       }
   console.log(af.current)
   
setItems(af.current)
  },[])
 console.log(items,"ehoo")
  return (
    <div>
      {items.map((ele,index,arr)=>{
        return(<div style={{border:"1px solid blue",display:"flex",gap:"1rem"}}>{
           ele.map(elel=>{return(
             <div >{elel.customerName}<br/>{elel.dish.name}<br/>{elel.kotTime}</div>)})
          }</div>)
      })}
      
    </div>
  );
}
