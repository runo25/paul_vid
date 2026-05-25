import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { transactions } from "./data";

const Header = ({ title, rightIcon, onRightClick }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#205b9f] text-white flex items-center justify-between px-4 py-3 sticky top-0 z-10">
      <button onClick={() => navigate(-1)} className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
      <h1 className="text-lg font-medium tracking-wide uppercase">{title}</h1>
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

const formatCurrency = (amount) => {
  const isNegative = amount < 0;
  const formatted = Math.abs(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return isNegative ? `-${formatted}` : formatted;
};

function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header title="PNC SIMPLE CHECKING X8304" rightIcon="search" />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <img src="/vite.svg" alt="Logo" className="w-24 h-24 mb-6" />
        <h2 className="text-2xl font-bold mb-2">Welcome</h2>
        <p className="text-gray-600 mb-8 text-center">Manage your checking account securely.</p>
        <Link to="/transactions" className="w-full max-w-sm bg-[#205b9f] text-white py-3 rounded text-center text-lg font-medium hover:bg-[#16447a] transition-colors">
          View Transactions
        </Link>
      </div>
    </div>
  );
}

function Transactions() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Header title="PNC SIMPLE CHECKING X8304" rightIcon="search" />
      <div className="bg-[#f2f2f2] px-4 py-2 border-b border-gray-300">
        <h2 className="text-gray-700 font-bold text-center tracking-wide">PENDING TRANSACTIONS</h2>
      </div>
      <div className="flex flex-col">
        {transactions.map((t) => (
          <div 
            key={t.id} 
            className="flex justify-between items-start py-4 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 active:bg-gray-100"
            onClick={() => navigate(`/transactions/${t.id}`)}
          >
            <div className="flex flex-col">
              <span className="text-[17px] text-gray-800 uppercase leading-snug">{t.title}</span>
              <span className="text-gray-500 text-[15px] italic mt-0.5">{t.date}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-[17px] font-medium ${t.type === "credit" ? "text-[#3e792e]" : t.type === "reversed" ? "text-[#8b2626]" : "text-gray-900"}`}>
                {formatCurrency(t.amount)}
              </span>
              <span className="text-gray-500 text-[15px] italic mt-0.5">{t.status}</span>
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
  const transaction = transactions.find((t) => t.id === id) || transactions[10];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        title="PNC SIMP...X8304" 
        rightIcon="close" 
        onRightClick={() => navigate("/transactions")} 
      />
      
      <div className="px-4 py-3 bg-white text-center">
        <h2 className="text-[#333] font-bold text-[15px] tracking-wide">TRANSACTION DETAILS</h2>
      </div>

      <div className="mx-4 mt-2 mb-6 bg-[#ebebeb] p-6 text-center flex flex-col items-center">
        <h3 className="text-[19px] text-[#333] font-bold leading-tight uppercase max-w-[280px]">
          {transaction.title}
        </h3>
        
        <div className="text-[52px] text-[#444] font-light mt-6 mb-8 tracking-tight">
          {formatCurrency(Math.abs(transaction.amount))}
        </div>
        
        <div className="text-[20px] text-[#333] mb-1">
          Status: {transaction.status}
        </div>
        <div className="text-[20px] text-[#333] mb-8">
          {transaction.detailDate || transaction.date}
        </div>
        
        <div className="text-[20px] text-[#333] font-medium w-full max-w-[250px] leading-snug">
          Account: {transaction.account || "PNC Simple Checking X8304"}
        </div>
      </div>

      <div className="px-5 mt-auto mb-10 text-[17px] text-[#666] leading-snug text-center italic">
        This transaction is pending. We're displaying all the details we have right now. More details may be available once it posts. If you suspect fraud, immediately <span className="text-[#008282] not-italic font-medium cursor-pointer underline">contact us.</span>
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
