import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Item = ({prod}) =>{

  const navigate =useNavigate();
  const handleNavigate=()=>{
    navigate(`/detail/${prod.id}`);
  }

  return (
    <div className="card product--card col-xl-2 col-lg-4 col-md-5 col-sm-5 col-10">
        <img className="card-img-bottom" src={prod.img} alt="producto"/>
        <div className="card-body">
            <p className="card-text">{prod.title}</p>
            <h3 className="card-title">$ {prod.price}</h3>
            {prod.stock<=0 && <p className='sinStock'>Sin stock</p>}
            <span  className="btn card-btn btn-primary btn_buy" id={prod.id} onClick={handleNavigate}>Ver más</span>
        </div>
    </div>
  )
}

export default Item
