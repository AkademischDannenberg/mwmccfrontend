import React from 'react'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    extendTheme,
    Heading,
    Image,
    Button
} from '@chakra-ui/react';

import { FaHeart, FaMoneyBill } from 'react-icons/fa';


export default function Offer({ name, description, price, kms, image }) {
    return (
        <Box w={'100%'} bg={'gray.900'} p={'40px'} borderRadius={'20px'} my={{ base: '5px', md: '20px', lg: '20px' }}>
            <Grid templateColumns={{ base: '1fr', md: '6fr 12fr 2fr', lg: '6fr 12fr 2fr' }} gap={2}>
                <Box>
                    <Image src={image} maxW={'100%'} borderRadius={'20px'} />
                </Box>
                <Box px={5}>
                    <Heading fontSize={'30px'}>{name}</Heading>
                    <Text>{description}</Text>
                    <Text fontWeight={600}>Kilometerstand: {kms} km</Text>
                </Box>
                <Box>
                    <Button colorScheme={'orange'} w={'100%'} fontWeight={900} my={2}><FaMoneyBill style={{ marginRight: 5 }} /> {price} €</Button>
                    <Button colorScheme={'gray'} w={'100%'}><FaHeart style={{ marginRight: 5 }} /> Parken</Button>
                </Box>
            </Grid>
        </Box>
    )
}
