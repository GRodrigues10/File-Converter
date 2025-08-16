import styled from "styled-components";

export const StylesAbout = styled.div `
    width: 100%;
   height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .about{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
    }

    .about h1{
        font-size: 2rem;
        margin-top: 40px;
        font-weight: bold;
    }

    .about p{
        margin: 10px;
        text-align: justify;
        font-size: 1.1rem;
    }

    @media screen and (min-width:530px) {
         .about h1{
        font-size: 2.2rem;
        margin-top: 40px;
    }

    .about p{
        margin: 10px;
        font-size: 1.3rem;
    }

    @media screen and (min-width:768px) {
              .about h1{
        font-size: 2.4rem;
        margin-top: 40px;
    }

    .about p{
        margin: 10px;
        font-size: 1.5rem;
    }
    }


     @media screen and (min-width:992px) {
        
              .about h1{
        font-size: 2.6rem;
        margin-top: 40px;
    }

    .about p{
        margin: 10px;
        font-size: 1.7rem;
    }
    }
    }





`