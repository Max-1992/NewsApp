import React from 'react';
import PropTypes from 'prop-types';


const New = ({ notice }) => {

    // Destructurin data
    const { title, description, urlToImage, url, source } = notice;
    

    return ( 

        <div className="col s12 m6 l4" >
            <div className="card">
                
                {
                    urlToImage
                    
                    ? 

                    <div className="card-image">
                        <img src={urlToImage} alt={title} />
                        <span> { source.name } </span>
                    </div>

                    :

                    null
                }

                <div className="card-content">
                    <h5> { title } </h5>
                    <p>
                        { description }
                    </p>
                </div>
                <div className="card-action">
                    <a 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    > Ver Noticia Completa </a>
                </div>
            </div>
        </div>

     );
}

// Document PropTypes
New.propTypes = {
    notice: PropTypes.object.isRequired
}
 
export default New;