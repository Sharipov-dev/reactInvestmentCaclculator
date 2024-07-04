import { formatter } from '../util/investment';
export default function InvestmentBoard({ array, inputValues }) {
  console.log('InvestmentBoard array:', array);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {array.map((value) => {
          return (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>
                {formatter.format(
                  value.valueEndOfYear -
                    (parseFloat(inputValues['Initial Investment']) +
                      value.year * parseFloat(inputValues['Annual Investment']))
                )}
              </td>
              <td>
                {formatter.format(
                  parseFloat(inputValues['Initial Investment']) +
                    value.year * parseFloat(inputValues['Annual Investment'])
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
