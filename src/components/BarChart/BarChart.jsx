import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllData } from "../../service/allData";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import style from "../BarChart/BarChart.module.css"

/**
 * displays the user's activity bar chart
 * @param {array} data
 * @param {number} userId to useParams method
 * @returns {JSX.Element}
 */

const BarBoard = () =>{

    const {userId} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = async () => {
            const calling = await AllData("UserActivity", parseInt(userId))
            setData(calling.data.sessions)
        }
        data();
    }, [userId])

    for(let i = 0; i < data.length; i++) {
        data[i].index = i + 1
    }

    if (data.length === 0) return(
        <p>Données des activités non disponible</p>
    )

    return (
        <div className={style.barContainer}>
            <div className={style.barTop}>
                <p className={style.barTitle}>Activité quotidienne</p>
                <div className={style.barLegend}>
                    <p className={style.weight}>Poids (Kg)</p>
                    <p className={style.burned}>Calories brûlées (kCal)</p>
                </div>
            </div>
            <div>
                <ResponsiveContainer height={200}>
                    <BarChart barGap={8} barCategoryGap={1} data={data}>
                        <CartesianGrid vertical={false} strokeDasharray="1 1" />
                        <XAxis dataKey="index" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                        <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                        <Tooltip />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )

}

export default BarBoard