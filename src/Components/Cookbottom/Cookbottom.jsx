

export default function Cookbottom({ cookItems }) {
    let sumTime = 0;
    cookItems.forEach(obj => {
        const preparingTimeDigits = obj.preparing_time.match(/\d+/);
        sumTime += parseInt(preparingTimeDigits[0]);
    });
    let sumcalories = 0;
    cookItems.forEach(obj => {
        sumcalories += parseInt(obj.calories);
    });
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-center text-[#282828] font-semibold text-[24px]">Currently cooking:<span>{cookItems.length}</span></h1>
                    <hr className="w-[460px] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                    <table className=" w-[100%]">
                        <thead className="border bg-red-500 ">
                            <tr className="">
                                <th></th>
                                <th className="p-2">Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cookItems.map((item, index) => (
                                <tr key={item.recipe_id} className="font-semibold">
                                    <td className="p-2">{index + 1}.</td>
                                    <td>{item.recipe_name}</td>
                                    <td>{item.preparing_time}</td>
                                    <td>{item.calories} calories</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex border w-full mr-12 mt-12">

                    <div className="   text-[20px]  w-full flex justify-between pt-2 pb-2 font-semibold px-3 ">
                        <h3>Total Time :
                            {sumTime} minutes</h3>
                        <h3 >Total Calories =
                            {sumcalories} calories</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
