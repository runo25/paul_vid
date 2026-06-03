import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { transactions } from "./data";

const Header = ({ title, rightIcon, onRightClick, showBack }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 py-4 sticky top-0 z-10 border-b border-gray-900">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
      ) : (
        <div className="w-6 h-6" />
      )}
      <h1 className="text-lg font-medium tracking-wide">{title}</h1>
      <button onClick={onRightClick} className="text-white">
        {rightIcon === "search" ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        ) : rightIcon === "close" ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

function Home() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header title="Account" rightIcon="search" />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-2 text-white">Welcome</h2>
        <p className="text-gray-400 mb-8 text-center">Manage your crypto securely.</p>
        <Link to="/transactions" className="w-full max-w-sm bg-white text-black py-3 rounded-full text-center text-lg font-medium hover:bg-gray-200 transition-colors">
          View Transactions
        </Link>
      </div>
    </div>
  );
}

function Transactions() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header title="Transactions" showBack rightIcon="search" />
      <div className="flex flex-col">
        {transactions.map((t) => (
          <div 
            key={t.id} 
            className="flex justify-between items-center py-4 px-4 border-b border-gray-900 cursor-pointer hover:bg-gray-900 active:bg-gray-800"
            onClick={() => navigate(`/transactions/${t.id}`)}
          >
            <div className="flex flex-col">
              <span className="text-lg text-white font-medium">{t.title}</span>
              <span className="text-gray-400 text-sm mt-1">{t.dateTime.split(" | ")[0]}</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-lg text-white font-medium">{t.amount}</span>
              <span className="bg-[#bbf7d0] text-[#166534] px-2 py-0.5 rounded text-xs flex items-center gap-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const transaction = transactions.find((t) => t.id === id) || transactions[0];

  return (
    <div className="min-h-screen bg-black flex flex-col text-white font-sans">
      <div className="flex justify-start px-4 py-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col items-center pt-2 pb-10">
        <div className="text-gray-300 text-lg mb-2">{transaction.title}</div>
        <div className="text-white text-[42px] font-bold mb-5 tracking-tight">{transaction.amount}</div>
        <div className="bg-[#bbf7d0] text-[#166534] px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
          {transaction.status}
        </div>
      </div>

      <div className="px-6 py-4">
        <h3 className="text-gray-400 text-sm font-bold tracking-widest mb-8">TRANSACTION INFO</h3>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-[15px]">Transaction ID</span>
            <span className="text-white text-[15px]">{transaction.transactionId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-[15px]">Date /Time</span>
            <span className="text-white text-[15px]">{transaction.dateTime}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-[15px]">Type</span>
            <span className="text-white text-[15px]">{transaction.type}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-[15px]">Amount</span>
            <span className="text-white text-[15px]">{transaction.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transactions/:id" element={<TransactionDetails />} />
    </Routes>
  );
}

export default App;
