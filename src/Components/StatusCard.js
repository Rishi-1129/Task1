import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PeopleIcon from '@mui/icons-material/People';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#F5F5F5',
        borderRadius: '10px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxwidth: 20, 
        maxHeight: 40, 
        border: '1px solid #DEDEDE',
    },
    cardTitle: {
        fontSize: '1rem',
        fontWeight: 'bold',

    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'left',

    },
    icon: {
        fontSize: '1.5rem',
        color: '#000000',
    },
    value: {
        fontSize: '1.25rem',
    },
}));

function StatusCard({ title, value, icon }) {
    const classes = useStyles();

    return (
        <Grid item xs={14} md={3} >
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Box className={classes.iconContainer}>
                        {icon}
                        <Typography className={classes.cardTitle}>{title}</Typography>
                    </Box>
                    <Typography className={classes.value}>{value}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

function StatusCards() {
    const classes = useStyles();
    return (
        <Grid container spacing={1} marginTop={2} sx={{ backgroundColor: 'transparent' }}>
            <StatusCard title="Total Customers" value="0" icon={<PeopleIcon className={classes.icon} />} />
            <StatusCard title="Active Customers" value="0" icon={< HowToRegOutlinedIcon className={classes.icon} />} />

            <StatusCard title="Credit Customers" value="0" icon={<CurrencyRupeeOutlinedIcon className={classes.icon} />} />
            <StatusCard title="Cash In Advance" value="0" icon={<CurrencyRupeeOutlinedIcon className={classes.icon} />} />
        </Grid>
    );
}

export default StatusCards;
