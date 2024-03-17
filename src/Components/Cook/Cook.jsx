import PropTypes from 'prop-types';
// import Cookbottom from '../Cookbottom/Cookbottom';
export default function Cook({ recipeitems, clickCook }) {
    // console.log(recipeitems)
    const { recipe_name, preparing_time, calories, recipe_id } = recipeitems;


    return (
        <div className='border'>
            {/* style={{ borderCollapse: 'collapse', width: '100%' }} */}

            <div className='flex justify-between  text-6 font-semibold bg-[#28282808] rounded-2xl my-3' id={`recipe-${recipeitems.recipe_id}`}>

                <li className='list-disc'></li>
                <h2>{recipeitems.recipe_name} </h2>
                <h2>{recipeitems.preparing_time}</h2>
                <h2>{recipeitems.calories} calories</h2>
                <button className='btn bg-[#0BE58A] rounded-full' onClick={() => clickCook(recipeitems)}>Preparing</button>

            </div>
        </div>
    )
}

Cook.propTypes = {
    recipeitems: PropTypes.shape({
        id: PropTypes.number.isRequired,
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
};