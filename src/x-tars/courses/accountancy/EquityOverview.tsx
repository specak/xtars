import React, { useState } from 'react';

interface Option {
  label: string;
  explanation: string;
}

interface TableData {
  equity: string;
  loan: string;
  friend: string;
}

interface Scenario {
  title: string;
  you: string;
  options: Option[];
  tableData: TableData;
}

const scenarios: Scenario[] = [
  {
    title: 'Equity = Ownership',
    you: '50 Lakhs',
    options: [
      {
        label: 'Buy the house with the 50 Lakhs I have in the account',
        explanation: 'So, net fund invested by you is 50 Lakhs. Here, Equity is 50 Lakhs.',
      },
    ],
    tableData: {
      equity: '50 Lakhs',
      loan: '0',
      friend: '0',
    },
  },
  {
    title: 'Equity = Net Assets(Value of Asset - Liability',
    you: '20 Lakhs',
    options: [
      {
        label: 'Take a loan of 30 Lakhs and combine with my 20 Lakhs',
        explanation:
          'You invested 20 Lakhs of your money and took 30 Lakhs loan. So Your Ownership = 20 Lakhs, Loan(Liability) = 30 Lakhs.',
      },
    ],
    tableData: {
      equity: '20 Lakhs',
      loan: '30 Lakhs',
      friend: '0',
    },
  },
  {
    title: 'Partnership',
    you: '25 Lakhs',
    options: [
      {
        label: 'Ask my friend to contribute the other 25 Lakhs',
        explanation:
          'You invested 25 Lakhs and friend invested 25 Lakhs. Your Ownership = 25 Lakhs, Friend Ownership = 25 Lakhs',
      },
    ],
    tableData: {
      equity: '25 Lakhs',
      loan: '0',
      friend: '25 Lakhs',
    },
  },
];

export default function ScenarioComparison() {
  const [active, setActive] = useState<number>(0);
  // selectedOptionIndex can be number or null
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const selected = scenarios[active];

  return (
    <div className="min-h-screen bg-[#0f1121] text-white flex flex-col items-center p-4">
      <div className="w-full max-w-3xl flex flex-col md:flex-row md:items-start gap-4 mb-6">
        {/* Vertical Tabs */}
        <div className="flex md:flex-col gap-2">
          {scenarios.map((s, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setSelectedOptionIndex(null); // reset explanation when tab changes
              }}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                active === index ? 'bg-blue-600 text-white' : 'bg-white text-black'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Scenario Card */}
        <div className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="text-lg font-bold">{selected.title}</div>
          <p className="text-lg">
            If you need to buy a house worth 50 Lakhs and you have {selected.you} in the cash/account. What will you
            do?
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {selected.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOptionIndex(idx)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-left"
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Explanation */}
          {selectedOptionIndex !== null && (
            <div className="bg-gray-100 p-4 rounded-lg text-md text-black">
              {selected.options[selectedOptionIndex].explanation}
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Comparison Table</h2>
        <table className="w-full table-auto border border-white text-left">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2">Scenario</th>
              <th className="px-4 py-2">Equity (You)</th>
              <th className="px-4 py-2">Loan</th>
              <th className="px-4 py-2">Friend’s Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-900 text-white border-t border-white">
              <td className="px-4 py-2">{selected.title}</td>
              <td className="px-4 py-2">{selected.tableData.equity}</td>
              <td className="px-4 py-2">{selected.tableData.loan}</td>
              <td className="px-4 py-2">{selected.tableData.friend}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
