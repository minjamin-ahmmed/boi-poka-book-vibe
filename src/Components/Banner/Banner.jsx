import bannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
       <div className="flex flex-col-reverse lg:flex-row justify-around bg-[#13131320] p-10 rounded-2xl my-10">

        <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold my-4">Books to freshen up your bookshelf</h1>
            <div>
            <button className="btn bg-[#23BE0A] text-white font-bold">View The List</button>
            </div>
        </div>

        <div>
        <img
            src={bannerImg}
            className="w-full lg:max-w-xl rounded-lg shadow-2xl" />
        </div>

       </div>
)};

export default Banner;