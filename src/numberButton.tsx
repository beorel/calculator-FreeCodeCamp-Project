import React from 'react';
import { useDispatch } from 'react-redux';
import showNumberAction from './CalcuAction'
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const NumberButton = ({numbers, backgroundColor = grey[500]}: INumberButtonType) => {
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(showNumberAction(numbers))} variant="contained" sx={{ width: "100%", backgroundColor:backgroundColor, height: "100%" }}>
            {numbers}
        </Button>
    )
}

export default NumberButton
