import React from 'react';

import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
   card: {
    width: '100%',
    maxWidth: '900px',
    backgroundColor: 'white',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.2)',
    margin: '30px'
   },
   title: {
    margin: '30px',
    fontFamily: '微軟正黑體',
    fontSize: "24px"
   },
   article: {
    margin: '30px',
    fontFamily: '微軟正黑體',
    fontSize: "18px"
   },
   response: {
    backgroundColor: 'whitesmoke',
    padding: '30px',
    fontFamily: '微軟正黑體',
    fontSize: "18px"
   },
   responseInput: {
    border: '0',
    borderBottom: '2px solid gray',
    background: 'transparent',
    transition: 'border-color 0.2s',
    // '&::placeholder': {
    //     color: 'transparent'
    //   },
    '&:focus': {
        border: '0',
        borderBottom: '2px solid gray',
    }
   },
   '@media screen and (max-width: 900px)': {
        card: {
            margin: '0px'
        }
    }
})
export default function Article() {
    const classes = useStyles();
    return (
       <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
       }}>
          <div className={classes.card}>
            <div className={classes.title}>
                Title
            </div>
            <div className={classes.article}>
                Article
            </div>
            <div className={classes.response}>
                <input className={classes.responseInput} type="input" placeholder="Name" />
            </div>
          </div>
       </div >
 
    )
 }