/**
 * KAST Central Data Store
 * Fully localized in English with Euro (€ / EUR) as the primary base currency.
 * Zero weekend transactions (strictly business days: Monday through Friday).
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
  // EUR SEPA Account (Primary Main Account)
  eurAccountName: "Samuel Fasawe",
  eurIban: "FR7630006000011234567890189",
  eurBic: "BNPAFRPPXXX",
  eurBankName: "Kast Europe / BNP Paribas Partner",
  eurBankAddress: "16 Boulevard des Italiens, 75009 Paris",
  eurCountry: "France",
  eurAccountType: "SEPA Instant Checking",

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
  ukSwift: "CLRBGB22XXX"
};

export const dashboardData = {
  balance: "€1,000.00",
  totalBalanceRaw: 1000.00,
  currency: "EUR",
  cardsCount: 1,
  activePerks: 3,
  carouselSlides: [
    { id: "total", title: "TOTAL BALANCE", amount: "€1,000.00", subtitle: "All accounts & wallets", change: "+100% today" },
    { id: "eur", title: "EUR SEPA ACCOUNT", amount: "€1,000.00", subtitle: "Kast Europe SEPA ···0189", change: "Available now" },
    { id: "usd", title: "USD CHECKING", amount: "$0.00", subtitle: "Lead Bank ···7073", change: "Zero balance" },
    { id: "crypto", title: "CRYPTO PORTFOLIO", amount: "€0.00", subtitle: "USDC, USDT, ETH, BTC", change: "0 active tokens" },
    { id: "rewards", title: "KAST REWARDS", amount: "1,420 PTS", subtitle: "Value: €14.20", change: "5% cashback active" }
  ]
};

export const cardData = {
  holder: "SAMUEL FASAWE",
  type: "Visa Infinite Black",
  network: "VISA",
  currency: "EUR",
  maskedNumber: "4532 •••• •••• 8824",
  fullNumber: "4532 8920 1842 8824",
  expiry: "08/29",
  cvv: "842",
  isFrozen: false,
  dailyLimit: 5000,
  spentToday: 0.00,
  monthlyLimit: 25000,
  spentMonth: 0.00,
  onlinePayments: true,
  contactless: true,
  international: true,
  atmWithdrawals: true
};

/**
 * Historical and recent transaction ledger.
 * All amounts are in EUR as requested.
 * Strictly scheduled on business weekdays (Monday-Friday), zero weekend entries.
 */
export const transactions = [
  // --- OCTOBER 2026 ---
  {
    id: "tx_oct_01",
    title: "Bank Transfer",
    toFrom: "From SIVAN OSHRI",
    amount: "+ 1,000.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "05 Oct · 11:42 AM",
    month: "OCTOBER 2026",
    category: "Bank Transfer",
    reference: "flw-2905aa09-82f9-4e11-a369-bdbb4c183401",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },

  // --- SEPTEMBER 2026 ---
  {
    id: "tx_sep_01",
    title: "Bank Transfer",
    toFrom: "From Stripe Payments Europe",
    amount: "+ 4,280.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "30 Sep · 03:10 PM",
    month: "SEPTEMBER 2026",
    category: "Merchant Payout",
    reference: "SEPA-20260930-08",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_02",
    title: "Card Purchase",
    toFrom: "LVMH Moët Hennessy Paris",
    amount: "- 640.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "29 Sep · 02:45 PM",
    month: "SEPTEMBER 2026",
    category: "Card Purchase",
    reference: "POS-98104",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_03",
    title: "Cashback Reward",
    toFrom: "KAST 5% Elite Cashback",
    amount: "+ 32.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "29 Sep · 02:46 PM",
    month: "SEPTEMBER 2026",
    category: "Reward",
    reference: "REW-98105",
    fee: "€0.00",
    account: "Rewards Wallet"
  },
  {
    id: "tx_sep_04",
    title: "Sent",
    toFrom: "To As4Q...J78f",
    amount: "- 850.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "28 Sep · 11:30 AM",
    month: "SEPTEMBER 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x8821b...4490",
    fee: "€0.00",
    account: "Solana Wallet"
  },
  {
    id: "tx_sep_05",
    title: "Bank Transfer",
    toFrom: "From TORB...HLIN",
    amount: "+ 1,500.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "25 Sep · 09:20 AM",
    month: "SEPTEMBER 2026",
    category: "Wire Transfer",
    reference: "KAST-20260925-01",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_06",
    title: "Card Purchase",
    toFrom: "Air France VIP Lounge",
    amount: "- 185.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "24 Sep · 07:15 AM",
    month: "SEPTEMBER 2026",
    category: "Card Purchase",
    reference: "POS-97210",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_07",
    title: "Sent",
    toFrom: "To Elena_VIP",
    amount: "- 250.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "22 Sep · 06:40 PM",
    month: "SEPTEMBER 2026",
    category: "Internal Transfer",
    reference: "KAST-20260922-04",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_08",
    title: "Bank Transfer",
    toFrom: "From ClearBank GBP Exchange",
    amount: "+ 2,150.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "21 Sep · 01:25 PM",
    month: "SEPTEMBER 2026",
    category: "FX Transfer",
    reference: "FX-20260921-02",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_09",
    title: "Card Purchase",
    toFrom: "Amazon EU SARL",
    amount: "- 124.90 EUR",
    type: "out",
    status: "completed",
    dateTime: "18 Sep · 05:10 PM",
    month: "SEPTEMBER 2026",
    category: "Card Purchase",
    reference: "POS-96302",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_10",
    title: "Sent",
    toFrom: "To As4Q...J78f",
    amount: "- 400.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "17 Sep · 10:15 AM",
    month: "SEPTEMBER 2026",
    category: "Crypto Transfer (USDC)",
    reference: "0x7712a...1984",
    fee: "€0.00",
    account: "Solana Wallet"
  },
  {
    id: "tx_sep_11",
    title: "Bank Transfer",
    toFrom: "From Google Cloud EMEA",
    amount: "+ 1,850.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "15 Sep · 02:40 PM",
    month: "SEPTEMBER 2026",
    category: "Direct Deposit",
    reference: "SEPA-20260915-05",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_12",
    title: "Card Purchase",
    toFrom: "Monoprix Haussmann Paris",
    amount: "- 56.80 EUR",
    type: "out",
    status: "completed",
    dateTime: "14 Sep · 12:30 PM",
    month: "SEPTEMBER 2026",
    category: "Card Purchase",
    reference: "POS-95101",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_13",
    title: "ATM Cash Withdrawal",
    toFrom: "BNP Paribas ATM Paris",
    amount: "- 200.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "11 Sep · 03:00 PM",
    month: "SEPTEMBER 2026",
    category: "ATM Withdrawal",
    reference: "ATM-20260911-01",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_14",
    title: "Bank Transfer",
    toFrom: "From TORB...HLIN",
    amount: "+ 3,100.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "09 Sep · 11:05 AM",
    month: "SEPTEMBER 2026",
    category: "Wire Transfer",
    reference: "KAST-20260909-02",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_15",
    title: "Card Purchase",
    toFrom: "SNCF TGV First Class",
    amount: "- 168.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "07 Sep · 08:45 AM",
    month: "SEPTEMBER 2026",
    category: "Card Purchase",
    reference: "POS-94210",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_16",
    title: "Online Subscription",
    toFrom: "Spotify Technology SA",
    amount: "- 14.99 EUR",
    type: "out",
    status: "completed",
    dateTime: "04 Sep · 07:00 AM",
    month: "SEPTEMBER 2026",
    category: "Subscription",
    reference: "SUB-83910",
    fee: "€0.00",
    account: "KAST Black Metal Card"
  },
  {
    id: "tx_sep_17",
    title: "Bank Transfer",
    toFrom: "From Revolut Ltd Europe",
    amount: "+ 950.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "03 Sep · 04:15 PM",
    month: "SEPTEMBER 2026",
    category: "SEPA Transfer",
    reference: "SEPA-20260903-01",
    fee: "€0.00",
    account: "SEPA EUR Account"
  },
  {
    id: "tx_sep_18",
    title: "Bank Transfer",
    toFrom: "From BNP Paribas Wealth",
    amount: "+ 1,500.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "01 Sep · 09:30 AM",
    month: "SEPTEMBER 2026",
    category: "SEPA Transfer",
    reference: "SEPA-20260901-01",
    fee: "€0.00",
    account: "SEPA EUR Account"
  }
];

