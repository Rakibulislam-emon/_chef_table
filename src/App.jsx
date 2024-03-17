
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cooks from './Components/Cooks/Cooks'
import Navbar from './Components/Navbar/Navbar'
import Recipeitems from './Components/RecipeItems/Recipeitems'
import Recipes from './Components/Recipes/Recipes'
// import Cookbottom from './Components/Cookbottom/Cookbottom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [recipeitems, setRecipeitems] = useState([])
  const handleItemClick = (item) => {
    if (!recipeitems.some(existingItem => existingItem.recipe_id === item.recipe_id)) {
      const newItem = [...recipeitems, item];
      setRecipeitems(newItem);
    } else {
      toast.error("Item already exists in the list");
    }
  }

  const [cookItems, setCookItems] = useState([])
  const handleCookClick = (item) => {
    document.getElementById(`recipe-${item.recipe_id}`).remove();
    if (!cookItems.some(existingItem => existingItem.recipe_id === item.recipe_id)) {
      const newItem = [...cookItems, item];
      setCookItems(newItem);      
    } else {
      toast.error("Item already exists in the list");
    }
  }



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      {/* main parts start */}
      <div className='flex'>
        <Recipeitems handleItemClick={handleItemClick}></Recipeitems>
        <Cooks recipeitems={recipeitems} cookItems={cookItems} clickCook={handleCookClick}></Cooks>
        <ToastContainer />
      </div>


    </>
  )
}
export default App
