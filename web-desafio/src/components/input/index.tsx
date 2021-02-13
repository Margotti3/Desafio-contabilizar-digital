import React, {ChangeEvent} from 'react';
import './styles.css';

interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    label: string | number;
    value?: string;
    className?: string;
    onChange: Function;
}

const Input: React.FC<InputProps> = (props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        props.onChange(value, name);
    }

    return(
        <div className={props.className?props.className:"formSimple"} >
            <label htmlFor={ props.name } className="label">{ props.label }</label>
            <input type={ props.type }
                className={props.className?props.className+" input":"input"}
                name={ props.name } 
                id={ props.name }  
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default Input;