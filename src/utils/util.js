export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const romanNumberConverter = (romanNumber) => {
    const romanNumbers = {
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4
    }
    return romanNumbers[romanNumber];
};