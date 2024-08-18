import React, { useState } from 'react';
import './FlightBooker.css';

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

function formatDate(date: any) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return [year, month, day].join('-');
}

const FlightBooker: React.FC = () => {
    const [flightOption, setFlightOption] = useState<string>('one-way');
    const [departureDate, setDepartureDate] = useState(
        formatDate(new Date(Date.now() + DAY_IN_SECONDS))
    );
    const [returnDate, setReturnDate] = useState(departureDate);

    const submitForm = (event: any) => {
        event.preventDefault();
        if (flightOption === 'one-way') {
            alert(`You have booked a flight on ${departureDate}`);
            return;
        }

        alert(`You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`);
    };

    return (
        <>
            <form className='flight-booker' onSubmit={submitForm}>
                <select
                    value={flightOption}
                    onChange={(event) => {
                        setFlightOption(event.target.value);
                    }}
                >
                    <option value='one-way'>One-way Flight</option>
                    <option value='return'>Return Flight</option>
                </select>
                <input
                    type='date'
                    value={departureDate}
                    onChange={(event) => {
                        setDepartureDate(event.target.value);
                    }}
                    min={TODAY}
                />

                {flightOption === 'return' && (
                    <input
                        type='date'
                        value={returnDate}
                        min={departureDate}
                        onChange={(event) => {
                            setReturnDate(event.target.value);
                        }}
                    />
                )}

                <button>Book</button>
            </form>
        </>
    );
};

export default FlightBooker;
