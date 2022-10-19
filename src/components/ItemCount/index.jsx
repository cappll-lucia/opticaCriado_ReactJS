import React from 'react';
import {useState} from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import './styles.scss';



const ItemCount = ({stock, initial, onAdd}) => {

    const [count, SetCount]=useState(initial);

    const handleAdd=()=>{
        if(count<stock){
            SetCount(count+1);
        }else{
            alert(`Sólo quedan ${stock} unidades disponibles`); //pasarla a swet alert
        }
    }

    const handleRest=()=>{
        SetCount(count-1);
    }

    const addCart=()=>{
        let priceText = document.getElementById('ItemDetailPrice');
        priceText.hidden=true;
        onAdd(count);
        SetCount(initial);
    }

  return (
    <div id='itemCount'>
        {stock>0
        ? 
        <div>
            <div id='counter'>
                <span className='btnItemCount' style={{'border-right' : 'solid  #1a217c 2px'}} onClick={handleRest}>-</span>
                <span className='spnQuantity' >{count}</span>
                <span className='btnItemCount' style={{'border-left' : 'solid  #1a217c 2px'}} onClick={handleAdd}>+</span>
            </div>
            <button className='btnAgregar' onClick={addCart}>Agregar   <BsFillCartFill style={{'color':'#fff'}}/> </button>
        </div>
        :
        <span className='spanNoStock' style={{'width':'40rem', 'font-size':'1.2rem', 'color':'red'}}>Disculpe, No hay stock suficiente de este producto.</span>
    }
    </div>
    )
}

export default ItemCount