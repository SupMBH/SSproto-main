import React, { useState } from 'react';
import HorizontalNav from "../../components/HorizontalNav/HorizontalNav";
import VerticalNav from "../../components/VerticalNav/VerticalNav";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import style from "./Home.module.css";

const Home = () => {
  const [rotateKarl, setRotateKarl] = useState(false);
  const [rotateCecilia, setRotateCecilia] = useState(false);

  const handleRotateKarl = (e) => {
    e.preventDefault(); // Empêche la redirection immédiate pour voir l'effet
    setRotateKarl(!rotateKarl);
    setTimeout(() => {
      window.location.href = e.target.href; // Redirige après l'effet
    }, 500);
  };

  const handleRotateCecilia = (e) => {
    e.preventDefault(); // Empêche la redirection immédiate pour voir l'effet
    setRotateCecilia(!rotateCecilia);
    setTimeout(() => {
      window.location.href = e.target.href; // Redirige après l'effet
    }, 500);
  };

  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <div className={style.welcome}>
        <h1>Bienvenue sur la page d'accueil <StyledBrand>SportSee</StyledBrand></h1>
        <h2 className={style.quote}>L'application de coaching sportif</h2>
      </div>
      <div className={style.profileSection}>
        <p>UTILISATEURS :</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '150px' }}>
          <Link
            className={style.profileLink}
            to="/user/12"
            onClick={handleRotateKarl}
            style={{
              fontSize: '48px',
              transform: rotateKarl ? 'rotate(720deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s',
            }}
          >
            Karl
          </Link>
          <Link
            className={style.profileLink}
            to="/user/18"
            onClick={handleRotateCecilia}
            style={{
              fontSize: '48px',
              transform: rotateCecilia ? 'rotate(720deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s',
            }}
          >
            Cecilia
          </Link>
        </div>
      </div>
    </>
  );
};

const StyledBrand = styled.span`
  color: #FF0101;
`;

export default Home;
