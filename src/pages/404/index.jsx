import HorizontalNav from "../../components/HorizontalNav/HorizontalNav";
import VerticalNav from "../../components/VerticalNav/VerticalNav";
import style from "../404/404.module.css"

/**
 * returns React components which displays 404 page
 * @returns {JSX.Element}
 */

const PageNotFound = () =>{
    return(
        <>
            <HorizontalNav />
            <VerticalNav/>
            <div className={style.errorPage}>
                <h1 className={style.error}>404</h1>
                <p>Ooops! page non disponible...</p>
                <p>Nous nous excusons pour la gêne occasionnée...</p>
            </div>
        </>
    )
}

export default PageNotFound