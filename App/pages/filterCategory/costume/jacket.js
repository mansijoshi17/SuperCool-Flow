import React, { useState } from "react";
import StandardDropdown from "../../standardDropdown/dropdown";
import { Button } from "@mui/material";
import axios from "axios";
import { SupercoolAuthContext } from "../../../context/supercoolContext";
const JacketCostume = () => {

    const superCoolContext = React.useContext(SupercoolAuthContext);
    const { setPrompt } = superCoolContext;
    const [designStyle, setDesignStyle] = useState(designStyle || 'design style');
    const [jacketStyle, setJacketStyle] = useState(jacketStyle || 'jacket style');
    const [jacketLength, setJacketLength] = useState(jacketLength || 'jacket length');
    const [pocketStyle, setPocketStyle] = useState(pocketStyle || 'pocket style');
    const [jacketColor, setJacketColor] = useState(jacketColor || 'color');
    const [jacketPattern, setJacketPattern] = useState(jacketPattern || 'pattern');



    let detailPrompt = `Rewrite the prompt and add some more lines from you, giving it greater emphasis with more details, to create costume Jacket based on this information:- make sure image style will be ${designStyle}, jacket type:${jacketStyle}, jacket color:${jacketColor},jacket length:${jacketLength}$,jacket pockets should be ${pocketStyle} and there should be ${jacketPattern} pattern on jacket and Remember to infuse the avatar with vitality and energy`
    const generateText = async () => {
        console.log(detailPrompt);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/text-davinci-003/completions',
                {
                    prompt: detailPrompt,
                    max_tokens: 700,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data.choices[0].text);
            setPrompt(response.data.choices[0].text);
            //   setText(response.data.choices[0].text);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const designStyleOptionsText = [
        {
            id: 1,
            text: 'Modern',
        },
        {
            id: 2,
            text: 'Futuristic',
        },
    ];

    const jacketStyleOptionsText = [
        {
            id: 1,
            text: 'Bomber jacket',
        },
        {
            id: 2,
            text: 'Blazer',
        },
        {
            id: 3,
            text: 'Hooded jacket',
        },
        {
            id: 4,
            text: 'Leather jacket',
        },
        {
            id: 5,
            text: 'Windbreaker',
        },
        {
            id: 6,
            text: 'Denim jacket',
        },
        {
            id: 7,
            text: 'Moto jacket',
        },
        {
            id: 8,
            text: 'Pea coat',
        },
    ];

    const jacketLengthOptionsText = [
        {
            id: 1,
            text: 'Short',
        },
        {
            id: 2,
            text: 'Medium',
        },
        {
            id: 3,
            text: 'Long',
        },

    ];

    const pocketStyleOptionsText = [
        {
            id: 1,
            text: 'Flap pockets',
        },
        {
            id: 2,
            text: 'Welt pockets',
        },
        {
            id: 3,
            text: 'Patch pockets',
        },
        {
            id: 4,
            text: 'Zippered pockets',
        },
    ];
    const jacketColorOptionsText = [
        {
            id: 1,
            text: 'Red',
        },
        {
            id: 2,
            text: 'Blue',
        },
        {
            id: 3,
            text: 'Black',
        },
        {
            id: 4,
            text: 'Grey',
        },
        {
            id: 5,
            text: 'Pink',
        },
    ];
    const patternOptionsText = [
        {
            id: 1,
            text: 'Camouflage',
        },
        {
            id: 2,
            text: 'Animal',
        },
        {
            id: 3,
            text: 'flower',
        },
        {
            id: 4,
            text: 'funky',
        },
        {
            id: 5,
            text: 'Polka dots',
        },
    ];



    return (
        <>
            <div className="categories-scroll">
                <StandardDropdown
                    dropdownItemText={designStyleOptionsText}
                    state={designStyle}
                    setState={setDesignStyle}
                />

                <StandardDropdown
                    dropdownItemText={jacketStyleOptionsText}
                    state={jacketStyle}
                    setState={setJacketStyle}
                />

                <StandardDropdown
                    dropdownItemText={jacketLengthOptionsText}
                    state={jacketLength}
                    setState={setJacketLength}
                />

                <StandardDropdown
                    dropdownItemText={pocketStyleOptionsText}
                    state={pocketStyle}
                    setState={setPocketStyle}
                />

                <StandardDropdown
                    dropdownItemText={jacketColorOptionsText}
                    state={jacketColor}
                    setState={setJacketColor}
                />

                <StandardDropdown
                    dropdownItemText={patternOptionsText}
                    state={jacketPattern}
                    setState={setJacketPattern}
                />


                <div style={{
                    // textAlign: "center" 
                    // , width: "100%" 
                }}>
                    <Button color="secondary" className="animate-gradient mb-5" onClick={generateText} variant="outlined" style={{
                        //  width: "100%", 
                        fontSize: "20px"
                    }} >Submit</Button>
                </div>

                
            </div>


        </>
    )
}

export default JacketCostume;