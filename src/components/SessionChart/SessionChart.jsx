import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AllData } from "../../service/allData";
import SessionChartComponent from "./SessionChartComponent";

const SessionChart = () => {
    const { userId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const calling = await AllData("UserSessions", parseInt(userId));
                const mappedData = calling.data.sessions.map((data) => {
                    switch (data.day) {
                        case 1:
                            return { ...data, day: "L" };
                        case 2:
                            return { ...data, day: "M" };
                        case 3:
                            return { ...data, day: "M" };
                        case 4:
                            return { ...data, day: "J" };
                        case 5:
                            return { ...data, day: "V" };
                        case 6:
                            return { ...data, day: "S" };
                        case 7:
                            return { ...data, day: "D" };
                        default:
                            return { ...data };
                    }
                });
                setData(mappedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de session', error);
            }
        };
        fetchData();
    }, [userId]);

    return <SessionChartComponent data={data} />;
};

export default SessionChart;
