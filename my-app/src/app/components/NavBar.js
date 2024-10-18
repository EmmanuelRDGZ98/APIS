
import {Button} from "@mui/material";
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { purple, red } from '@mui/material/colors'
import Link from "next/link";

function navbar() {
    const primary = red[500]; // #f44336
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                '& > *': {
                    m: 2,
                },
            }}
        >
            <ButtonGroup color="primary" variant="text" aria-label="Basic button group" size="large">
                <Link href='../maps'><Button>Mapas</Button></Link>
                <Link href='../login'><Button>Login</Button></Link>
                <Link href='../pokemon'><Button>Pokemon</Button></Link>
                <Link href='../perritos'><Button>Perritos</Button></Link>
                <Button>Logout</Button>
            </ButtonGroup>
        </Box>
    );
}

export default navbar;