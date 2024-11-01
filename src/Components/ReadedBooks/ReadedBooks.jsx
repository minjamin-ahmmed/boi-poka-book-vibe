

const ReadedBooks = ({read}) => {
    const {bookId,bookName, author, image, rating, tags, category } = read
    return (
        <div className="card bg-base-100 shadow-xl p-6 border border-gray-400">
        <figure className="bg-gray-300 py-8 rounded-2xl">
          <img
            src={image}
            alt={bookName}
            className="lg:h-[166px] h-[200px] transform transition hover:scale-105 hover:shadow-3xl duration-300" 
            />
        </figure>
        <div className="card-body">
      
          
        
        <div className="flex items-center gap-5">
        
              {
                  tags.map((tag, index) => <button key={index} className="btn btn-xs bg-[#22be0a53]  px-4 "> {tag} </button>)
              }
        </div>
      
      
          <h2 className="card-title">
            {bookName}
            
          </h2>
          <p> {author} </p>
      
          <div className="border-t-2 border-dashed my-4 "></div>
      
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
      
            <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
          </div>
        </div>
      </div>
    );
};

export default ReadedBooks;