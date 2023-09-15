import propTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

    const Bookmarks = ({bookMarks, readingTime, readingTime1}) => {

          
        return (
            <div className='w-1/4  mr-6 b-1px border-2 ml-2 h-[400px] overflow-x-auto'>
            
            <h4 className='p-4 text-center text-[18px] border-2 border-indigo-200 font-bold text-blue-600'>Credit Hour Remaining  {readingTime1} hr </h4>
              <div className='px-4'>
            <h2 className='p-2 mt-2 text-[15px] text-center w-[90%] '>Total Course : {bookMarks.length}</h2>
            <hr className=' mb-2 '/>
            <h4 className='text-center font-[700] font-sans mb-2 text-[20px]'>Course name </h4>
            {
                bookMarks.map((bookmark, idx) => 
                <Bookmark
                 key={idx} bookmark={bookmark}> 
                </Bookmark>)
            }</div>

            <hr className='m-4 mb-0'/>
            <h4 className='p-4 text-center font-[400]  text-black font-mono text-[19px]'>Total Credit Hour: {readingTime}</h4>
            <hr className='m-0 mb-4'/>
            </div>
        )
    }

Bookmarks.propTypes = {
    bookmarks: propTypes.array,
    readingTime: propTypes.number,
    readingTime1: propTypes.number
}

export default Bookmarks
