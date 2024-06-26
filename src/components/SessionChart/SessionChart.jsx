import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { AllData } from "../../service/allData"
import style from "../SessionChart/SessionChart.module.css"
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts"

/**
 * displays user's session line chart
 * @param {number} userId to useParams method
 * @param {array} data
 * @returns {JSX.Element}
 */

const SessionChart = () => {

    const {userId} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = async () => {
            const calling = await AllData("UserSessions", parseInt(userId))
            const mappedData = calling.data.sessions.map((data) => {
                switch (data.day) {
                    case 1:
                        return { ...data, day: "L" }
                    case 2:
                        return { ...data, day: "M" }
                    case 3:
                        return { ...data, day: "M" }
                    case 4:
                        return { ...data, day: "J" }
                    case 5:
                        return { ...data, day: "V" }
                    case 6:
                        return { ...data, day: "S" }
                    case 7:
                        return { ...data, day: "D" }
                    default:
                        return { ...data }
                }
            })
            setData(mappedData)
        }
        data()  
    }, [userId])

    if (data.length === 0) return(
        <p>Données des sessions non disponibles</p>
    )

    const CustomToolTip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className={style.customTooltip}>
                    <p>{payload[0].value}min</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className={style.sessionContainer}>
            <h2 className={style.sessionTitle}>
                Durée moyenne des<br />
                sessions
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 0, left: 15, right: 15, bottom: 10 }}>
                    <XAxis dataKey="day" stroke="#ffffff" tickline={false} axisline={false} tick={{ fontSize: 12, fontWeight: 500, }}/>
                    <YAxis hide={true} domain={[ 0, "dataMax + 30" ]}/>
                    <Tooltip content={<CustomToolTip />} wrapperStyle={{ outline: "none" }}/>
                    <Line type="monotone" dataKey="sessionLength" unit="min" stroke="#ffffff" strokeWidth={2} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SessionChart