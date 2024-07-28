import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllData } from "../../service/allData";
import BarChartComponent from "./BarChartComponent";

const BarBoard = () => {
    const { userId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const calling = await AllData("UserActivity", parseInt(userId));
                setData(calling.data.sessions);
            } catch (error) {
                console.error('Erreur lors de la récupération des données d\'activité', error);
            }
        };
        fetchData();
    }, [userId]);

    return <BarChartComponent data={data} />;
};

export default BarBoard;
