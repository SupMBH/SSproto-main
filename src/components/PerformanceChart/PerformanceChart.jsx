import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllData } from "../../service/allData";
import PerformanceChartComponent from "./PerformanceChartComponent";

const PerformanceChart = () => {
    const { userId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const calling = await AllData("UserPerformance", parseInt(userId));
                const mappedData = calling.data.data.map((data) => {
                    switch (data.kind) {
                        case 1:
                            return { ...data, kind: "Cardio" };
                        case 2:
                            return { ...data, kind: "Energie" };
                        case 3:
                            return { ...data, kind: "Endurance" };
                        case 4:
                            return { ...data, kind: "Force" };
                        case 5:
                            return { ...data, kind: "Vitesse" };
                        case 6:
                            return { ...data, kind: "Intensité" };
                        default:
                            return { ...data };
                    }
                });
                setData(mappedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de performance', error);
            }
        };
        fetchData();
    }, [userId]);

    return <PerformanceChartComponent data={data} />;
};

export default PerformanceChart;
