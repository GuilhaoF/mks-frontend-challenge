import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --backgroundHeader:#0F52BA;
    --backgroundCardPrice:#373737;
    --text:#FFF;
    --textCardTitle:#2C2C2C;
    
   
}
*{
    margin : 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
  overflow: hidden;
}
img {
    max-width: 100%;
    display: block;
  }
::-webkit-scrollbar {
  width: 0px;              
}
  ::-webkit-scrollbar-track {
    background: transparent;        
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;    
    border-radius: 20px;     
  }
`


