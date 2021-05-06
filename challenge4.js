
const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
    let total = totalSeats(firstRowSeatsNumber);
    let percentage = Math.round((bookedSeats / total) * 100) + " %";

    return percentage;
}


const totalSeats = (value) => {
    let sequence = aSequence(value);
    let sum = ((sequence[0] + sequence[sequence.length - 1]) * (sequence.length)) / 2;

    return sum;
}



const aSequence = (value) => {
    let sequence = [value];
    let length = value;
    for (let i = 0; i < length - 1; i++) {
        sequence.push(sequence[i] - 1)
    }

    return sequence;
}



console.log(calculateSeatsBookingPercentage(7, 7));
console.log(calculateSeatsBookingPercentage(10, 20));