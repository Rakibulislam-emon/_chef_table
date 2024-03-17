
import banner from '../../assets/images/bg.jpg';
export default function Banner() {
    return (
        <div className='mt-14 '>
            <div className="hero  rounded-2xl h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[600px]">
                        <h1 className="mb-5 text-5xl font-bold">Flavorscapes: Where Every Bite Tells a Story</h1>
                        <p className="mb-5">Embark on a culinary voyage where every dish tells a story and every bite ignites the senses. Our restaurant invites you to savor exquisite flavors, crafted with passion and served with a side of warm hospitality.</p>
                        <button className="btn mr-12 rounded-full bg-green-500 border-white">Explore Now</button>
                        <button className="border-white rounded-full btn btn-ghost">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
