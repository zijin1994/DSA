//each step we calculate min cost of taking current step.
var minCostClimbingStairs = function(cost) {
    
    function helper(cost, idx) {
        if (idx < 2) return cost[idx];
        
        return  Math.min(helper(cost, idx - 2), helper(cost, idx - 1)) + cost[idx];
        
    }

    return Math.min(helper(cost, cost.length - 1), helper(cost, cost.length - 2));
};

var minCostClimbingStairs = function(cost) {
    
    let memo = Array.from({ length: cost.length }).fill(false);

    function helper(cost, idx) {
        if (idx < 2) return memo[idx] = cost[idx];

        if (memo[idx] !== false) return memo[idx];
        else {
            return memo[idx] = Math.min(helper(cost, idx - 2), helper(cost, idx - 1)) + cost[idx];
        }
        
    }

    return Math.min(helper(cost, cost.length - 1), helper(cost, cost.length - 2));
};



var minCostClimbingStairs = function(cost) {
    const dp = Array.from({ length: cost.length }).fill(0);

    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let idx = 2; idx < dp.length; idx++) {
        dp[idx] = Math.min(dp[idx - 1], dp[idx - 2]) + cost[idx];
    }

    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};



var minCostClimbingStairs = function(cost) {
    let lastStep = 0;
    let secondLastStep = 0;
    for (let idx = 0; idx < cost.length; idx++) {
        let currentCost = cost[idx] + Math.min(lastStep, secondLastStep);
        secondLastStep = lastStep;
        lastStep = currentCost;
    }

    return Math.min(lastStep, secondLastStep);
};

//each step we calculate min cost of getting to current step.
var minCostClimbingStairs = function(cost) {
    
    function helper(cost, idx) {
        if (idx < 2) return 0;
        
        
        let fromLastStep = helper(cost, idx - 1) + cost[idx - 1];
        let fromSecondLastStep = helper(cost, idx - 2) + cost[idx - 2];
        return Math.min(fromLastStep, fromSecondLastStep);
    }

    return helper(cost, cost.length);
};

var minCostClimbingStairs = function(cost) {
    
    const memo = Array.from({length: cost.length + 1}).fill(false);
    function helper(cost, idx) {
        if (idx < 2) return 0;
        
        if (memo[idx] !== false) return memo[idx];

        let fromLastStep = helper(cost, idx - 1) + cost[idx - 1];
        let fromSecondLastStep = helper(cost, idx - 2) + cost[idx - 2];
        return memo[idx] = Math.min(fromLastStep, fromSecondLastStep);
    }

    return helper(cost, cost.length);
};

var minCostClimbingStairs = function(cost) {
    const dp = Array.from({length: cost.length + 1}).fill(0);

    for (let idx = 2; idx < dp.length; idx++) {
        let fromLastStep = dp[idx - 1] + cost[idx - 1];
        let fromSecondLastStep = dp[idx - 2] + cost[idx - 2];
        dp[idx] = Math.min(fromLastStep, fromSecondLastStep);
    }

    return dp[dp.length - 1];
};

var minCostClimbingStairs = function(cost) {
    let lastStep = 0;
    let secondLastStep = 0;

    for (let idx = 2; idx < dp.length + 1; idx++) {
        let fromLastStep = lastStep + cost[idx - 1];
        let fromSecondLastStep = secondLastStep + cost[idx - 2];
        
        let current = Math.min(fromLastStep, fromSecondLastStep);
        secondLastStep = lastStep;
        lastStep = current;
    }

    return lastStep;
};