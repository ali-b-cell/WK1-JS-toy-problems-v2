function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;

  let nssfRate = 0.06;
  let nssf = grossSalary <= 72000 ? grossSalary * nssfRate : 72000 * nssfRate;

  
  let taxableIncome = grossSalary - nssf;

  
  let paye = 0;
  let personalRelief = 2400;

  if (taxableIncome <= 24000) {
      paye = taxableIncome * 0.10;
  } else if (taxableIncome <= 32333) {
      paye = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);
  } else if (taxableIncome <= 500000) {
      paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.30);
  } else if (taxableIncome <= 800000) {
      paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((taxableIncome - 500000) * 0.325);
  } else {
      paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((taxableIncome - 800000) * 0.35);
  }

  paye = Math.max(paye - personalRelief, 0); 
  let shif = grossSalary * 0.0275;

  let netSalary = grossSalary - (nssf + paye + shif);

  return {
      Gross_Salary: grossSalary,
      NSSF_Deduction: nssf,
      PAYE_Tax: paye,
      SHIF_Deduction: shif,
      Net_Salary: netSalary
  };
}

let basicSalary = 50000; 
let benefits = 10000; 
console.log(calculateNetSalary(basicSalary, benefits));
