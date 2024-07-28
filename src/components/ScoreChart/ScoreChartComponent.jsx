import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';
import style from '../ScoreChart/ScoreChart.module.css';

const ScoreChartComponent = ({ data }) => {
    const result = data * 100;
    const score = [{ value: result, fill: "#FF0000" }];

    return (
        <div className={style.scoreContainer}>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart data={score} innerRadius={85} startAngle={90} endAngle={450}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius="100%" />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className={style.scoreText}>
                <p>
                    {result}%
                    <br />
                    de votre
                    <br />
                    objectif
                </p>
            </div>
        </div>
    );
};

ScoreChartComponent.propTypes = {
    data: PropTypes.number.isRequired,
};

export default ScoreChartComponent;
