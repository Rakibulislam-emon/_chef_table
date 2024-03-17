
import t from '../../assets/images/t.png';
import c from '../../assets/images/c.png';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
export default function Recipeitem({ recipeitem, handleItemClick }) {
    const { recipe_id, recipe_name, recipe_image, ingredients, preparing_time, calories, short_description } = recipeitem;
    return (
        <div className='h-[800px]'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt={recipe_name} className="rounded-xl w-80 h-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="italic card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    {/* <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 ' /> */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-8'>Ingredients:{ingredients.length}</h2>
                        <ul className='list-disc'>
                            {ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                        <div className='flex justify-between mt-2 w-[200px]'>

                            {/* svg will be added  */}
                            <div className='flex'>

                                <img src={t} alt="" />
                                <h2>{preparing_time}</h2>
                            </div>
                            <div className='flex'>

                                <img src={c} alt="" />
                                <h2>{calories}Calories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <button
                            onClick={() => handleItemClick(recipeitem)}
                            className="btn increment-button mt-8 bg-green-500 rounded-full ">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
Recipeitem.propTypes = {
    recipeitem: PropTypes.shape({
        recipe_id: PropTypes.number.isRequired,
        recipe_name: PropTypes.string.isRequired,
        recipe_image: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // Updated PropTypes for ingredients
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
};