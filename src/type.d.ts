interface INumberButtonType {
    numbers: string;
    backgroundColor?: string
}
type showNumberAction = {
    type: string
    payload: string
}

type appState = {
    textareavalue: string,
    firstLineTextArea: string,
    
}