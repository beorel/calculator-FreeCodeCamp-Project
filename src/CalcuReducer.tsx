import { Reducer } from "redux"

const initialState: appState = {
    textareavalue: "",
    firstLineTextArea: "",
};


const calculatorReducer: Reducer<appState, showNumberAction> = (state = initialState, action: showNumberAction) => {
    switch (action.type) {
        case 'SHOW_NUMBER':
            console.log("num =" + action.payload)

            if (action.payload == "=") {
                let newTextAreaValueState = eval(state.firstLineTextArea)
                return {
                    textareavalue: newTextAreaValueState,
                    firstLineTextArea: state.firstLineTextArea + "=" + newTextAreaValueState
                }
            }
            if (action.payload == "AC") {
                return {
                    textareavalue: "0",
                    firstLineTextArea: ""
                }
            }
            return {
                ...state,
                textareavalue: action.payload,
                firstLineTextArea: state.firstLineTextArea + action.payload,
            }
        default:
            return state;
    }
};
export default calculatorReducer;