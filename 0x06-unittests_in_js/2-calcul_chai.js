function calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    let result;

    switch (type) {
        case 'SUM':
            result = roundA + roundB;
            break;
        case 'SUBTRACT':
            result = roundA - roundB;
            break;
        case 'DIVIDE':
            if (roundB === 0) {
                return 'Error';
            }
            result = roundA / roundB;
            break;
        default:
            throw new Error(`Unsupported operation ${ type } please use 'SUM' | 'SUBTRACT' | 'DIVIDE' instead`);
    }
    return result;
}

module.exports = calculateNumber;