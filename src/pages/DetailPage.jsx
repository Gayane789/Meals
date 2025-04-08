import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getMealById} from '../api';

export function DetailPage() {
  
  const [meal, setMeal] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    getMealById(id).then(data=>{
      console.log(data.meals[0]);
      setMeal(data.meals[0]);
    })
  }, []);

  return (
    <div className="DetailPage p-8">
       <button onClick={()=>navigate(-1)} className=' bg-slate-800 text-white px-4 py-2'>GO BACK</button>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div>{meal.strArea}</div>
      <div>{meal.strCategory}</div>
      <div>{meal.strMeal}</div>
    </div>
  )
}
