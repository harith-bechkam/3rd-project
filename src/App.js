import React from "react";
import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

export default function App() {

    const[products,setProducts]=useState([
      {orderStage: 'new',orderName: 'order 1', orderId: 1, orderDate: '2020-11-17'},
      {orderStage: 'processing', orderName: 'order 2', orderId: 2, orderDate: '2021-1-10'},
      {orderStage: 'processing', orderName: 'order 3', orderId: 3, orderDate: '2020-10-17'},
      {orderStage: 'finished', orderName: 'order 4', orderId: 4, orderDate: '2020-11-17'},
      {orderStage: 'new', orderName: 'order 5', orderId: 5, orderDate: '2021-1-10'},
      {orderStage: 'new', orderName: 'order 6', orderId: 6, orderDate: '2020-11-16'},
      {orderStage: 'finished', orderName: 'order 7', orderId: 7, orderDate: '2021-1-5'},
      {orderStage: 'processing', orderName: 'order 8', orderId: 8, orderDate: '2021-1-5'},
      {orderStage: 'finished', orderName: 'order 9', orderId: 9, c: '2020-11-15'},
    ]);

//     const myall=({products})=>{
    
     
    
//        console.log('The link was clicked.');
// }
 const[selectedDate,setSelectedDate]=useState(null)
     
  return (
    
         <div className="App">
            
             <ul>
              {
                products.map(pObj=>(
               <li key={pObj.orderDate}>{pObj.orderStage},{pObj.orderName},{pObj.orderId},{pObj.orderDate}</li>
          )
          )
         }
      </ul>
      <h3>date picker</h3>
      <br/><br/>
           <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat='dd/mm/yyyy' filterDate={date=>date.getDay()!=6 && date.getDay()!=0}
           isClearable showYearDropdown scrollableMonthYearDropdown        
           />
         </div>
  )
}