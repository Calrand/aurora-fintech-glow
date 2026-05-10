import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import {
  Plus,
  Trash2,
  Calculator,
  PiggyBank,
  Wallet,
  ReceiptText,
} from 'lucide-react';

type Frequency = 'monthly' | 'biweekly' | 'weekly';

type MoneyItem = {
  id: string;
  name: string;
  amount: string;
  frequency?: Frequency;
};

type IncomeCategory = {
  key: string;
  title: string;
  description: string;
};

type ExpenseCategory = {
  key: string;
  title: string;
  examples: string[];
};

type SalaryHistoryItem = {
  id: string;
  monthName: string;
  amount: string;
};

const incomeCategories: IncomeCategory[] = [
  {
    key: 'salary',
    title: 'Monthly Salary',
    description: 'Your fixed job income or average salary.',
  },
  {
    key: 'freelance',
    title: 'Freelance / Side Income',
    description: 'Income from projects, gigs, or side businesses.',
  },
  {
    key: 'bonus',
    title: 'Bonuses or Irregular Income',
    description: 'Commission, yearly bonuses, or occasional payments.',
  },
  {
    key: 'passive',
    title: 'Passive Income',
    description: 'Rent, dividends, royalties, or other recurring income.',
  },
];

const expenseCategories: ExpenseCategory[] = [
  {
    key: 'living',
    title: 'Living Expenses',
    examples: ['Rent payments', 'Grocery bills', 'Utility bills'],
  },
  {
    key: 'transportation',
    title: 'Transportation Expenses',
    examples: ['Car payments', 'Public transportation', 'Gas costs'],
  },
  {
    key: 'family',
    title: 'Family Care',
    examples: ['Child care', 'School supplies', 'Pet care'],
  },
  {
    key: 'personal',
    title: 'Personal Care',
    examples: ['Toiletries', 'Haircuts', 'Clothing'],
  },
  {
    key: 'health',
    title: 'Health Care',
    examples: ['Health insurance', 'Medicine', 'Doctor visits'],
  },
  {
    key: 'technology',
    title: 'Technology',
    examples: ['Phone plan', 'Internet service', 'Streaming services'],
  },
  {
    key: 'debt',
    title: 'Debt Payments',
    examples: ['Credit card payments', 'Student loans', 'Personal loans'],
  },
  {
    key: 'savings',
    title: 'Savings and Investments',
    examples: ['Emergency fund', 'Retirement account', 'Investments'],
  },
  {
    key: 'entertainment',
    title: 'Entertainment',
    examples: ['Dining out', 'Movie tickets', 'Travel funds'],
  },
  {
    key: 'misc',
    title: 'Miscellaneous Expenses',
    examples: ['Gifts', 'Donations', 'Unexpected expenses'],
  },
];

const createItem = (
  name = '',
  amount = '',
  frequency: Frequency = 'monthly',
): MoneyItem => ({
  id: crypto.randomUUID(),
  name,
  amount,
  frequency,
});

const toNumber = (value: string) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const convertToMonthly = (amount: number, frequency: Frequency) => {
  if (frequency === 'weekly') return amount * 4.333;
  if (frequency === 'biweekly') return amount * (26 / 12);
  return amount;
};

