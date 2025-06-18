import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Banknote, Box, ReceiptText, Landmark } from 'lucide-react';
import LiabilitiesIntroduction from './LiabilitiesIntroduction';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-xl shadow-md bg-white dark:bg-gray-800 ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ children, defaultValue, onValueChange, className }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  const handleChange = (value: string) => {
    setActiveTab(value);
    if (onValueChange) onValueChange(value);
  };

  const modifiedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    if (child.type === TabsList) {
      return React.cloneElement(child, { activeTab, onTabChange: handleChange });
    }
    if (child.type === TabsContent && child.props.value === activeTab) {
      return child;
    }
    return null;
  });

  return <div className={className}>{modifiedChildren}</div>;
};

type TabsListProps = {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (value: string) => void;
  className?: string;
};

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, onTabChange, className = '' }) => (
  <div className={`flex justify-center gap-2 ${className}`}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null;
      return React.cloneElement(child, {
        isActive: child.props.value === activeTab,
        onSelect: () => onTabChange?.(child.props.value),
      });
    })}
  </div>
);

type TabsTriggerProps = {
  children: ReactNode;
  value: string;
  isActive?: boolean;
  onSelect?: () => void;
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, isActive, onSelect }) => (
  <button
    onClick={onSelect}
    className={`px-4 py-2 rounded font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
    }`}
  >
    {children}
  </button>
);

type TabsContentProps = {
  children: ReactNode;
  value?: string;
};

const TabsContent: React.FC<TabsContentProps> = ({ children }) => (
  <div className="mt-4">{children}</div>
);

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto p-4"
  >
    <Card className="p-4 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white text-gray-800">{title}</h2>
      {children}
    </Card>
  </motion.div>
);

type AssetCardProps = {
  title: string;
  examples: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const AssetCard: React.FC<AssetCardProps> = ({ title, examples, icon: Icon }) => (
  <Card className="shadow-md rounded-2xl p-4 m-2 w-full sm:w-[45%]">
    <CardContent>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-6 w-6 text-indigo-500" />
        <h3 className="text-xl font-semibold dark:text-white text-gray-900">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {examples.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

type Question = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

type Feedback = {
  isCorrect: boolean;
  explanation: string;
} | null;

const AssetInfo: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [tab, setTab] = useState<string>('definition');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const questions: Question[] = [
    {
      question: 'Which of the following are fixed assets?',
      options: ['Inventory', 'Cash', 'Land', 'Receivables'],
      correct: 'Land',
      explanation: 'Land is a long-term, non-liquid asset making it a fixed asset.',
    },
    {
      question: 'Inventory is what category of asset?',
      options: ['Fixed asset', 'Current asset', 'Liability', 'Receivable'],
      correct: 'Current asset',
      explanation:
        'Inventory is a current asset as it is expected to be converted into cash within a year.',
    },
    {
      question: 'Trademark is an example of what kind of asset?',
      options: ['Fixed asset', 'Current asset', 'Inventory', 'Cash'],
      correct: 'Fixed asset',
      explanation: 'Trademarks are intangible fixed assets as they provide long-term value.',
    },
    {
      question: 'Receivables fall under which asset category?',
      options: ['Fixed asset', 'Current asset', 'Inventory', 'Liability'],
      correct: 'Current asset',
      explanation: 'Receivables are current assets as they are expected to be paid soon.',
    },
  ];

  const handleOptionClick = (option: string) => {
    const isCorrect = option === questions[currentQuestion].correct;
    setSelectedOption(option);
    setFeedback({
      isCorrect,
      explanation: questions[currentQuestion].explanation,
    });

    const utterance = new SpeechSynthesisUtterance(
      isCorrect ? 'Correct answer!' : 'Wrong answer!'
    );
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  const renderProgressDots = () => (
    <div className="flex gap-3 justify-center mb-4">
      {questions.map((_, index) => (
        <div
          key={index}
          className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
            index === currentQuestion
              ? 'bg-white'
              : index < currentQuestion
              ? 'bg-green-400'
              : 'bg-transparent border-gray-400'
          }`}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="flex justify-end mr-4 mb-4">
        <button
          className="bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <Tabs defaultValue="definition" onValueChange={setTab} className="w-full max-w-4xl mx-auto mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="definition">What are Liabilities?</TabsTrigger>
          <TabsTrigger value="types">Liabilities Types</TabsTrigger>
          <TabsTrigger value="categories">Liability Categories</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Section title="1. How about you?">
            <div className="flex flex-wrap justify-center">
              <LiabilitiesIntroduction />
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="definition">
          <Section title="2. What are Liabilities?">
            <p className="text-lg dark:text-gray-200 text-gray-800 text-center mb-4">
              A liability is something that a person or company owes, usually a sum of money. It
              will be settled over time through the transfer of economic benefits including money,
              goods, or services
            </p>
            <div className="flex flex-wrap justify-center">
              <AssetCard
                title="Examples of Liabilities"
                examples={['Loans', 'Bill Payables', 'Mortgages', 'Patents']}
                icon={Landmark}
              />
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="types">
          <Section title="3. Types of Liabilities">
            <div className="flex flex-wrap justify-center">
              <AssetCard
                title="Account Payables"
                examples={['Bill Payables', 'dividend payables', 'Taxes']}
                icon={Banknote}
              />
              <AssetCard title="Loans" examples={['Bank Loans', 'other loans']} icon={Box} />
              <AssetCard title="Employee Payables" examples={['Wages']} icon={ReceiptText} />
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="categories">
          <Section title="4. Liability Categories Categories">
            <div className="flex flex-wrap justify-center">
              <AssetCard
                title="Current Liabilities - debts you owe within the next 12 months"
                examples={['Wages', 'Short term Loans']}
                icon={Box}
              />
              <AssetCard
                title="Long- Term Liabilities - long-term debt that ranges beyond 12 months"
                examples={['Mortgages', 'Long term loans', 'Warranties']}
                icon={Landmark}
              />
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="quiz">
          <Section title={`5. Quiz: Question ${currentQuestion + 1} of ${questions.length}`}>
            {renderProgressDots()}
            {currentQuestion < questions.length ? (
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={questions[currentQuestion].question}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionClick(option)}
                      />
                      <span className="text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
                {feedback && (
                  <p className="mt-4 text-lg font-semibold text-center dark:text-white text-gray-800">
                    {feedback.isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                  </p>
                )}
                <button
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
                  onClick={nextQuestion}
                  disabled={!selectedOption}
                >
                  Next Question
                </button>
              </div>
            ) : (
              <p className="text-center text-xl dark:text-white text-gray-800">
                🎉 You've completed the quiz!
              </p>
            )}
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssetInfo;
