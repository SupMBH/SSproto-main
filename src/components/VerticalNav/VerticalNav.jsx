import style from '../VerticalNav/VerticalNav.module.css'
import yoga_icon from '../../assets/yoga_icon.svg'
import swim_icon from '../../assets/swim_icon.svg'
import bike_icon from '../../assets/bike_icon.svg'
import weight_icon from '../../assets/weight_icon.svg'

const VerticalNav = () =>{
    return (
        <>
            <aside className={style.side}>
                <div className={style.sideContent}>
                    <nav>
                        <img src={yoga_icon} alt='yoga'></img>
                        <img src={swim_icon} alt='nage'></img>
                        <img src={bike_icon} alt='vélo'></img>
                        <img src={weight_icon} alt='musculation'></img>
                    </nav>
                    <span>Copyright, SportSee 2020</span>
                </div>
            </aside>
        </>
    )
}

export default VerticalNav