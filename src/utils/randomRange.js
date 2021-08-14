const randomRange = (minVal = 0, maxVal = 3) => {
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
};

export default randomRange;