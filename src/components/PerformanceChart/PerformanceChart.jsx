import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import { AllData } from "../../service/allData"
import style from "../PerformanceChart/PerformanceChart.module.css"

/**
 * displays user's performance radar chart
 * @param {number} userId to useParams method
 * @param {array} data
 * @returns {JSX.Element}
 */

const PerformanceChart = () => {

    const { userId } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = async () => {
            const calling = await AllData("UserPerformance", parseInt(userId))
            const mappedData = calling.data.data.map((data) => {
                switch (data.kind) {
                    case 1:
                        return { ...data, kind: "Cardio" }
                    case 2:
                        return { ...data, kind: "Energie" }
                    case 3:
                        return { ...data, kind: "Endurance" }
                    case 4:
                        return { ...data, kind: "Force" }
                    case 5:
                        return { ...data, kind: "Vitesse" }
                    case 6:
                        return { ...data, kind: "Intensité" }
                    default:
                        return { ...data }    
                }
            })
            setData(mappedData)    
        }
        data()
    }, [userId])
    if (data.length === 0) return(
        <p>Données des performances non disponibles</p>
    )

    return (
        <div className={style.performanceContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceChart