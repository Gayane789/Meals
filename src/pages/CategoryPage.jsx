import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {getFilteredCategory} from '../api';

export function CategoryPage() {

  const [meals, setMeals] = useState([]);
  const {name} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    getFilteredCategory(name).then(data=>{
      console.log(data.meals);
      setMeals(data.meals);
    })
  }, []);


  return (
    <div className='CategoryPage p-8'>

    <button onClick={()=>navigate(-1)} className=' bg-slate-800 text-white px-4 py-2'>GO BACK</button>

    <div className=' grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
        {
          meals.map(el=> <div 
              key={el.idMeal} 
              className='shadow p-2 cursor-pointer'
              onClick={()=> navigate('/meal/' + el.idMeal)}
            >
            <img src={el.strMealThumb} alt={el.strMeal} />
            <div className='text-center text-2xl font-bold'>{el.strMeal}</div>
          </div>)
        }
    </div>
    
    </div>
  )
}