export const notificationsData = [
  {
    id: "sivan_transfer",
    type: "in",
    title: "You Received €€€",
    date: "05 Oct · 11:42 AM",
    message: "SIVAN OSHRI sent you 1,000.00 EUR via Bank Transfer (Ref: flw-2905aa09-82f9-4e11-a369-bdbb4c183401). Funds are now available in your SEPA EUR Account.",
    unread: true,
    section: "TODAY"
  },
  {
    id: "account_cancellation",
    type: "in",
    title: "Account Compliance Advisory",
    date: "10:15 AM",
    message: "Hello Samuel,\n\nWe hope this message finds you well. We sincerely appreciate you choosing KAST for your digital banking needs.\n\nFollowing a recent compliance review, we regret to inform you that we must proceed with reviewing your virtual EUR account operations. Any deposited funds will be fully refunded to originating verified accounts if verification is not finalized.\n\nThank you for your cooperation.\n\nSincerely,\nKAST Compliance Team",
    unread: true,
    section: "TODAY"
  },
  {
    id: "verification_submitted",
    type: "in",
    title: "Verification in Review",
    date: "10:30 AM",
    message: "We have successfully received your compliance documentation and explanations for your EUR transfers. Our regulatory compliance specialists are currently reviewing your file. You will receive an automated notification as soon as your funds are approved and released.",
    unread: true,
    section: "TODAY"
  },
  {
    id: "sep_welcome",
    type: "in",
    title: "Account Successfully Opened",
    date: "01 Sep · 09:30 AM",
    message: "Welcome to KAST! Your SEPA Instant EUR Account has been provisioned and is ready for transfers.",
    unread: false,
    section: "EARLIER"
  }
];

export const securitySettings = {
  biometricsEnabled: true,
  twoFactorEnabled: true,
  loginAlerts: true,
  freezeCardOnSuspicious: true,
  activeSessions: [
    { device: "iPhone 15 Pro (Current)", location: "Paris, France", ip: "194.28.112.4", active: true },
    { device: "MacBook Pro 16", location: "London, UK", ip: "82.165.197.10", active: false }
  ]
};

export const limitsData = {
  currency: "EUR",
  dailyLimit: 10000,
  dailySpent: 4500,
  monthlyAtm: 5000,
  monthlyAtmUsed: 650,
  monthlyWire: 50000,
  monthlyWireUsed: 12400,
  cryptoTransfer24h: 25000,
  cryptoTransfer24hUsed: 2750
};
