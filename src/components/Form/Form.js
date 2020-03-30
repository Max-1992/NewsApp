import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

// Import Hooks
import useSelect from '../hooks/useSelect';

const Form = ({ setSategory }) => {

    // Options
    const options = [
        { value: 'general', label: 'General' },
        { value: 'bussiness', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
    ]

    // UseState Custom Hook
    const initialStateSelect = 'general'
    const [ stateCategory, SelectNews ] = useSelect(initialStateSelect, options);

    // HandleSubmit
    const handleSubmit = e => {
        e.preventDefault();

        setSategory(stateCategory);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 mB offset-m2">

                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.headding}>Encuentra Noticas por Categoria</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            
            </div>
        </div>
     );
}

// Document PropTypes
Form.propTypes = {
    setSategory: PropTypes.func.isRequired
}
 
export default Form;