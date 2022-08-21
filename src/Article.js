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
        padding: '10px',
        // paddingBottom: '60px',
        fontFamily: '微軟正黑體',
        fontSize: "18px"
    },
    responseInput: {
        resize: 'none',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        overflowY: 'hidden',

        width: '100%',
        border: 'none',
        borderBottom: 'solid 1px gray',
        backgroundColor: 'whitesmoke',
        '&:focus': {
            outline: 'none'
        }

    },
    '@media screen and (max-width: 900px)': {
        card: {
            margin: '0px'
        }
    },
    responseSubmitBtnWraper: {
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
    },
    responseSubmitBtn: {
        padding: '5px',
        marginTop: '10px',
        backgroundColor: '#4caf50',
        border: 'none',
        color: "white",
        fontSize: "20px",
        letterSpacing: "5px",
    }
})
export default function Article() {
    const classes = useStyles();

    function resizeTextarea(e) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

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
                    <div><textarea rows="1" onChange={resizeTextarea} className={classes.responseInput} placeholder="留言"></textarea></div>
                    <div className={classes.responseSubmitBtnWraper}><button className={classes.responseSubmitBtn}>送出</button></div>
                </div>
            </div>
        </div >

    )
}