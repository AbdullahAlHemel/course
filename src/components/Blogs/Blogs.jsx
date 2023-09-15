import { useEffect, useState } from "react";
import Blog from '../../components/Blog/Blog'
import propTypes from 'prop-types'


const Blogs =  ({handleAddToBookmark, handleMarkAsRead, handleMarkAsRead1}) => {

    const [blogs, setBlogs] = useState([])
    useEffect( ()  => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-3/4 ml-4 grid grid-cols-3'>
              {/* <h2>Blogs {blogs.length}</h2> */}
              {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    handleMarkAsRead1={handleMarkAsRead1}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark:propTypes.func,
    handleMarkAsRead:propTypes.func,
    handleMarkAsRead1:propTypes.func
}

export default Blogs;