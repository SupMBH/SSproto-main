import PropTypes from 'prop-types';
import ScoreChartComponent from "./ScoreChartComponent";

/**
 * displays the user's score
 * @param {object} { data }
 * @returns {JSX.Element}
 */
const ScoreChart = ({ data }) => {
    if (data === null) return <p>Données de score non disponibles</p>;

    return <ScoreChartComponent data={data} />;
};

ScoreChart.propTypes = {
    data: PropTypes.number.isRequired,
};

export default ScoreChart;

