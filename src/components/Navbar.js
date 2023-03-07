import { React, useState } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { FaBars, FaHamburger, FaSignInAlt, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa';
import { useSanctum } from "react-sanctum";

const LoginButton = () => {
    const { authenticated, user, signIn, signOut } = useSanctum();
    const [loggedIn, setLoggedIn] = useState(authenticated);

    const handleLogin = () => {
        const email = "david.dannenberg@unibw.de";
        const password = "123";

        signIn(email, password)
            .then(() => setLoggedIn(true))
            .catch(err => console.log('loginerror', err));
    };

    const handleLogout = () => {
        signOut().then(() => setLoggedIn(false))
            .catch(err => console.log('logouterror', err));
    }

    if (loggedIn === true) {
        return (
            <>
                <Flex alignItems={'center'}>
                    <Menu>
                        <Button
                            onClick={handleLogout}
                            colorScheme={'orange'}>
                            <FaSignOutAlt style={{ marginRight: 5 }} /> Logout
                        </Button>
                    </Menu>
                </Flex>
            </>
        );
    } else {
        return (
            <>
                <Flex alignItems={'center'}>
                    <Menu>
                        <Button
                            onClick={handleLogin}
                            colorScheme={'orange'}>
                            <FaSignInAlt style={{ marginRight: 5 }} /> Login
                        </Button>
                    </Menu>
                </Flex>
            </>
        );
    }
};
const Links = ['Inserate', 'Mein Parkplatz'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <FaTimes /> : <FaBars />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Raubmobil.de</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <LoginButton></LoginButton>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}