import { useEffect } from "react";
import { useState } from "react"
import Recipeitem from "../Rcipeitem/Recipeitem";

import PropTypes from 'prop-types';
export default function Recipeitems({handleItemClick}) {
    const [recipeitems,setRecipeitems] = useState([]);
    useEffect(()=>{
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setRecipeitems(data))
    },[])
  return (
    <div className="grid grid-cols-3 w-[70%] gap-y-40">
      
      {recipeitems.map((recipeitem,idx) =><Recipeitem   handleItemClick={handleItemClick} key={idx} recipeitem={recipeitem}></Recipeitem> )}
    </div>
  )
}


Recipeitems.propTypes = {
  handleItemClick: PropTypes.func.isRequired // Define PropTypes for handleItemClick
};
