import style from "../Tag/Tag.module.css"
import PropTypes from "prop-types"

/**
 * display user's keydata
 * @param {string} icon
 * @param {string} alt
 * @param {string} count
 * @param {string} category
 * @returns {JSX.Element}
 */

const Tag = ({icon, alt, count, category}) => {
    return (
        <div className={style.tagContainer}>
            <img className={style.tagIcon} src={icon} alt={alt}/>
            <div>
                <p className={style.tagCount}>{count}</p>
                <p className={style.tagKind}>{category}</p>
            </div>
        </div>
    )
}

Tag.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    count: PropTypes.string,
    category: PropTypes.string,
}

export default Tag