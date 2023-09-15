import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog , handleAddToBookmark, handleMarkAsRead, handleMarkAsRead1}) => {
    const {id ,title, cover, dec, reading_time, price, time} = blog;
    return (
        <div className='pl-4 p-1 m-2 mb-4 my-0  bg-gray-100 rounded pb-3'>
            <img className='w-[255px] my-4' src={cover} alt="" />

           <h2 className='text-[18px] font-semibold w-[90%]  font-family'>{title}</h2>
           <p className='text-[14px] my-2 w-[95%] h-[90px]'>{dec}</p>

            <div className='flex justify-between'>

                <div className='flex'>
                     
                    <div className='flex'>
                    <h2 className='font-sans mr-2 text-xl'>$</h2>
                     <h3 className='mt-1 mr-6'>Price : {price}</h3>
                      <span className='mt-2'><FaBookmark></FaBookmark></span>
                      <h4 className='mt-1 ml-1'>Credit : {time}</h4>
                     
                    </div>
                </div>
                
            </div>


           {/* <p className='text-gray-600 text-ms font-medium'>
            {
                hashtags.map(hash => <span><a href=''>#{hash}</a> </span>)
            }
           </p> */}
           

<div className='mr-12 text-2xl'>     
                   <button onClick={() => handleAddToBookmark(blog) }>
                          <button onClick={() => handleMarkAsRead1(id, reading_time)}>
                               <button className='mt-2 text-sm bg-blue-500 text-white rounded py-2 font-semibold w-[255px]' 
                                       onClick={() => handleMarkAsRead(id, reading_time)}>Select</button></button>
                  </button>
                </div>
           
        </div>
    );
};

    Blog.PropTypes = {
        blog: PropTypes.object.isRequired,
        handleAddToBookmark:PropTypes.func,
        handleMarkAsRead1:PropTypes.func,
        handleMarkAsRead:PropTypes.func
    }

export default Blog;