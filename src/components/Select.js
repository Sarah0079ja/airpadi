import React, {useState} from 'react';
import banks from './banks.json';
import useStyle from './Styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const Select = () => {
   
    const [bank, setBank] = useState('');
    const [isError, setIsError] = useState(false)
    const classes = useStyle();
    const handleChange = (e) => {
     setBank(e.target.value);
     if(e.target.value === "") {
         setIsError(true);
     }
    };
    return (
        <div className={classes.root1} noValidate autoComplete="off">
            
            <TextField
            // id="outlined-select-bank"
            id= 'bank'
            name="bank"
            select
            label="Select your bank"
            value={bank} 
            onChange={handleChange}
            // onBlur={handleBlur}
            error={isError}
        
            variant="outlined"
            // value={bank}
            // onChange={handleChange}

            >
            {banks.map((bank) => (
                <MenuItem key={bank.value} value={bank.value}>
                {bank.label}
                </MenuItem>
            ))}
            </TextField>

        </div>
    )
};

export default Select;