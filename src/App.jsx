import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {

  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const [readingTime1, setReadingTime1] = useState(20);

const handleMarkAsRead1 = (time1) => {
  
  const newReadingTime1 = readingTime1 - time1;
  setReadingTime1(newReadingTime1)

}
  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookMarks, blog];
    setBookmarks(newBookmarks)
  } 

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // remove the read blog from bookmark
    // const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id)
    // setBookmarks(remainingBookmarks)
  } 
  // if(0 >readingTime1 > 20){
       
  //       alert('ses')
  //   }else{
        
        
    

  return (
    <>
        <section className='m-auto max-w-screen-xl mb-12'>
        <Header></Header>
        <div className='md:flex '>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}

handleMarkAsRead1 = {handleMarkAsRead1}


        ></Blogs>
        <Bookmarks
         bookMarks={bookMarks}
         readingTime={readingTime}
         readingTime1={readingTime1}
        


         ></Bookmarks>
        </div>
        </section>
    </>
  )
}
//}

export default App
