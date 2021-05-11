import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles(themes => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
           
            margin: themes.spacing(0.5), 
            font: 'Avenir',
               
            
        }
    },

    root1: {
        '& .MuiTextField-root': {
            margin: themes.spacing(0.5),
            width: '80%',
            
        
          },
    },

    root2: {
        '& .MuiFormControl-root': {
            width: "60%",
            margin: themes.spacing(0.5),
            marginTop: "30px"    
            
        }
    },
    reg1: {
        
        fontWeight: "900px",
        fontSize: "17px",
        lineHeight: "30px",
        color: "#162d4c",
       
        padding: "5px"
    },

    container: {
        backgroundColor: themes.palette.background.grey,
    },

    form: {
        align: "center",
        padding: "5px",
        marginTop: "10px",
        // margin: "20px auto"
    },
    button: {
        margin: themes.spacing(1),
        width: "80%",
    },
    linkbutton: {
        marginTop: "10px",
        marginLeft: "55px",
    },

    link1: {
        justifyContent: "center",
        display: "flex",
        font: "Avenir",
        marginLeft: "10px",
        width: "305px",
        height: "25px",
        color: "grey",
        
        marginBottom: "35px",
        paddingTop: "45px"
    },
     formControl: {
        margin: themes.spacing(1),
        // minWidth: 120,
     },
     g: {
        position: "flex",
     },
     selectEmpty: {
        marginTop: themes.spacing(2),
     },
    sec: {
        fontSize: "15px",
        marginLeft: "55px",
        marginTop: "25px",
    },

    sec1: {
        fontSize: "18px",
        marginLeft: "55px",
        marginTop: "40px",
        LineHeight: "24.59px",
        fontWeight: "800px",
        color: "#152955"

    },

    ussd: {
       marginTop: "50px",
       align: "center",
       fontWeight: "900px",
    }
}));

export default useStyle;
