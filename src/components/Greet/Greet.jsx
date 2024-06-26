import PropTypes from 'prop-types'
import styled from 'styled-components'
import style from '../Greet/Greet.module.css'

/**
 * displays user's greeting
 * @param {string} name
 * @returns {JSX.Element}
 */

const Greet = ({name}) => {

    return (
        <>
            <header className={style.greetHeader}>
                <h1>Bonjour <StyledName>{name}</StyledName></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </header>
        </>
    )
}

Greet.propTypes = {
    name: PropTypes.string,
}

const StyledName = styled.span`
    color: #FF0101;
`

export default Greet