const showNumberAction = (payloadvalue: string) => {
    return {
        type: 'SHOW_NUMBER',
        payload: payloadvalue
    }
}
export default showNumberAction;