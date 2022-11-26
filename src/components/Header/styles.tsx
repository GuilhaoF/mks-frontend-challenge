import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    height: 101px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    background-color: var(--backgroundHeader);
    
    span{
        margin-left: 65px;
        font-size: 20px;
        color: var(--text);
        font-weight:300;
    }
    strong{
        font-size: 40px;
        color: var(--text);
        margin-right: 0.5rem;
    }
    @media screen and (max-width: 500px) {
        span{
            margin-right: 20px;
        }
    }
`
export const ButtonCart = styled.button`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 90px;
    height: 40px;
    background-color: #fff;
    border-radius:8px;
    margin-right: 88px;
    border:none;
    

    span {
        color:#000;
        margin-left: 15.99px;
        font-weight: 700;
    }
   @media screen and (max-width: 500px) {
      display: flex;
      padding:10px;
   }
   
`