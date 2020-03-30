import React from 'react';
import PropTypes from 'prop-types';

// import Compnents
import New from '../News/News';

const List = ({ news }) => {
    return ( 

        <div className="row" >
            {
                news.map( notice => {
                   return <New key={notice.url} notice={notice} />
                })
            }
        </div>

     );
}

// Document PropTypes
List.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default List;