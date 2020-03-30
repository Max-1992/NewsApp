import React, {useState} from 'react';

const useSelect = (initialState, options) => {

    const [state, setstate] = useState(initialState);

     // HandleChange
     const handleChange = e => {
        let category = e.target.value;
        setstate(category);
    }

    const SelectNews = () => {
        return ( 
                <select
                    className="browser-default"
                    value={state}
                    onChange={handleChange}
                >
                    {
                        options.map( option => <option key={option.value} value={option.value}> { option.label } </option> )
                    }
                </select>
            );
    }

    
    return [ state, SelectNews ];

}
 
export default useSelect;