/**
 * KAST Central Data Store
 * Fully localized in English with extensive financial, banking, and transaction entities.
 */

export const profileData = {
  name: "SAMUEL",
  handle: "@user_csrxi8992",
  fullName: "Samuel",
  lastName: "Fasawe",
  dob: "Jun 11, 1997",
  email: "cuentakastt38@gmail.com",
  phone: "+54 11 7829-1323",
  membership: "STANDARD",
  tier: "Tier 1 Member",
  version: "3.25.2 (737)",
  address: "33 The Meadows, Ballymena, County Antrim BT43 7NG, UK",
  country: "United Kingdom",
  kycStatus: "Verified",
  kastTag: "samuel.kast"
};

export const bankData = {
  // USD Checking Account (Lead Bank)
  accountName: "Samuel Fasawe",
  accountNumber: "216677917073",
  routingNumber: "101019644",
  wireRouting: "101019644",
  address: "42 Carlos Tejedor, Lomas de Zamora, Buenos Aires B1834",
  bankName: "Lead Bank in the USA",
  bankAddress: "1801 Main St., Kansas City, MO 64108",
  country: "USA",
  swiftCode: "LEADUS33XXX",
  accountType: "Checking",

  // UK ClearBank Account
  ukAccountName: "Samuel Fasawe",
  ukAccountNumber: "04288613",
  ukSortCode: "04-28-86",
  ukIban: "GB84CLRB04288613032354",
  ukBankName: "ClearBank Limited",
  ukBankAddress: "Level 27, The Broadgate Tower, 20 Primrose Street, London, EC2A 2EW",
  ukCountry: "United Kingdom",
  ukSwift: "CLRBGB22XXX",

  // EUR SEPA Account
  eurAccountName: "Samuel Fasawe",
  eurIban: "FR7630006000011234567890189",
  eurBic: "BNPAFRPPXXX",
  eurBankName: "Kast Europe / BNP Paribas Partner",
  eurBankAddress: "16 Boulevard des Italiens, 75009 Paris",
  eurCountry: "France"
};

export const dashboardData = {
  balance: "$0.94",
  totalBalanceRaw: 0.94,
  currency: "USD",
  cardsCount: 1,
  activePerks: 3,
  carouselSlides: [
    { id: "total", title: "TOTAL BALANCE", amount: "$0.94", subtitle: "All accounts & wallets", change: "+4.2% this week" },
    { id: "usd", title: "USD CHECKING", amount: "$0.94", subtitle: "Lead Bank ···7073", change: "Available now" },
    { id: "crypto", title: "CRYPTO PORTFOLIO", amount: "$0.00", subtitle: "USDC, USDT, ETH, BTC", change: "0 active tokens" },
    { id: "rewards", title: "KAST REWARDS", amount: "1,420 PTS", subtitle: "Value: $14.20", change: "1% cashback active" }
  ]
};

export const cardData = {
  holder: "SAMUEL FASAWE",
  type: "Visa Infinite Black",
  network: "VISA",
  maskedNumber: "4532 •••• •••• 8824",
  fullNumber: "4532 8920 1842 8824",
  expiry: "08/29",
  cvv: "842",
  isFrozen: false,
  dailyLimit: 5000,
  spentToday: 454.48,
  monthlyLimit: 25000,
  spentMonth: 6124.90,
  onlinePayments: true,
  contactless: true,
  international: true,
  atmWithdrawals: true
};

