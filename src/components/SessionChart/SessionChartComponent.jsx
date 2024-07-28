import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import style from "../SessionChart/SessionChart.module.css";

const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={style.customTooltip}>
                <p>{payload[0].value}min</p>
            </div>
        );
    }
    return null;
};

const SessionChartComponent = ({ data }) => {
    if (!data.length) return <p>Données des sessions non disponibles</p>;

    return (
        <div className={style.sessionContainer}>
            <h2 className={style.sessionTitle}>
                Durée moyenne des<br />
                sessions
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 0, left: 15, right: 15, bottom: 10 }}>
                    <XAxis dataKey="day" stroke="#ffffff" tickline={false} axisline={false} tick={{ fontSize: 12, fontWeight: 500, }} />
                    <YAxis hide={true} domain={[0, "dataMax + 30"]} />
                    <Tooltip content={<CustomToolTip />} wrapperStyle={{ outline: "none" }} />
                    <Line type="monotone" dataKey="sessionLength" unit="min" stroke="#ffffff" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SessionChartComponent;
