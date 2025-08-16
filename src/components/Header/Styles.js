import styled from "styled-components";

export const StylesHeader = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;

    header{
        width: 100%;
        position: fixed;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding-inline: 20px;
    }

    header h1{
        font-size: 1.5rem;
        color: #27639cff;
        font-weight: bold;
    }
     header span{
            color: #1f1f1eff;
        }

    header .desktop-link{
        display: none;
    }

    header .mobile-link{
        font-size: 1.1rem;
        font-weight: bold;
    }

    @media screen and (min-width: 530px) {
         header h1{
        font-size: 1.6rem;
        }

         header .mobile-link{
        font-size: 1.2rem;
        }

    }


    @media screen and (min-width: 768px){
        display: flex;

        header{
            padding-inline:30px;
        }
        
           header h1{
        font-size: 2rem;
       
        }

       

        header p{
            font-size: 1.4rem ;
            cursor: pointer;
        }

    

         header .mobile-link{
        display: none;
        }

        .links{
            display: flex;
            gap: 20px;
        }

        header .desktop-link{
            display: flex;
        }
    }


`