import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import style from "../PerformanceChart/PerformanceChart.module.css";

const PerformanceChartComponent = ({ data }) => {
    if (!data.length) return <p>Données des performances non disponibles</p>;

    return (
        <div className={style.performanceContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChartComponent;
