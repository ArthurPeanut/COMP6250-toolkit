import React from "react";
import Pic from "../figure1.png"
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


export const ResultPage = () => {

    const location = useLocation();
    console.log(location);
    const answer = location.pathname;
    // /result/name/1
    var reg = /\d+/
    console.log(reg.test(answer));
    const answers = answer.match(/\/result\/(\d+)/);
    console.log("answer:" + answers[1]);
    var answerRecord = new Array();
    var i = 0;
    var decoy = Number(answers[1]);
    console.log(decoy);
    while (decoy > 0) {
        var tmp = decoy % 10;
        answerRecord[i] = tmp;
        i++;
        decoy /= 10;
        decoy = parseInt(decoy);
    }

    var interest = (answerRecord[1] + answerRecord[3] + answerRecord[4] + answerRecord[8] + answerRecord[9]
        + answerRecord[10]) / 6;

    var power = answerRecord[0];
    for (var index = 2; index <= 7; index++) {
        power += answerRecord[index];
    }
    power /= 7;

    console.log(answerRecord[0]);
    console.log(answerRecord[1]);

    const options = {
        aspectRatio: 1,
        scales: {
            x: {
                beginAtZero: true,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 0.5,
                    callback: function (index) {
                        if (index === 0) {
                            return "Low";
                        }
                        if (index === 2.5) {
                            return "Interest";
                        }
                        if (index === 5) {
                            return "High";
                        }
                        return "";
                    }
                }
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 5,
                ticks: {
                    callback: function (index) {
                        if (index === 0) {
                            return "Low";
                        }
                        if (index === 2.5) {
                            return "Power";
                        }
                        if (index === 5) {
                            return "High";
                        }
                        return "";
                    }
                }
            },
        },
    };

    const data = {
        datasets: [
            {
                label: 'Your Position',
                data: Array.from({ length: 1 }, () => ({
                    x: interest,
                    y: power,
                })),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    let comment;
    if (power < 2.5 && interest < 2.5) {
        comment = <p> You should be a monitor, who pays minimum effort. </p>
    } else if (2.5 <= power && interest < 2.5) {
        comment = <p> Due to your high power, you are expected to be kept satisfied. </p>
    } else if (power < 2.5 && 2.5 <= interest) {
        comment = <p> Due to your high interest, you are expected to be kept informed. </p>
    } else {
        comment = <p> You should manage the project closely! </p>
    }

    return (
        <div>
            This is your result! <br></br>
            {comment}
            <Scatter options={options} data={data} />
        </div>
    );
}