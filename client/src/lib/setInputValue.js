const setInputValue = (e, setValueFunction) => {
    const { value } = e.target;
    setValueFunction(value);
};

export default setInputValue;
