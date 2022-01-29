import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from './index'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const CalTextArea = () => {
    const textareaSelector = useSelector((state: RootState) => state.textareavalue)
    //console.log(textareaSelector)
    const firsttextareaSelector = useSelector((state: RootState) => state.firstLineTextArea)
    //console.log("" + firsttextareaSelector + textareaSelector)
    //console.log(firsttextareaSelector)
    return (
        <TextareaAutosize value={firsttextareaSelector + "\n" + textareaSelector} style={{ width: "100%" }}/>
    )
}

export default CalTextArea;