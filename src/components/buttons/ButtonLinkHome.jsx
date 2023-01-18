import React from 'react'
import Fab from '@mui/material/Fab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


function ButtonLinkHome() {

  return (
    <>
      <Fab variant="extended" size='medium' className={'ButtonHome'} >
        <HomeRoundedIcon/>
      </Fab>     
    </>
  )
}

export default ButtonLinkHome