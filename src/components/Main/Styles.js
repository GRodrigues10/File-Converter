import styled from "styled-components";

export const StylesMain = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #1d4162;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    color: #1d4161;
    font-weight: bold;
    margin-bottom: 20px;
  }

  main {
    width: 300px;
    height: 290px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main h3 {
    font-size: 1.6rem;
    color: #1d4162;
  }

  main p {
    font-size: 1rem;
    font-weight: 500;
    color: #2f3b44;
    margin-bottom: 20px;
  }

  main button {
    text-align: center;
    padding: 10px;
    width: 60%;
    max-width: 250px;
    border-radius: 15px;
    border: none;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    font-weight: normal;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #1063bbff;
    }
  }

  img {
    width: 60px;
    margin-bottom: 10px;
  }

  main select {
    padding: 8px 0px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 0.7rem;
    cursor: pointer;
    min-width: 120px;
    text-align: center;
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2.1rem;
    }

    p {
      font-size: 1.1rem;
    }
    main {
      width: 350px;
      height: 300px;
    }

    img {
      width: 80px;
    }

    main h3 {
      font-size: 1.8rem;
    }
    main p {
      font-size: 1.1rem;
    }

    main button {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      margin-top: 25px;
      font-size: 3.5rem;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 30px;
    }
    main {
      width: 500px;
      min-height: 320px;
    }

    img {
      width: 80px;
    }

    main h3 {
      font-size: 2rem;
    }
    main p {
      font-size: 1.2rem;
    }

    main button {
      font-size: 1.5rem;
      padding: 12px;
    }

    main select {
      padding: 12px 0px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 0.7rem;
      cursor: pointer;
      min-width: 120px;
      text-align: center;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      margin-top: 35px;
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 30px;
    }
    main {
      width: 600px;
      min-height: 350px;
    }

    img {
      width: 90px;
    }

    main h3 {
      font-size: 2.1rem;
    }
    main p {
      font-size: 1.5rem;
    }

    main button {
      font-size: 1.8rem;
      padding: 12px;
    }
  }
`;
