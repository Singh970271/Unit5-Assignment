import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
 

    // Create add and remove functions here that changes the
    // state.
   
    
    const HandleBooks=(value)=>{ 
      setInv(inv => {
        return {...inv, books:inv.books+value}
      });
    }

    const HandlePens=(value)=>{
      setInv(inv => {
        return {...inv, pens:inv.pens+value}
      });
    }
    const HandleNotebooks=(value)=>{
      setInv(inv => {
        return {...inv, notebooks:inv.notebooks+value}
      });
    }
   
    // const HandleTotal=()=> {
    //   setTotal(total)
    // }
    const HandleTotal=()=>{
        let sum=inv.books + inv.pens + inv.notebooks
        return <h3>Total: {inv.books>=0 && inv.pens >=0 && inv.notebooks>=0  ? sum: null}</h3>
    }

   
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton"  onClick={()=>HandleBooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>HandleBooks(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>HandleNotebooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>HandleNotebooks(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>HandlePens(1)}>+</button>
        <button className="circlularButton" onClick={()=>HandlePens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" >+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
     
           <h2>
              <HandleTotal/>
           </h2>
    
    </div>
  );
};