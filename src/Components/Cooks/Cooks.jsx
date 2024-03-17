import Cook from "../Cook/Cook";

import PropTypes from 'prop-types';
import Cookbottom from "../Cookbottom/Cookbottom";
export default function Cooks({ recipeitems, cookItems, clickCook }) {
  // console.log(recipeitems)

  return (
    <div className="w-[30%] border-4 rounded-3xl shadow-lg">
      <h1 className="text-center text-[#282828] font-semibold text-[24px]">Want to cook:{recipeitems.length - cookItems.length} </h1>
      <hr className="w-[460px] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <table className="w-[100%]">
        <thead className="border bg-red-500">
          <tr >
            <th className="p-2">Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
      </table>
      <div>
        {
          recipeitems.map((item) => <Cook key={item.recipe_id} recipeitems={item} clickCook={clickCook}></Cook>

          )
        }
        {/* {<Cook recipeitems={recipeitems}></Cook>} */}
      </div>
      <div>
        <Cookbottom cookItems={cookItems}></Cookbottom>
      </div>
    </div>
  )
}

Cooks.propTypes = {
  recipeitems: PropTypes.array.isRequired
}

