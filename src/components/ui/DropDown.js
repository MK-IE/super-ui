import { useState, Fragment } from 'react';
import './dropdown.css';

const Options = ({ options }) => (
    <div className='selected' style={{ position: 'absolute', width: '100%' }}>
        {options.map((option, key) => (
            <div key={key} className='option'>
                {option}
            </div>
        ))}
    </div>
);

const DropDown = ({ classes, options }) => {
    const [selected, setSelected] = useState(false);
    return (
        <Fragment>
            <div className='sign-up-input'>
                <button
                    className='dropdown-btn'
                    onClick={(event) => {
                        event.preventDefault();
                        setSelected(!selected);
                    }}
                >
                    {options[0]}
                </button>
                {selected ? <Options options={options} /> : ''}
            </div>
        </Fragment>
    );
};

export default DropDown;
