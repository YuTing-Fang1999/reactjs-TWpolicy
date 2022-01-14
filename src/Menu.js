import React from 'react';

import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    rightEntry: {
        height: '40px',
        display: "none",
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        backgroundColor: "#4caf50",
        color: 'white',
    },
    btnEntry: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        cursor: 'pointer',
        transform: 'scale(1,1);transition: all 0.1s ease-out',
        "&:hover": {
            transform: "scale(1.1,1.1)",
        }
    },
    '@media screen and (max-width: 900px)': {
        rightEntry: {
            display: "grid",
        }
    }
})

export default function RightEntry() {
    const classes = useStyles();
    const btnList = ['fa-home', 'fa-user-circle-o', 'fa-bell-o', 'fa-pencil-square-o'];
    return (
        <div style={{ position: 'fixed', bottom: '0%', width: '100%' }}>
            <div className={classes.rightEntry}>
                {
                    btnList.map(item => <i className={classes.btnEntry + " fa " + item} key={item} aria-hidden="true"></i>)
                }
            </div>
        </div>

    )
}
