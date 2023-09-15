import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-1 mb-1 px-6 rounded text-gray-700 font-medium' >
            <h3 className="text-sm">{title}</h3>
        </div>
    );  
};
Bookmark.PropTypes = {
    bookmark:PropTypes.object
}

export default Bookmark;