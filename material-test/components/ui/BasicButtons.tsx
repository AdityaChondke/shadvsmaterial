'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';

export default function BasicButtons(prop: any) {

  const theme = createTheme({
    palette: {
      primary: {
        main : '#3857FF !important'
      },
      secondary : {
        main : '#EAEEFF !important'
      },
      ternary : {
        main : '#003366 !important'
      }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  })

  let buttonStyle:any = {
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '180%',
    letterSpacing: '0em',
    borderRadius: '8px',
    textAlign: 'center'
  }

  if(prop.type === 'primary' && prop.isdisabled === false) 
  {
    buttonStyle['backgroundColor'] = '#3857FF'
  }

  if(prop.type === 'secondary') 
  {
    buttonStyle['border'] = '0.5px solid #3857FF'
  }

  if(prop.type === 'ternary') 
  {
    buttonStyle['color'] = '#EAEEFF';
    buttonStyle['border'] = '0.5px solid #5D6874'

  }

  if(prop.isdisabled === true) 
  {
    buttonStyle['border'] = '0.5px solid #DDDDDD'
  }

  if(prop.size === 'large') {
    buttonStyle['width'] ='300px'
  }

  return (
    <div className='Button'>
      <ThemeProvider theme={theme}>

     <Button
     color={prop.type}
     variant='contained'
     sx= {buttonStyle}
     size = 'large'
     onClick={prop.onButtonClick}
     disabled = {prop.disabled}
     endIcon={prop.icon}
     >
      {prop.text}
      </Button>
     </ThemeProvider>
     </div>
  );
}