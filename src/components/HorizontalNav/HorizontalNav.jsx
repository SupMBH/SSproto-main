import logo from '../../assets/sportsee_logo.svg'
import style from '../HorizontalNav/HorizontalNav.module.css'
import { Link } from 'react-router-dom'

/**
 * display horizontal navbar
 * @returns {JSX.Element}
 */

const HorizontalNav = () =>{
    return(
        <>
            <header className={style.horizontalNavBar}>
                <img src={logo} alt='SportSee logo'></img>
                <div className={style.direction}>
                    <Link className={style.linkTo} to='/'>Accueil</Link>
                    <Link className={style.linkTo} to='*'>Profil</Link>
                    <Link className={style.linkTo} to='*'>Réglage</Link>
                    <Link className={style.linkTo} to='*'>Communauté</Link>
                </div>
            </header> 
        </>
    )
}

export default HorizontalNav