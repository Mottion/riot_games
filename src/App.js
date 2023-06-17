import { styled } from "styled-components";

export const Header = styled.div`
  width: 100%;
  position: relative;

  .headerbackgroundImg{
    width: 100%;
    height: 100%;
    filter: brightness(0.9);
    position: absolute;
    z-index: -1;
  }
  .wrapper {
    font-family: 'Mirza';
    width: 100%;
    top: 0;

    nav {
      width: 100%;
      display: flex;
      align-items: center;

      a img {
        width: 125px;
      }
      .desktopMenu{
        width: 100%;
        display: flex;
        align-items: center;

        .exit{display: none;}

        .moveLink {
          color: #fff;
          font-size: 23px;
          margin: 0 10px;
          transition: 0.3s;
          position: relative;

          &:hover {
            color: #ff0000;
          }
          &::before{
            content: "";
            width: 0%;
            height: 0.5px;
            position: absolute;
            transform: translate(-50%,-50%);
            bottom: 0px;
            left: 50%;
            background: #ff0000;
            transition: 0.1s;
          }
          &:hover:before{
            width: 100%;
          }
        }

        button {
          margin-left: auto;
          margin-right: 20px;
          padding: 10px;
          background-color: #A63033;
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          border: 2px solid #A63033;
          box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
          font-family: "Montserrat";
          font-weight: 700;

          &:hover {
          background-color: #982f32;
          }
        }
        @media (max-width: 840px) {
          display: flex;
          height: 100vh;
          left: 0;
          top: 100%;
          padding: 20px;
          gap: 10px;
          z-index: 3;
          position: fixed;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #191A1A;
          transition: 0.4s ease-in-out;

          button {
            margin: 0;
          }

          .exit{
            display: inline-block;
            font-family: "Montserrat";
            font-size: 35px;
            color: #982f32;
            position: absolute;
            top: 10px;
            right: 60px;
            z-index: 4;
            cursor: pointer;
          }

          &.mobileMenu{
            top: 0;
          }
        }
      }
      .menuIcon{
        display: none;
        font-size: 35px;
        color: #A63033;
        margin: 0 25px 0 auto;
        cursor: pointer;

        @media (max-width: 840px) {
          display: flex;
        }
      }
      
    }

    .headerContent{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 300px;
      margin: 50px 0 0 20px;
      padding-bottom: 30px;

      iframe{
        width: 100%;
        height: 50%;
        border: 2px solid #A63033;
        box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
        background-color: #A63033;
        padding: 3px;
      }
      h2{
        margin: 10px 0 0 0;
        padding: 5px 20px;
        background-color: #A63033;
        color: #fff;
        font-size: 30px;
        font-family: "Montserrat";
        font-weight: 700;
      }
      p{
        font-family: "Montserrat";
        font-weight: 500;
        margin: 10px 0;
        color: #fff;
        text-align: justify;
      }
      @media (max-width: 840px){
        margin: 0 auto;
        max-width: 90%;

        iframe{
          width: auto;
        }
      }
    }
  }
`;

export const OurStory = styled.div`
  background-color: #191A1A;
  padding: 15px;
  padding-bottom: 25px;
  overflow: hidden;

  h1 {
    color: #fff;
    font-family: "Palanquin Dark";
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
  .storyContent{
    width: 100%;
    margin-top: 20px;

    .imageWrapper{
      width: 100%;
      max-width: 400px;
      height: 210px;
      float: left;
      margin-right: 20px;
      overflow: hidden;
      position: relative;
      
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100%;
        transition: 0.2s;
        z-index: 1;

        &.active{
          top: 0;
          z-index: 2;
        }
      }
    }

    p{
      width: 100%;
      color: #fff;
      font-family: "Montserrat";

      span{
        text-decoration: underline;
        color: #DB8E1B;
        font-weight: 600;
        cursor: pointer;

        &:hover{
        color: #aa7018;
        }
      }
    }
    @media (max-width: 840px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 0;
      text-align: justify;

      .imageWrapper{
        margin: 0;
      }

      p{
        margin-top: 15px;
      }
    }
  }
  
`;

export const Portfolio = styled.div`
  padding: 20px 40px;
  background-color: #1F1F1F;
  
  h3{
    color: #fff;
    font-family: "Palanquin Dark";
    font-size: 35px;
  }
  
  .imgCard{
    display: inline-block;
    width: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .backgroundImg{
      width: 100%;
      transition: 0.1s;
    }
    .textImg{
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      transition: 0.3s;
      width: 50%;
      opacity: 0;
    }

    &:hover{
      .backgroundImg{
        filter: brightness(0.5);
      }
      .textImg{
        opacity: 1;
      }
    }
    @media (max-width: 500px) {
      display: table-header-group;
    }
  }
  .gamesWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .miniCard {
      display: inline-block;
      width: 30%;
      height: 15vw;
      margin: 10px 5px;

      .backgroundImg{
        height: 100%;
      }
    }
    @media (max-width: 500px) {
      .miniCard {
        width: 45%;
        height: 20vw;
      }
    }
    @media (max-width: 370px) {
      .miniCard {
        width: 100%;
        height: 40vw;
      }
    }
  }
`;

export const Contact = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    display: block;
  }
  .textWrapper{
    position: absolute;
    width: 60%;
    left: 5%;
    top: 10%;
    background-color: rgba(30,30,30,0.5);
    padding: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-family: "Palanquin Dark";
      font-size: 35px;
      padding: 0px 50px;
      background: #A63033;
      display: inline-block;
      margin-bottom: 15px;
    }
    p{
      font-family: "Montserrat";
      text-align: center;
    }
  }
  @media (max-width: 840px) {
    display: flex;
    img{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  .textWrapper{
    margin: 20px auto;
    position: inherit;
    left: 0;
    top: 0;
    width: 80%;
    h2{
      font-size: 25px;
    }
    p{
      font-size: 13px;
    }
  }

  }
`;

export const News = styled.div`
  background-color: #1F1F1F;
  padding: 20px 40px;
  color: #fff;

  h2 {
    font-family: "Palanquin Dark";
    font-size: 35px;
  }

  .newsCard{
    display: flex;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;

    img {
      width: 20%;
    }

    .newsContent{
      padding: 5px 15px;
      font-family: "Montserrat";
      h4 {
        font-weight: 600;
        text-decoration: underline;
        color: #fff;
      }
      p{
        margin-top: 5px;
        font-weight: 400;
        font-size: 13px;
        color: #fff;
      }
    }
    &:hover{
      background-color: #2B2B2B;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }
  .moreInfos {
    font-family: "Palanquin Dark";
    font-size: 25px;
    padding: 0px 30px;
    background: #A63033;
    display: table;
    margin: 15px auto;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    color: #fff;

    &:hover{
      background-color: #792527;
    }
  }
`;

export const FooterComponent = styled.div`
  padding: 20px;
  background-color: #2B2B2B;
  font-family: "Montserrat";
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
    color: #FFF;

    &:hover{
      color: #ff0000;
    }
  }
  p{
    font-size: 12px;
    display: block;
    width: 100%;
    color: #fff;
  }
`;