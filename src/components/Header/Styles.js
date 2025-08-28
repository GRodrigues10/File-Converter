import styled from "styled-components";

export const StylesHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  header {
    width: 100%;
    position: fixed;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    z-index: 20; 
  }

  header h1 {
    font-size: 1.5rem;
    color: #27639cff;
    font-weight: bold;
  }

  header span {
    color: #1f1f1eff;
  }

  header .desktop-link {
    display: none;
  }

  header .mobile-link {
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }


  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 15;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: -250px; 
    width: 250px;
    height: 100%;
    background: #0d1b2a; 
    box-shadow: -4px 0 8px rgba(0,0,0,0.3);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: right 0.3s ease;
    z-index: 30;
  }

  .sidebar.open {
    right: 0; 
  }

  .sidebar p {
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
  }

  .sidebar p:hover {
    background: #27639cff;
  }

  @media screen and (min-width: 530px) {
    header h1 {
      font-size: 1.6rem;
    }
    header .mobile-link {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    header {
      padding-inline: 30px;
    }

    header h1 {
      font-size: 2rem;
    }

    header p {
      font-size: 1.4rem;
      cursor: pointer;
    }

    header .mobile-link {
      display: none;
    }

    .links {
      display: flex;
      gap: 20px;
    }

    header .desktop-link {
      display: flex;
    }
  }
`
