import { useState, useEffect } from "react"
import {getAllCategories} from '../api';
import { useNavigate } from "react-router-dom";

export function HomePage() {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  
  useEffect(()=>{
    getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
    });
  }, []);


  return (
    <div className="HomePage">
      
      <div className=" grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        {
          categories.map(el=> <div key={el.idCategory} className=' text-center shadow p-2'>
              <img src={el.strCategoryThumb} alt={el.strCategory} className='w-full' />
              <div className=" font-bold text-2xl">{el.strCategory}</div>
              <div>{el.strCategoryDescription.length > 100 ? el.strCategoryDescription.slice(0, 100)+'...' :  el.strCategoryDescription}</div>
              <button 
                className=" bg-gray-800 text-white px-4 py-2 m-4" 
                onClick={()=> navigate('/category/' + el.strCategory)}
              >
                Detail {el.strCategory}...
              </button>
          </div>)
        }
      </div>

    </div>
  )
}
