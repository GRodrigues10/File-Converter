import styled from "styled-components";

export const StylesFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  footer {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2d3748; /* azul escuro/cinza */
  }

  .types {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    font-weight: bold;
    align-items: center;
    justify-content: center;
  }

    @media screen and (min-width: 768px) {
    footer {
      width: 100%;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      color: #2d3748; /* azul escuro/cinza */
    }

    footer .types {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      font-weight: bold;
      text-align: center;
    }
  }

  @media screen and (min-width: 992px) {
    footer {
      width: 100%;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      color: #2d3748; /* azul escuro/cinza */
    }

    footer .types {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      font-weight: bold;
      text-align: center;
    }
  }

  @media screen and (min-width: 1200px) {
    footer {
      margin-top: 70px;
    }

    footer h2 {
      font-size: 2rem;
    }

    footer .types {
      margin-top: 30px;

      font-size: 1.2rem;
    }
  }
`;
