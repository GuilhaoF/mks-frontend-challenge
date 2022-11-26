import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:217.56px;
  height:285px;
  background-color:#fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);


     
`
export const CardMain = styled.div`
  height:100%;
  position:relative;
`
export const CardImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 18px 0;
`
export const CardContent = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr ;
    grid-template-rows:auto;
    grid-template-areas: 
        'title price'
        'description description'; 
    padding: 0 14px;

    @media screen and (max-width: 500px) {
        display:flex;
        flex-direction: column;
    }
`

export const CardTitle = styled.div`
    grid-area:title;
    font-weight:400;
    font-size:16px;
    line-height:19px;
    color: var(--textCardTitle);
`

export const CardPrice = styled.div`
    grid-area:price;
    margin-top: 4px;
    color:#fff;

    span{
        padding: 4px 6px;
        background-color: var(--backgroundCardPrice);
        color:#fff;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        border-radius:5px;
    }
`
export const CardDescription = styled.div`
    grid-area:description;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: var(--textCardDescription);
    margin-top:8px;

`

export const CardFooter = styled.div`
    width: 100%;
    height:32px;
    background-color: var(--backgroundHeader);
    border-radius: 0 0 8px 8px;
    margin-top: 5px;
    position: absolute;
    bottom: 0;
    user-select: none;
`

export const CardButton = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   font-weight: 600;
   font-size:14px;
   line-height:18px;
   text-transform: uppercase;
   color: var(--text);
   cursor: pointer;

   img{
    margin-right: 14px;
   }
   
`
