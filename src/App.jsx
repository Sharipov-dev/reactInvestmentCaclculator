import Header from './components/Header';
import InputSection from './components/InputSection';
import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment.js';
import InvestmentBoard from './components/investmentBoard.jsx';
function App() {
  const [inputValues, setInputValues] = useState({
    'Initial Investment': undefined,
    'Annual Investment': undefined,
    'Expected Return': undefined,
    Duration: undefined,
  });

  function handleChange(tabName, value) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [tabName]: value,
    }));
  }

  const isDefined = Object.values(inputValues).every(
    (val) => val !== undefined
  );

  let arrayOfElements;
  if (isDefined) {
    console.log('Input values:', inputValues['Initial Investment']);
    arrayOfElements = calculateInvestmentResults({
      initialInvestment: parseFloat(inputValues['Initial Investment']),
      annualInvestment: parseFloat(inputValues['Annual Investment']),
      expectedReturn: parseFloat(inputValues['Expected Return']),
      duration: parseInt(inputValues.Duration, 10),
    });
  }
  return (
    <>
      <Header />
      <InputSection handleInputChange={handleChange} />
      {isDefined && (
        <InvestmentBoard array={arrayOfElements} inputValues={inputValues} />
      )}
    </>
  );
}

export default App;
