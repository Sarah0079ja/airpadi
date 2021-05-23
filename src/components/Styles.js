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
        width: "60%",
    },
     modalbutton:{
         color: "#000000",
        position: "relative",
         border: "2px solid #E5E5E5",
        padding: "7px 9px 7px 9px",
         fontFamily: "Avenir",
         background: "#E5E5E5",
    
          top: "-20px",
          left: "95%",
        borderRadius: "50%",
    // //    transition: "background 500ms",
     },
     mod: {
         fontSize: '20px',
        fontFamily: 'Avenir',
        position: 'absolute',
        margin: '10px auto',
        fontWeight: "200px",
         padding: "200px auto",
       
        backgroundColor: 'paper',
        
         boxShadow: 'theme.shadows[3]',
        // padding: 'theme.spacing(2, 4, 3)',
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    //   h2: {
    //     padding: "80px 35px 0px 35px",
        
    //   },
    error:{
        // marginTop: "20px",
        marginLeft:"45%",
        marginBottom: "10px",
        color: '#B20808',
        fontSize: "4.5rem"
    },
    linkbutton: {
        marginTop: "10px",
        padding: "5px auto",
        marginLeft: "35px",
        border: '0.5px solid rgba(63, 81, 181, 0.5)'
    },

    link1: {
        // justifyContent: "center",
        display: "column",
        font: "Avenir",
        // marginLeft: "10px",
        // width: "305px",
        height: "25px",
        color: "grey",
        textDecoration: "none",
        active: "underline",
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
        marginLeft: "35px",
        marginTop: "25px",
    },

    sec1: {
        fontSize: "18px",
        marginLeft: "35px",
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