export const transactions = [
  { 
    id: "0", 
    title: "Bank Transfer", 
    toFrom: "From TORB...HLIN", 
    amount: "+ 54.48 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "23 Jun · 10:17 AM", 
    month: "JUNE 2026",
    category: "ACH Transfer",
    reference: "KAST-20260623-01",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "1", 
    title: "Bank Transfer", 
    toFrom: "To TORB...HLIN", 
    amount: "- 54.48 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "23 Jun · 10:17 AM", 
    month: "JUNE 2026",
    category: "Internal Transfer",
    reference: "KAST-20260623-02",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "2", 
    title: "Bank Transfer", 
    toFrom: "From KeCh... LLC", 
    amount: "+ 4,500.00 USD", 
    type: "in", 
    status: "processing", 
    dateTime: "22 Jun · 02:04 PM", 
    month: "JUNE 2026",
    category: "Wire Transfer",
    reference: "KAST-20260622-03",
    fee: "$0.00",
    account: "Virtual USD Account",
    note: "Under compliance review - documentation requested"
  },
  { 
    id: "3", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 1,144.14 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "22 Jun · 10:48 AM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x78f2a...89b1",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "4", 
    title: "Bank Transfer", 
    toFrom: "From TORB...HLIN", 
    amount: "+ 1,140.88 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "22 Jun · 10:27 AM", 
    month: "JUNE 2026",
    category: "Wire Transfer",
    reference: "KAST-20260622-04",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "5", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 202.20 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "19 Jun · 08:14 PM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x9182a...7710",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "6", 
    title: "Bank Transfer", 
    toFrom: "From Kim ...chke", 
    amount: "+ 205.59 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "19 Jun · 08:07 PM", 
    month: "JUNE 2026",
    category: "SEPA Transfer",
    reference: "KAST-20260619-06",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "7", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 21.52 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "19 Jun · 01:35 PM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x5192b...3182",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "8", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 4,425.42 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "19 Jun · 10:34 AM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x6189c...1092",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "9", 
    title: "Bank Transfer", 
    toFrom: "From TORB...HLIN", 
    amount: "+ 4,446.82 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "19 Jun · 10:17 AM", 
    month: "JUNE 2026",
    category: "Wire Transfer",
    reference: "KAST-20260619-09",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "10", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 425.42 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "16 Jun · 04:13 PM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x7719a...4401",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "11", 
    title: "Bank Transfer", 
    toFrom: "From RODI...OTEA", 
    amount: "+ 427.47 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "16 Jun · 02:26 PM", 
    month: "JUNE 2026",
    category: "Wire Transfer",
    reference: "KAST-20260616-11",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "12", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 231.23 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "16 Jun · 10:32 AM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x3310a...9921",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "13", 
    title: "Bank Transfer", 
    toFrom: "From OSVA...NDEZ", 
    amount: "+ 230.99 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "16 Jun · 10:19 AM", 
    month: "JUNE 2026",
    category: "Wire Transfer",
    reference: "KAST-20260616-13",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "14", 
    title: "Sent", 
    toFrom: "To As4Q...J78f", 
    amount: "- 340.34 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "13 Jun · 08:27 AM", 
    month: "JUNE 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x9921d...4102",
    fee: "$0.00",
    account: "Solana Wallet"
  },
  { 
    id: "15", 
    title: "Bank Transfer", 
    toFrom: "From Curr...loud", 
    amount: "+ 342.93 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "12 Jun · 10:24 PM", 
    month: "JUNE 2026",
    category: "ACH Transfer",
    reference: "KAST-20260612-15",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  // Expanded Historical Data
  { 
    id: "16", 
    title: "Card Purchase", 
    toFrom: "Apple Store London", 
    amount: "- 199.00 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "28 May · 03:15 PM", 
    month: "MAY 2026",
    category: "Card Purchase",
    reference: "POS-89104",
    fee: "$0.00",
    account: "KAST Black Metal Card"
  },
  { 
    id: "17", 
    title: "Cashback Reward", 
    toFrom: "KAST 3% Metal Cashback", 
    amount: "+ 5.97 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "28 May · 03:16 PM", 
    month: "MAY 2026",
    category: "Reward",
    reference: "REW-89105",
    fee: "$0.00",
    account: "Rewards Wallet"
  },
  { 
    id: "18", 
    title: "Bank Transfer", 
    toFrom: "From Stripe Payments UK", 
    amount: "+ 2,850.00 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "15 May · 11:20 AM", 
    month: "MAY 2026",
    category: "Merchant Payout",
    reference: "KAST-20260515-18",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "19", 
    title: "Card Purchase", 
    toFrom: "Uber Rides", 
    amount: "- 28.50 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "10 May · 09:45 PM", 
    month: "MAY 2026",
    category: "Card Purchase",
    reference: "POS-78192",
    fee: "$0.00",
    account: "KAST Black Metal Card"
  },
  { 
    id: "20", 
    title: "Bank Transfer", 
    toFrom: "From Google Cloud EMEA", 
    amount: "+ 1,500.00 USD", 
    type: "in", 
    status: "completed", 
    dateTime: "22 Apr · 02:10 PM", 
    month: "APRIL 2026",
    category: "Direct Deposit",
    reference: "KAST-20260422-20",
    fee: "$0.00",
    account: "Virtual USD Account"
  },
  { 
    id: "21", 
    title: "Subscription", 
    toFrom: "OpenAI ChatGPT Plus", 
    amount: "- 20.00 USD", 
    type: "out", 
    status: "completed", 
    dateTime: "18 Apr · 08:00 AM", 
    month: "APRIL 2026",
    category: "Online Subscription",
    reference: "SUB-19402",
    fee: "$0.00",
    account: "KAST Black Metal Card"
  }
];

export const notificationsData = [
  {
    id: "account_cancellation",
    type: "in",
    title: "Account Cancellation Notice",
    date: "4 min ago",
    message: "Hello Samuel,\n\nWe hope this message finds you well. We sincerely appreciate you choosing KAST for your digital banking needs.\n\nFollowing a recent compliance review, we regret to inform you that we must proceed with closing your account. Any remaining deposited funds will be fully refunded to the originating accounts.\n\nRefunds will be processed within the next 60 business days depending on standard interbank settlement times.\n\nWe understand this decision may be disappointing. Please be assured this was reviewed diligently by our compliance team. In accordance with financial regulatory privacy obligations, we are unable to disclose specific underwriting criteria.\n\nWe thank you for your patronage and wish you continued success with your future financial ventures.\n\nSincerely,\nKAST Compliance Team",
    unread: true,
    section: "TODAY"
  },
  {
    id: "verification_submitted",
    type: "in",
    title: "Verification in Review",
    date: "10 min ago",
    message: "We have successfully received your compliance documentation and explanations. Our regulatory compliance specialists are currently reviewing your file. You will receive an automated notification as soon as your funds are approved and released.",
    unread: true,
    section: "TODAY"
  },
  {
    id: "1",
    type: "in",
    title: "You Received $$$",
    date: "23 Jun · 10:17 AM",
    message: "You received an ACH deposit of 54.48 USD into your US Checking Account from TORB...HLIN.",
    unread: true,
    section: "TODAY"
  },
  {
    id: "2",
    type: "out",
    title: "Your $$$ is on its way!",
    date: "23 Jun · 10:17 AM",
    message: "We dispatched 54.48 USD to the designated recipient wallet address.",
    unread: false,
    section: "TODAY"
  },
  {
    id: "3",
    type: "in",
    title: "Funds Held: Action Required",
    date: "22 Jun · 02:04 PM",
    message: "Your pending deposit of 4,500.00 USD is currently undergoing compliance review.\nTo meet standard financial security regulations and expedite release of your funds, please provide the following details:\n- Your business or personal relationship with the sender.\n- Detailed explanation of the 'Operating Expenses' purpose declared on the wire.\n- Relevant supporting documentation, invoices, or service agreements.\nYou have 7 business days to submit the required documentation. Thank you for your cooperation.",
    unread: false,
    section: "TODAY"
  },
  {
    id: "4",
    type: "out",
    title: "Your $$$ is on its way!",
    date: "22 Jun · 10:48 AM",
    message: "Transferred 1,144.14 USD to your Solana recipient address.",
    unread: true,
    section: "TODAY"
  },
  {
    id: "5",
    type: "in",
    title: "You Received $$$",
    date: "22 Jun · 10:27 AM",
    message: "You received a bank wire deposit of 1,140.88 USD from TORB...HLIN.",
    unread: true,
    section: "EARLIER"
  },
  {
    id: "6",
    type: "out",
    title: "Your $$$ is on its way!",
    date: "19 Jun · 08:15 PM",
    message: "Sent 201.00 USDC to your destination wallet address.",
    unread: false,
    section: "EARLIER"
  },
  {
    id: "7",
    type: "in",
    title: "You Received $$$",
    date: "19 Jun · 08:08 PM",
    message: "Received 180.00 EUR SEPA credit transfer from Kim ...chke.",
    unread: true,
    section: "EARLIER"
  },
  {
    id: "8",
    type: "out",
    title: "Your $$$ is on its way!",
    date: "18 Jun · 02:30 PM",
    message: "Dispatched 50.00 USDC to your external Web3 wallet.",
    unread: false,
    section: "EARLIER"
  }
];

export const limitsData = {
  dailyLimit: 10000,
  dailySpent: 4500,
  monthlyAtm: 2500,
  monthlyAtmUsed: 0,
  cryptoTransfer24h: 50000,
  cryptoTransfer24hUsed: 5628.62,
  wireLimitPerTx: 100000
};

export const securitySettings = {
  biometricsEnabled: true,
  twoFactorEnabled: true,
  loginAlerts: true,
  freezeCardOnSuspicious: true,
  activeSessions: [
    { device: "Chrome 124 (Windows)", location: "London, UK", current: true, date: "Active Now" },
    { device: "iPhone 15 Pro (iOS 17.5)", location: "London, UK", current: false, date: "Jun 22, 2026" }
  ]
};
