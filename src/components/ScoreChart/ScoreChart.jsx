import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllData } from "../../service/allData";
import ScoreChartComponent from "./ScoreChartComponent";

const ScoreChart = () => {
    const { userId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const calling = await AllData("UserScore", parseInt(userId));
                setData(calling.data.todayScore || calling.data.score);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de score', error);
            }
        };
        fetchData();
    }, [userId]);

    return data !== null ? <ScoreChartComponent data={data} /> : <p>Données de score non disponibles</p>;
};

export default ScoreChart;