const BudgetCalculator: React.FC = () => {
  const [incomeItems, setIncomeItems] = useState<Record<string, MoneyItem[]>>(
    () =>
      incomeCategories.reduce(
        (acc, category) => {
          acc[category.key] = [createItem()];
          return acc;
        },
        {} as Record<string, MoneyItem[]>,
      ),
  );

  const [expenseItems, setExpenseItems] = useState<Record<string, MoneyItem[]>>(
    () =>
      expenseCategories.reduce(
        (acc, category) => {
          acc[category.key] = category.examples.map((example) =>
            createItem(example, '', 'monthly'),
          );
          return acc;
        },
        {} as Record<string, MoneyItem[]>,
      ),
  );

  const [showAverageSalary, setShowAverageSalary] = useState(false);
  const [salaryHistory, setSalaryHistory] = useState<SalaryHistoryItem[]>([
    {
      id: crypto.randomUUID(),
      monthName: '',
      amount: '',
    },
  ]);

  const averageSalary = useMemo(() => {
    const validSalaries = salaryHistory
      .map((item) => toNumber(item.amount))
      .filter((amount) => amount > 0);

    if (validSalaries.length === 0) return 0;

    return (
      validSalaries.reduce((sum, amount) => sum + amount, 0) /
      validSalaries.length
    );
  }, [salaryHistory]);

  const [showBreakdown, setShowBreakdown] = useState(false);
  const [savingsGoal, setSavingsGoal] = useState('');

  const totalMonthlyIncome = useMemo(() => {
    return Object.entries(incomeItems).reduce((total, [key, items]) => {
      if (key === 'salary' && showAverageSalary) {
        return total + averageSalary;
      }

      const categoryTotal = items.reduce((sum, item) => {
        return (
          sum +
          convertToMonthly(toNumber(item.amount), item.frequency || 'monthly')
        );
      }, 0);

      return total + categoryTotal;
    }, 0);
  }, [incomeItems, showAverageSalary, averageSalary]);

  const totalMonthlyExpense = useMemo(() => {
    return Object.values(expenseItems)
      .flat()
      .reduce((sum, item) => {
        return sum + toNumber(item.amount);
      }, 0);
  }, [expenseItems]);

  const monthlySavings = totalMonthlyIncome - totalMonthlyExpense;
  const goalAmount = toNumber(savingsGoal);
  const monthsToGoal =
    monthlySavings > 0 && goalAmount > 0
      ? Math.ceil(goalAmount / monthlySavings)
      : null;

  const updateIncomeItem = (
    categoryKey: string,
    itemId: string,
    field: keyof MoneyItem,
    value: string,
  ) => {
    setIncomeItems((prev) => ({
      ...prev,
      [categoryKey]: prev[categoryKey].map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateExpenseItem = (
    categoryKey: string,
    itemId: string,
    field: keyof MoneyItem,
    value: string,
  ) => {
    setExpenseItems((prev) => ({
      ...prev,
      [categoryKey]: prev[categoryKey].map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addIncomeItem = (categoryKey: string) => {
    setIncomeItems((prev) => ({
      ...prev,
      [categoryKey]: [...prev[categoryKey], createItem()],
    }));
  };

  const addExpenseItem = (categoryKey: string) => {
    setExpenseItems((prev) => ({
      ...prev,
      [categoryKey]: [...prev[categoryKey], createItem('', '', 'monthly')],
    }));
  };

  const removeIncomeItem = (categoryKey: string, itemId: string) => {
    setIncomeItems((prev) => ({
      ...prev,
      [categoryKey]:
        prev[categoryKey].length === 1
          ? prev[categoryKey]
          : prev[categoryKey].filter((item) => item.id !== itemId),
    }));
  };

  const removeExpenseItem = (categoryKey: string, itemId: string) => {
    setExpenseItems((prev) => ({
      ...prev,
      [categoryKey]:
        prev[categoryKey].length === 1
          ? prev[categoryKey]
          : prev[categoryKey].filter((item) => item.id !== itemId),
    }));
  };

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <Navbar />

      <main className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-fintech-mint/10 blur-[120px] -z-10" />

        <div className="container mx-auto px-4">
          <section className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 mb-6">
              <Calculator size={18} />
              Budget Calculator
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Plan Your Budget Smarter</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/75 max-w-2xl mx-auto">
              Add your income, track your expenses, and discover your suggested
              monthly savings.
            </p>
          </section>

          <section className="max-w-6xl mx-auto space-y-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-fintech-mint/15 flex items-center justify-center">
                  <Wallet className="text-fintech-mint" size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Income</h2>
                  <p className="text-white/60">
                    Add any income you have. Weekly and Biweekly income will be
                    converted into monthly income.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {incomeCategories.map((category) => (
                  <div
                    key={category.key}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-5"
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {category.title}
                    </h3>
                    <p className="text-white/55 text-sm mb-5">
                      {category.description}
                    </p>

                    {category.key === 'salary' ? (
                      <div className="mb-5 rounded-2xl bg-fintech-mint/10 border border-fintech-mint/20 p-4">
                        <div className="flex items-start gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-fintech-mint/15 flex items-center justify-center shrink-0">
                            <Calculator
                              className="text-fintech-mint"
                              size={18}
                            />
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-1">
                              Salary Information
                            </h4>

                            <p className="text-sm text-white/70 leading-relaxed">
                              Add your fixed salary, or calculate an average
                              salary if your monthly income changes.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-fintech-dark/40 p-4 mb-5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                              <h5 className="font-medium text-white mb-1">
                                Is your salary different every month?
                              </h5>

                              <p className="text-sm text-white/55">
                                Enter previous month names and income amounts.
                                We’ll calculate your average monthly salary.
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                setShowAverageSalary((prev) => !prev)
                              }
                              className="px-4 py-2 rounded-xl bg-fintech-mint text-fintech-dark font-semibold hover:bg-fintech-mint/90 transition"
                            >
                              {showAverageSalary
                                ? 'Use Fixed Salary'
                                : 'Calculate Average Salary'}
                            </button>
                          </div>
                        </div>

                        {showAverageSalary ? (
                          <div className="space-y-3">
                            <div className="grid grid-cols-12 gap-3 px-1 mb-1">
                              <p className="col-span-6 text-xs uppercase tracking-wider text-white/40">
                                Month Name
                              </p>

                              <p className="col-span-5 text-xs uppercase tracking-wider text-white/40">
                                Income
                              </p>
                            </div>

                            {salaryHistory.map((item, index) => (
                              <div
                                key={item.id}
                                className="grid grid-cols-12 gap-3 items-center"
                              >
                                <input
                                  type="text"
                                  placeholder={`Month ${index + 1}`}
                                  value={item.monthName}
                                  onChange={(e) =>
                                    setSalaryHistory((prev) =>
                                      prev.map((salary) =>
                                        salary.id === item.id
                                          ? {
                                              ...salary,
                                              monthName: e.target.value,
                                            }
                                          : salary,
                                      ),
                                    )
                                  }
                                  className="col-span-6 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                                />

                                <input
                                  type="number"
                                  placeholder="Income amount"
                                  value={item.amount}
                                  onChange={(e) =>
                                    setSalaryHistory((prev) =>
                                      prev.map((salary) =>
                                        salary.id === item.id
                                          ? {
                                              ...salary,
                                              amount: e.target.value,
                                            }
                                          : salary,
                                      ),
                                    )
                                  }
                                  className="col-span-5 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setSalaryHistory((prev) =>
                                      prev.length === 1
                                        ? prev
                                        : prev.filter(
                                            (salary) => salary.id !== item.id,
                                          ),
                                    )
                                  }
                                  className="col-span-1 text-white/50 hover:text-red-400 transition"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            ))}

                            <button
                              type="button"
                              onClick={() =>
                                setSalaryHistory((prev) => [
                                  ...prev,
                                  {
                                    id: crypto.randomUUID(),
                                    monthName: '',
                                    amount: '',
                                  },
                                ])
                              }
                              className="inline-flex items-center gap-2 text-sm font-medium text-fintech-mint hover:text-fintech-mint/80 transition"
                            >
                              <Plus size={16} />
                              Add Previous Month
                            </button>

                            <div className="mt-5 rounded-2xl bg-fintech-mint/10 border border-fintech-mint/20 p-4">
                              <p className="text-sm text-white/65 mb-1">
                                Average Monthly Salary
                              </p>

                              <p className="text-2xl font-bold text-fintech-mint">
                                ${averageSalary.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="grid grid-cols-12 gap-3 px-1 mb-1">
                              <p className="col-span-12 md:col-span-4 text-xs uppercase tracking-wider text-white/40">
                                Income Name
                              </p>

                              <p className="col-span-7 md:col-span-3 text-xs uppercase tracking-wider text-white/40">
                                Amount
                              </p>

                              <p className="col-span-4 text-xs uppercase tracking-wider text-white/40">
                                Frequency
                              </p>
                            </div>

                            {incomeItems[category.key].map((item) => (
                              <div
                                key={item.id}
                                className="grid grid-cols-12 gap-3 items-center"
                              >
                                <input
                                  type="text"
                                  placeholder="Salary name"
                                  value={item.name}
                                  onChange={(e) =>
                                    updateIncomeItem(
                                      category.key,
                                      item.id,
                                      'name',
                                      e.target.value,
                                    )
                                  }
                                  className="col-span-12 md:col-span-4 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                                />

                                <input
                                  type="number"
                                  placeholder="Amount"
                                  value={item.amount}
                                  onChange={(e) =>
                                    updateIncomeItem(
                                      category.key,
                                      item.id,
                                      'amount',
                                      e.target.value,
                                    )
                                  }
                                  className="col-span-7 md:col-span-3 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                                />

                                <select
                                  value={item.frequency}
                                  onChange={(e) =>
                                    updateIncomeItem(
                                      category.key,
                                      item.id,
                                      'frequency',
                                      e.target.value,
                                    )
                                  }
                                  className="col-span-4 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                                >
                                  <option value="monthly">Monthly</option>
                                  <option value="biweekly">Biweekly</option>
                                  <option value="weekly">Weekly</option>
                                </select>

                                <button
                                  type="button"
                                  onClick={() =>
                                    removeIncomeItem(category.key, item.id)
                                  }
                                  className="col-span-1 text-white/50 hover:text-red-400 transition"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            ))}

                            <button
                              type="button"
                              onClick={() => addIncomeItem(category.key)}
                              className="inline-flex items-center gap-2 text-fintech-mint font-medium mt-2 hover:text-fintech-mint/80 transition"
                            >
                              <Plus size={18} />
                              Add Salary
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-12 gap-3 px-1 mb-1">
                          <p className="col-span-12 md:col-span-4 text-xs uppercase tracking-wider text-white/40">
                            Income Name
                          </p>

                          <p className="col-span-7 md:col-span-3 text-xs uppercase tracking-wider text-white/40">
                            Amount
                          </p>

                          <p className="col-span-4 text-xs uppercase tracking-wider text-white/40">
                            Frequency
                          </p>
                        </div>

                        {incomeItems[category.key].map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-12 gap-3 items-center"
                          >
                            <input
                              type="text"
                              placeholder="Income name"
                              value={item.name}
                              onChange={(e) =>
                                updateIncomeItem(
                                  category.key,
                                  item.id,
                                  'name',
                                  e.target.value,
                                )
                              }
                              className="col-span-12 md:col-span-4 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                            />

                            <input
                              type="number"
                              placeholder="Amount"
                              value={item.amount}
                              onChange={(e) =>
                                updateIncomeItem(
                                  category.key,
                                  item.id,
                                  'amount',
                                  e.target.value,
                                )
                              }
                              className="col-span-7 md:col-span-3 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                            />

                            <select
                              value={item.frequency}
                              onChange={(e) =>
                                updateIncomeItem(
                                  category.key,
                                  item.id,
                                  'frequency',
                                  e.target.value,
                                )
                              }
                              className="col-span-4 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                            >
                              <option value="monthly">Monthly</option>
                              <option value="biweekly">Biweekly</option>
                              <option value="weekly">Weekly</option>
                            </select>

                            <button
                              type="button"
                              onClick={() =>
                                removeIncomeItem(category.key, item.id)
                              }
                              className="col-span-1 text-white/50 hover:text-red-400"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => addIncomeItem(category.key)}
                          className="inline-flex items-center gap-2 text-fintech-mint font-medium mt-2"
                        >
                          <Plus size={18} />
                          Add income
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-fintech-mint/15 flex items-center justify-center">
                  <ReceiptText className="text-fintech-mint" size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Expenses</h2>
                  <p className="text-white/60">
                    Fill in your monthly expenses. Add more rows wherever you
                    need.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {expenseCategories.map((category) => (
                  <div
                    key={category.key}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-5"
                  >
                    <h3 className="text-xl font-semibold mb-5">
                      {category.title}
                    </h3>

                    <div className="space-y-3">
                      {expenseItems[category.key].map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-12 gap-3 items-center"
                        >
                          <input
                            type="text"
                            placeholder="Expense name"
                            value={item.name}
                            onChange={(e) =>
                              updateExpenseItem(
                                category.key,
                                item.id,
                                'name',
                                e.target.value,
                              )
                            }
                            className="col-span-7 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                          />

                          <input
                            type="number"
                            placeholder="Amount"
                            value={item.amount}
                            onChange={(e) =>
                              updateExpenseItem(
                                category.key,
                                item.id,
                                'amount',
                                e.target.value,
                              )
                            }
                            className="col-span-4 rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              removeExpenseItem(category.key, item.id)
                            }
                            className="col-span-1 text-white/50 hover:text-red-400"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => addExpenseItem(category.key)}
                        className="inline-flex items-center gap-2 text-fintech-mint font-medium mt-2"
                      >
                        <Plus size={18} />
                        Add expense
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-fintech-mint/15 flex items-center justify-center mb-5">
                <PiggyBank className="text-fintech-mint" size={28} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Suggested Total Savings
              </h2>

              <p className="text-white/65 max-w-2xl mx-auto mb-8">
                Calculate your monthly savings and see how long it may take to
                reach your savings goal.
              </p>

              <div className="max-w-md mx-auto mb-6">
                <input
                  type="number"
                  placeholder="Enter savings goal amount"
                  value={savingsGoal}
                  onChange={(e) => setSavingsGoal(e.target.value)}
                  className="w-full rounded-xl bg-fintech-dark/80 border border-white/10 px-4 py-3 outline-none focus:border-fintech-mint"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowBreakdown(true)}
                className="rounded-full bg-fintech-mint text-fintech-dark px-8 py-4 font-semibold hover:bg-fintech-mint/90 transition"
              >
                Show Breakdown
              </button>

              {showBreakdown && (
                <div className="grid md:grid-cols-3 gap-4 mt-8 text-left">
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                    <p className="text-white/55 mb-2">Monthly Income</p>
                    <p className="text-2xl font-bold">
                      ${totalMonthlyIncome.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                    <p className="text-white/55 mb-2">Monthly Expenses</p>
                    <p className="text-2xl font-bold">
                      ${totalMonthlyExpense.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                    <p className="text-white/55 mb-2">Monthly Savings</p>
                    <p
                      className={`text-2xl font-bold ${
                        monthlySavings >= 0
                          ? 'text-fintech-mint'
                          : 'text-red-400'
                      }`}
                    >
                      ${monthlySavings.toFixed(2)}
                    </p>
                  </div>

                  <div className="md:col-span-3 rounded-2xl bg-fintech-dark/60 border border-white/10 p-5">
                    {monthlySavings < 0 ? (
                      <p className="text-red-300">
                        Your savings are negative. Try reducing expenses or
                        increasing income until your monthly savings become
                        positive.
                      </p>
                    ) : monthsToGoal ? (
                      <p className="text-white/75">
                        At your current savings rate, it will take around{' '}
                        <span className="text-fintech-mint font-semibold">
                          {monthsToGoal} month{monthsToGoal > 1 ? 's' : ''}
                        </span>{' '}
                        to reach your goal.
                      </p>
                    ) : (
                      <p className="text-white/75">
                        Add a savings goal to see how many months it will take
                        to reach it.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default BudgetCalculator;
