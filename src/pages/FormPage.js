import React, { Component, useState } from 'react';
import { SuccessButton } from '../Button';
import { Box, Slider, Stack } from '@mui/material';
import { Link, useHistory, Route } from 'react-router-dom';





export const FormPage = (props) => {


    const [name, setName] = useState('');
    const [A1, setA1] = useState('');
    const [A2, setA2] = useState('');
    const [A3, setA3] = useState('');
    const [A4, setA4] = useState('');
    const [A5, setA5] = useState('');
    const [A6, setA6] = useState('');
    const [A7, setA7] = useState('');
    const [A8, setA8] = useState('');
    const [A9, setA9] = useState('');
    const [A10, setA10] = useState('');
    const [A11, setA11] = useState('');


    let history = useHistory();
    let tocenter = () => {

        history.push(`/result/${A1}${A2}${A3}${A4}${A5}${A6}${A7}${A8}${A9}${A10}${A11}`);
    }

    return (
        <form>
            <h3>Please answer the questions below!</h3>
            <p>
                <br />
                Rate your answer on a scale of 1-5.
                <br />
            </p>

            <div>
                <p>
                    Q1: Your Influence on Key Project Decisions or Aspects <br />
                    (1-5, 1 for little influence, 5 for significant influence)
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A1}
                    onChangeCommitted={(e, newValue) => setA1(newValue)}
                />

            </div>

            <div>
                <p>
                    Q2: How Your Expertise or Experience Contributes to Your Influence?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A2}
                    onChangeCommitted={(e, newValue) => setA2(newValue)}
                />
            </div>

            <div>
                <p>
                    Q3: Instances Where Your Influence Resulted in Significant Project Outcomes or Changes?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A3}
                    onChangeCommitted={(e, newValue) => setA3(newValue)}
                />
            </div>

            <div>
                <p>
                    Q4: Your Interest in the Project?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A4}
                    onChangeCommitted={(e, newValue) => setA4(newValue)}
                />
            </div>

            <div>
                <p>
                    Q5: Potential Benefits for Yourself or Your Organization in the Project?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A5}
                    onChangeCommitted={(e, newValue) => setA5(newValue)}
                />
            </div>

            <div>
                <p>
                    Q6: Previous Involvement in Similar Projects or Fields?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A6}
                    onChangeCommitted={(e, newValue) => setA6(newValue)}
                />
            </div>

            <div>
                <p>
                    Q7: Alignment of Project's Goals and Vision with Your Expectations <br />
                    (1-5, 1 for barely aligned, 5 for perfectly aligned)?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A7}
                    onChangeCommitted={(e, newValue) => setA7(newValue)}
                />
            </div>

            <div>
                <p>
                    Q8: Suggestions or Improvements Regarding the Project's Direction or Execution <br />
                    (1-5, 0 for almost no suggestions, 5 for highly valuable suggestions)?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A8}
                    onChangeCommitted={(e, newValue) => setA8(newValue)}
                />
            </div>

            <div>
                <p>
                    Q9: Preferred Level of Information or Updates About the Project <br />
                    (1-5, 1 for minimal updates, 5 for detailed updates)?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A9}
                    onChangeCommitted={(e, newValue) => setA9(newValue)}
                />
            </div>

            <div>
                <p>
                    Q10: Specific Resources or Assets You Provide That Contribute to Your Influence?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A10}
                    onChangeCommitted={(e, newValue) => setA10(newValue)}
                />
            </div>

            <div>
                <p>
                    Q11: Desire to Be Directly Involved in Project Decision-Making or Provide Feedback <br />
                    (1-5, 1 for weak and 5 for strong desire)?
                </p>
                <Slider
                    size='medium'
                    valueLabelDisplay='on'
                    min={1}
                    max={5}
                    value={A11}
                    onChangeCommitted={(e, newValue) => setA11(newValue)}
                />
            </div>


            <SuccessButton onClick={tocenter}>
                <Link to={{ pathname: `/result/${A1}${A2}${A3}${A4}${A5}${A6}${A7}${A8}${A9}${A10}${A11}` }}>Submit</Link>
            </SuccessButton>
        </form>
    );
}