import React from 'react';
import Menu from './Menu(old)';

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navbar: {
        display: "flex",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4caf50",
        color: "white",
        fontWeight: "bold",
        fontFamily: "",
        fontSize: "22px",
        letterSpacing: "3px",
    },
    entry: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    leftEntry: {
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        margin: "10px"
    },
    rightEntry: {
        display: "flex",
        height: "100%",
        width: "100%",
        margin: "10px",
    },
    btnEntry: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding: "0px 20px",
        cursor: 'pointer',
        transform: 'scale(1,1);transition: all 0.1s ease-out',
        "&:hover": {
            transform: "scale(1.1,1.1)",
        }
    },
    searchContainer: {
        width: '100%',
        height: '100%',
    },
    searchInput: {
        height: '100%',
        width: 'calc(100% - 50px);',
        padding: '10px',
    },
    searchBtn: {
        height: '50px',
        width: '50px',
    },
    '@media screen and (max-width: 900px)': {
        navbar: {
            position: 'static',
            '& >:nth-child(odd)': {
                display: "none"
            }
        },
        rightEntry: {
            position: 'fixed',
            button: '0%',
            left: '0%',
        }
    }
})

function LeftEntry() {
    const classes = useStyles();
    const btnList = ['首頁', '論壇'];
    return (
        <div className={classes.leftEntry}>
            {
                btnList.map(item => <div className={classes.btnEntry} key={item}> {item} </div>)
            }
        </div >
    )
}

function SearchBar() {
    const classes = useStyles();
    return (
        <div className={classes.searchContainer}>
            <form action="">
                <input className={classes.searchInput} type="text" placeholder="搜尋" name="search" />
                <button className={classes.searchBtn} type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}

function RightEntry() {
    const classes = useStyles();
    const btnList = ['fa-user-circle-o', 'fa-bell-o', 'fa-pencil-square-o'];
    return (
        <div className={classes.rightEntry}>
            {
                btnList.map(item => <i className={classes.btnEntry + " fa " + item} key={item} aria-hidden="true"></i>)
            }
        </div>
    )
}

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <div className={classes.entry}>
                <LeftEntry />
            </div>
            <div className={classes.entry}>
                <SearchBar />
            </div>
            <div className={classes.entry}>
                <RightEntry />
            </div>
        </div>
    );
}