import React, { useEffect, useState } from 'react'
import Offer from './Offer';
import {
    Box,
    Text,
    Heading,
} from '@chakra-ui/react';
import { Fade } from "react-awesome-reveal";

export default function Offers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // fetch data initially
        fetchOffers();

        // poll every 10 seconds
        const interval = setInterval(() => {
            fetchOffers();
        }, 2000);

        // cleanup function to clear interval
        return () => clearInterval(interval);
    }, []);

    const fetchOffers = () => {
        fetch('http://127.0.0.1:8000/api/offers')
            .then((response) => response.json())
            .then((data) => setOffers(data));
    };

    return (
        <>
            <Heading>Inserate</Heading>
            <Text>Hier siehst du alle aktuellen Inserate</Text>
            <Box my={'20px'}>
                {offers.sort(function (a, b) {
                    return new Date(b.created_at) - new Date(a.created_at);
                }).map(offer => (
                    <Fade key={offer.id}>
                        <Offer
                            name={offer.name}
                            description={offer.description}
                            price={offer.price}
                            kms={offer.kms}
                            image={offer.image}
                        />
                    </Fade>

                ))}
            </Box>
        </>

    )
}
