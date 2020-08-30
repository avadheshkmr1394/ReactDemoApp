

export const DateFormat = {
    CastDate: (ts) => {
        ts = Number(ts); // cast it to a Number
        var date = new Date(ts)
        return date
    },
    castTime: (ms) => {
        let seconds = (ms / 1000);
        let minutes = parseInt(seconds / 60, 10);
        seconds = seconds % 60;
        let hours = parseInt(minutes / 60, 10);
        minutes = minutes % 60;
        let Time = hours +' Hrs '+ minutes + ' Minutes' 
        return Time
    }
}


