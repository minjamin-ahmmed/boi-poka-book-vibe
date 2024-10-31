import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} = useParams()
    const booksData = useLoaderData()

    const id = parseInt(bookId)

    const book = booksData.find(book => book.bookId === id)

    console.log(book);

    const {bookName, author, image, rating, tags, category, review, publisher, yearOfPublishing, totalPages } = book
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 mb-10'>
            <div className='bg-gray-200 p-8 lg:p-14 rounded-2xl'>

                <img className='lg:h-[700px] w-full rounded-2xl object-cover' src={image} alt="" />
            </div>

            <div>
                <h1 className='text-4xl font-bold '>{bookName} </h1>
                <p className='text-lg font-medium mt-4'>By: {author} </p>

                <div className="divider"></div>

                <p className='font-medium'> {category} </p>

                <div className="divider"></div>

                <p className='mb-4'> <span className='font-bold'>Review:</span> {review} </p>

             <p className='flex items-center gap-5 text-md font-bold'> Tag: <div className="flex items-center gap-5">
               
               {
                   tags.map((tag, index) => <button key={index} className="btn btn-xs bg-[#22be0a53]  px-4 "> {tag} </button>)
               }

               </div> </p>

                <div className="divider"></div>
                
                <div className="overflow-x-auto">
  <table className="table">
  
   
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
       
        <td > Number of Pages: </td>
        <td className='font-bold'> {totalPages} </td>
       
      </tr>
      {/* row 2 */}
      <tr>
       
        <td>Publisher: </td>
        <td className='font-bold'> {publisher} </td>
        
      </tr>
      {/* row 3 */}
      <tr>
      
        <td>Year of Publishing</td>
        <td className='font-bold'>{yearOfPublishing} </td>
       
      </tr>

      <tr>
      
        <td>Rating </td>
        <td className='font-bold'> {rating} </td>
       
      </tr>


    </tbody>
  </table>
            </div>

               <div className='mt-8'>
                 <button className="btn btn-outline mr-5">Read</button>
                 <button className="btn btn-info text-white font-bold">WishList</button>

               </div>

            </div>
        </div>
    );
};

export default BookDetails;