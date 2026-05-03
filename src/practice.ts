

type InvestmentData={
    amount: number;
    annualContribution: number;
    duration: number;
    interestRate: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalulationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): 
CalulationResult {
    const{amount, annualContribution, duration, interestRate} = data;
    if (amount <0) {
           return "Invalid investment amount";
    }
    if (duration <= 0) {
        return "Invalid duration";
    }
    if (interestRate < 0) {
        return "Invalid interest rate";
    }

    let total = amount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestmentResult[] = [];

    for (let year = 1; year <= duration; year++) {
        total = total * (1+ interestRate);
        totalInterestEarned = total - amount - totalContributions;
        totalContributions += annualContribution;
        total += annualContribution;
        
        annualResults.push({
            year: `Year ${year+1}`,
            totalAmount: total,
            totalContributions: totalContributions,
            totalInterestEarned: totalInterestEarned
        });
    }

    return annualResults;   
}

function printResults(results: CalulationResult){
    if (typeof results === "string") {
        console.log(results);
        return
    }   

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log("Total Amount: $" + yearEndResult.totalAmount.toFixed(2));
        console.log("Total Contributions: $" + yearEndResult.totalContributions.toFixed(2));
        console.log("Total Interest Earned: $" + yearEndResult.totalInterestEarned.toFixed(2));
        console.log("-----------------------------");
    }
} 

const InvestmentResults = calculateInvestment({
    amount: 1000,
    annualContribution: 100,
    duration: 5,
    interestRate: 0.05
});

printResults(InvestmentResults);