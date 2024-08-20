import React, { useState } from 'react';
import './TemperatureConverter.css';

function format(number: any) {
    return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

const TemperatureConverter: React.FC = () => {
    const [celsius, setCelsius] = useState('');
    const [farenheit, setFarenheit] = useState('');

    function convert(value: number, setDestination: any, calculateValue: any) {
        const numericValue = Number(value);
        const isValid = !Number.isNaN(numericValue) && Boolean(value);
        setDestination(isValid ? format(calculateValue(numericValue)) : '');
    }

    return (
        <>
            <div className='temperature-converter'>
                <label className='temperature-converter-column'>
                    <input
                        className='temperature-converter-column-top-row'
                        type='number'
                        value={celsius}
                        onChange={(event) => {
                            const newValue = event.target.value;
                            setCelsius(newValue);
                            convert(Number(newValue), setFarenheit, (value: number) => (value * 9) / 5 + 32)
                        }}
                    />
                    <div className='temperature-converter-column-bottom-row'>celsius</div>
                </label>

                <div className='temperature-converter-column'>
                    <div className='temperature-converter-column-top-row'>=</div>
                </div>

                <label className='temperature-converter-column'>
                    <input
                        className='temperature-converter-column-top-row'
                        type='number'
                        value={farenheit}
                        onChange={(event) => {
                            const newValue = event.target.value;
                            setFarenheit(newValue);
                            convert(
                                Number(newValue),
                                setCelsius,
                                (value: number) => ((value - 32) * 5) / 9,
                            );
                        }}
                    />
                    <div className='temperature-converter-column-bottom-row'>
                        Farenheit
                    </div>
                </label>
            </div>
        </>
    );
};

export default TemperatureConverter;
