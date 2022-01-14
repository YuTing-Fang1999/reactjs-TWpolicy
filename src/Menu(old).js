import React, { useState } from 'react';

import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
   mobile: {
      display: "none",
   },
   menuIconBar: {
      display: "flex",
      height: "50px",
      justifyContent: "flex-start",
      alignItems: "center",
   },
   menuIconWraper: {
      padding: "10px",
      cursor: "pointer",
   },
   menuIcon: {

   },
   menu: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: "250px",
      color: "black",
      backgroundColor: "white",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
   },

   account: {
      border: "1px solid black",
      display: "flex"
   },
   pic: {
      border: "1px solid black",
      borderRadius: '100px',
      width: '100px',
      height: '100px',
   },
   name: {
      border: "1px solid black",
      borderRadius: '10px',
      padding: "5px",
      margin: "5px",
      textAlign: "center",
   },
   listItem: {
      margin: "15px",
   },


   "@media screen and (max-width: 900px)": {
      mobile: { display: "block" }
   },

});
export default function Menu() {
   const classes = useStyles();
   const [login, setLogin] = useState(true);
   const [open, setOpen] = useState(false);
   console.log(classes.menuIcon);
   return (
      <div>
         <div className={classes.menuIconWraper + " " + classes.mobile} onClick={() => setOpen(pre => !pre)}>
            <i className={"fa fa-bars " + classes.menuIcon} aria-hidden="true"></i>
         </div>
         <div className={classes.menu} style={{ display: (open ? 'block' : 'none') }}>
            <div className={classes.menuIconBar}>
               <div className={classes.menuIconWraper} onClick={() => setOpen(pre => !pre)}>
                  <i className={"fa fa-bars " + classes.menuIcon} aria-hidden="true"></i>
               </div>
            </div>
            <div className={classes.account}>
               <div>
                  <div className={classes.pic}>
                  </div>
                  {login && <p className={classes.name}>名字</p>}
                  {!login && <p className={classes.name}>登入</p>}

               </div>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, border: "1px solid black", }}>
                  info
               </div>
            </div>
            <div className={classes.listItem}>
               發文
            </div>
            <hr></hr>
            <div className={classes.listItem}>首頁</div>
            <hr></hr>
            <div className={classes.listItem}>論壇</div>
         </div>
      </div>

   )

}