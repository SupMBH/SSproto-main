import HorizontalNav from "../../components/HorizontalNav/HorizontalNav"
import VerticalNav from "../../components/VerticalNav/VerticalNav"
import { Link } from "react-router-dom"
import style from "../Home/Home.module.css"
import styled from "styled-components"

/**
 * return React components which displays the Home Page
 * @returns {JSX.Element}
 */

const Home = () =>{
    return(
        <>
            <HorizontalNav />
            <VerticalNav />
            <div className={style.welcome}>
                <h1>Bienvenue sur la page d'accueil <StyledBrand>SportSee</StyledBrand></h1>
                <h2 className={style.quote}>L'application de coaching sportif</h2>
            </div>
            <div className={style.profileSection}>
            <p>UTILISATEURS :</p>
                <Link className={style.profileLink} to='user/12'>Karl</Link><br />
                <Link className={style.profileLink} to='user/18'>Cecilia</Link>
            </div>
        </>
    )
}

const StyledBrand = styled.span`
    color: #FF0101;
`

export default Home