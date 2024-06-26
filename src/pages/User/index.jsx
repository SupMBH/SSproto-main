//Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//Service
import { AllData } from "../../service/allData";
//Components
import HorizontalNav from "../../components/HorizontalNav/HorizontalNav";
import VerticalNav from "../../components/VerticalNav/VerticalNav";
import Greet from "../../components/Greet/Greet";
import BarBoard from "../../components/BarChart/BarChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import SessionChart from "../../components/SessionChart/SessionChart";
import Tag from "../../components/Tag/Tag";
//Icons
import calories_icon from "../../assets/calories_icon.svg"
import carbs_icon from "../../assets/carbs_icon.svg"
import lipids_icon from "../../assets/lipids_icon.svg"
import proteins_icon from "../../assets/proteins_icon.svg"
//CSS module
import style from "../User/User.module.css"

/**
 * returns a React component which displays User page
 * @param {number} userId to useParams method
 * @returns {JSX.Element}
 */

const User = () => {

    const {userId} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = async () => {
            const calling = await AllData( "UserInfos", parseInt(userId))
            setData(calling.data)
        }
        data()
    }, [userId])

    if (data.length === 0) return(
        <>
            <HorizontalNav/>
            <VerticalNav/>
            <div className={style.notFound}>
                <h1>Données de profile non disponibles</h1>
                <p>Veuillez nous excusez de la gêne occasionnée...</p>
            </div>
        </>
    )

    return(
        <>
            <HorizontalNav/>
            <VerticalNav/>
            <Greet name={data.userInfos?.firstName}/>
            <main className={style.dashboard}>
                <div>
                    <BarBoard />
                    <div className={style.bottomChart}>
                        <SessionChart />
                        <PerformanceChart />
                        <ScoreChart data={data.todayScore || data.score}/>
                    </div>
                </div>
                <aside className={style.countContainer}>
                    <Tag
                        icon={calories_icon}
                        alt="icone calories"
                        count={`${data.keyData?.calorieCount}kCal`}
                        category="Calories"
                    />
                    <Tag
                        icon={proteins_icon}
                        alt="icone proteines"
                        count={`${data.keyData?.proteinCount}g`}
                        category="Protéines"
                    />
                    <Tag
                        icon={carbs_icon}
                        alt="icone glucides"
                        count={`${data.keyData?.carbohydrateCount}g`}
                        category="Glucides"
                    />
                    <Tag
                        icon={lipids_icon}
                        alt="icone lipides"
                        count={`${data.keyData?.lipidCount}g`}
                        category="Lipides"
                    />
                </aside>
            </main>
        </>
    )
}

export default User