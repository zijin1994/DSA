var merge = function(intervals) {
    // if (intervals.length === 1) return intervals[[0];

    let sortedIntervals = intervals.slice().sort((a, b) => (a[0] - b[0]));

    let result = [sortedIntervals[0]];
 
    for (let idx = 0; idx < sortedIntervals.length; idx++) {
        let current = sortedIntervals[idx];
        let [currentStart, currentEnd] = current;
        let prev = result[result.length - 1];

        if (currentStart <= prev[1]) {
            prev[1] = Math.max(prev[1], currentEnd);
        } else {
            result.push(current);
        }

    }

    return result;
};