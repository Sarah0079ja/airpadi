// import React, {useState} from 'react';
// import useStyle from './Styles';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';


// const  Select = () => {
//     const classes = useStyle();
//     const [bank, setBank] = useState('');

//     const handleChange = (e) => {
//      setBank(e.target.value);
//     };
//     return (
//         <div className={classes.root1} noValidate autoComplete="off">
            
//             <div>
//                 <TextField
//                   id="outlined-select-bank"
//                   select
//                   label="Select your bank"
//                   value={bank}
//                   onChange={handleChange}
//                   variant="outlined"
//                 >
//                   {banks.map((bank) => (
//                     <MenuItem key={bank.value} value={bank.value}>
//                       {bank.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
    
//             </div>
//         </div>
        
                        
//     )

// };
//  export default Select;