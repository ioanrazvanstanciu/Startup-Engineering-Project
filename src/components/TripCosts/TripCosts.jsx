import React, {useState} from "react";
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import {
    PageContainer,
    Title,
    ImagesContainer,
    Image,
    InputsContainer,
    Input,
    Button,
    Link, ResultText
} from "./TripCosts.style.js";

export const TripCosts = () => {
    const [startingLocation, setStartingLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [result, setResult] = useState("");

    const handleCheckCost = () => {
        if (startingLocation && destination) {
            setResult("Your trip from:" + startingLocation + " to: " + destination + " will be: 100 euro");
            alert(`Calculating cost from ${startingLocation} to ${destination}`);
        } else {
            alert("Please enter both the starting location and destination.");
        }
    };

    return (
        <PageContainer>
            <Title>Plan Your Journey</Title>
            <InputsContainer>
                <Input
                    type="text"
                    placeholder="Starting Location"
                    value={startingLocation}
                    onChange={(e) => setStartingLocation(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <Button onClick={handleCheckCost}>Check Cost</Button>
                {result && <ResultText>{result}</ResultText>}
            </InputsContainer>
            <ImagesContainer>
                <Image src={pic1} alt="Map 1" />
                <Image src={pic2} alt="Map 2" />
            </ImagesContainer>
            <Link href="https://tollguru.com/toll-calculator-europe">Go to the calculator</Link>
        </PageContainer>
    );
};



