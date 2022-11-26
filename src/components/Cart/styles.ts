import styled from 'styled-components'

export const CartModal = styled.div`
    height: 100vh;
    width: 486px;
    background: #0F52BA;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    z-index:1;

    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
   
`
export const CartContainer = styled.div `
    padding: 42px;
    background: #0F52BA;

    .paddingLast:last-child {
        padding-bottom: 97px;
    }
`

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    h1 {
        max-width: 180px;
        font-size: 28px;
        font-weight: 700;
        color: white;
        line-break: break;
    }
    
`
export const CartCloseButton = styled.button`
        width: 38px;
        height: 38px;
        background-color: black;
        color: white;
        outline: none;
        border: 0;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
`
export const CartList = styled.div`
    padding: 5px 10px;
    margin-bottom: 64px;
    overflow-x: auto;
    height: 60vh;
`;

export const CartTotalPrice = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding-left: 42px;
    padding-right: 42px;
    bottom: 97px;
    height: 97px;
    right: 0;
    width: 485px;
    background: #0F52BA;
    
    h1 {
        font-size: 28px;
        font-weight: 700;
        color: white;
        line-height: 15px;
    }
    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
`;

export const CartFinalityButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    right: 0;
    width: 485px;
    background: black;
    height: 100px;
    position: absolute;
    bottom: 0;
    
    h1 {
        font-size: 28px;
        font-weight: 700;
        color: white;
        line-height: 15px;
        margin-bottom:20px;
    }
    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
`;

