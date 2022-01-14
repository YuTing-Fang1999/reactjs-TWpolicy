import React from 'react';

import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
   card: {
      width: '100%',
      maxWidth: '1000px',
      margin: '30px',
      border: '1px solid green',
      '& >:last-child': {
         borderBottom: '0px',
      },
   },
   header: {
      display: 'grid',
      gridTemplateColumns: '2fr 5fr 3fr',
      padding: '10px',
      borderBottom: '1px solid green',
      backgroundColor: '#9dd79d',
      '& div,& p': {
         fontSize: '12px',
      },
   },
   list: {
      display: 'grid',
      gridTemplateColumns: '2fr 5fr 3fr',
      padding: '15px',
      borderBottom: '1px solid green',
   },
   category: {
      display: 'flex',
      alignItems: 'center',
      '& div,& p': {
         fontSize: '14px',
      },
      color: 'blue',
   },
   userName: {
      display: 'flex',
      alignItems: 'center',
      '& p': {
         fontSize: '16px',
      },
   },
   upEntry: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
   },
   title: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      '& div,& p': {
         fontSize: '18px',
      },
   },
   res: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',

   },
   '@media screen and (max-width: 900px)': {
      card: {
         width: '100%',
         margin: '0px',
         marginBottom: '40px',

      },
      header: {
         display: 'none',
      },
      list: {
         height: '80px',
         padding: '10px',
         paddingLeft: '10px',
         gridTemplateColumns: 'none',
         gridTemplateRows: '1fr 20fr 1fr',
      },
      upEntry: {
         gridTemplateColumns: 'none',
         display: 'flex'
      },
      category: {
         color: 'gray',
         '& p': {
            fontSize: '12px',
         },
      },
      userName: {
         color: 'gray',
         '& p': {
            fontSize: '12px',
         },
      },
      res: {
         display: 'grid',
         gridTemplateColumns: '1fr 1fr 1fr 2fr',
         '& div,& p': {
            fontSize: '12px',
         },
      },
   }
});
function Header() {
   const classes = useStyles();
   return (
      <div className={classes.header}>
         <div className={classes.upEntry}>
            <div><p>分類</p></div>
            <div><p>發文者</p></div>
         </div>
         <div>標題</div>
         <div>討論度</div>
      </div>
   )
}

function List() {
   const classes = useStyles();
   return (
      <div className={classes.list}>
         <div className={classes.upEntry}>
            <div className={classes.category}><p>[提議]</p></div>
            <div className={classes.userName}><p>台灣NO1</p></div>
         </div>
         <div className={classes.title}><p>安樂死合法化</p></div>
         <div className={classes.res}>
            <div>
               回覆數:
            </div>
            <div>
               投票數:
            </div>
            <div>
               花花:
            </div>
         </div>
      </div>
   )
}
export default function ArticleList() {
   const classes = useStyles();
   return (
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
      }}>
         <div className={classes.card}>
            <Header />
            <List />
            <List />
            <List />
            <List />
            <List />
         </div>
      </div >

   )
}