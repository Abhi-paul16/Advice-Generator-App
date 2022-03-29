import axios from 'axios';
import React,{useState , useEffect} from 'react';
import './Card.css';
import patterndivider from '../images/pattern-divider-desktop.svg';
import Dice from '../images/icon-dice.svg';
const Card = ()=> {
  

  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((res) => {
      setAdvice(res.data.slip.advice);
        setId(res.data.slip.id)
    }
      )
  });
  const [id , setId] = useState('');
  const [advice,setAdvice] = useState("");

  const changeAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((res) => {
      setAdvice(res.data.slip.advice);
        setId(res.data.slip.id)
    }
      )
  }
  return (
    <div className='Card'>
      <div className="Card-heading">Advice #{id} </div>
      <p>{advice}</p> 
      <img className='pt-divider' src={patterndivider} alt="Pattern-Divider" />
      <div className='Dice-div'>

      <img  className='Dice' src={Dice} alt="Dice" onClick={changeAdvice} />
      </div>
    </div>
  )
}

export default Card;