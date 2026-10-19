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
  eurIban: "GB84CLRB04288613032354",
  eurBic: "CLRBGB22XXX",
  eurBankName: "ClearBank Limited",
  eurBankAddress: "Level 27, The Broadgate Tower, 20 Primrose Street, London, EC2A 2EW",
  eurCountry: "United Kingdom",
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
  ukAccountNumber: "00025261",
  ukSortCode: "04-10-37",
  ukBankName: "Global Remit Financial Services Ltd",
  ukBankAddress: "Suite 6034, Unit 3A 34-35 Hatton Garden, Holborn, London, England ECIN 8DX",
  ukCountry: "United Kingdom",
  ukSwift: "GRFRGB22XXX"
};

export const dashboardData = {
  balance: "€1.70",
  totalBalanceRaw: 1.70,
  currency: "EUR",
  gbpBalance: "£0.00",
  cardsCount: 1,
  activePerks: 3,
  carouselSlides: [
    { id: "total", title: "TOTAL BALANCE", amount: "€1.70", subtitle: "All accounts & wallets", change: "1 deposit on hold" },
    { id: "eur", title: "EUR SEPA ACCOUNT", amount: "€1.70", subtitle: "Kast Europe SEPA ···0189", change: "€1,000.00 pending" },
    { id: "gbp", title: "CLEARBANK GBP", amount: "£0.00", subtitle: "ClearBank UK ···5261", change: "£0.00 net balance" },
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
    id: "tx_oct_06",
    title: "Sent",
    toFrom: "To CybS...ZUtS",
    amount: "- £50.00 GBP",
    type: "out",
    status: "completed",
    dateTime: "16 Oct · 11:55 PM",
    month: "OCTOBER 2026",
    category: "Crypto Transfer (USDT)",
    reference: "5yR9xK...8mQ2",
    fee: "£0.00",
    account: "Solana Wallet",
    note: "USDT withdrawal to CybSnrCujM1RLzvGvFzNYgmm8WLCRP3gpZLDo6UoZUtS on Solana"
  },
  {
    id: "tx_oct_05",
    title: "Bank Transfer",
    toFrom: "From Neil Wixon",
    amount: "+ £30.00 GBP",
    type: "in",
    status: "completed",
    dateTime: "16 Oct · 11:48 PM",
    month: "OCTOBER 2026",
    category: "Payments and transfers",
    reference: "400000001858217509 • BOOKING",
    fee: "£0.00",
    account: "ClearBank GBP Account",
    note: "Booking payment received from Neil Wixon"
  },
  {
    id: "tx_oct_04",
    title: "Bank Transfer",
    toFrom: "From Neil Wixon",
    amount: "+ £20.00 GBP",
    type: "in",
    status: "completed",
    dateTime: "16 Oct · 11:36 PM",
    month: "OCTOBER 2026",
    category: "Payments and transfers",
    reference: "500000001853339931 • BOOKING",
    fee: "£0.00",
    account: "ClearBank GBP Account",
    note: "Booking payment received from Neil Wixon"
  },
  {
    id: "tx_oct_03",
    title: "Sent",
    toFrom: "To CybS...ZUtS",
    amount: "- 59.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "16 Oct · 08:35 PM",
    month: "OCTOBER 2026",
    category: "Crypto Transfer (USDC)",
    reference: "4uW8z...9K2p",
    fee: "€0.00",
    account: "Solana Wallet",
    note: "Crypto withdrawal to CybSnrCujM1RLzvGvFzNYgmm8WLCRP3gpZLDo6UoZUtS on Solana"
  },
  {
    id: "tx_oct_02",
    title: "Vita Wallet Transfer",
    toFrom: "From Juan Carlos",
    amount: "+ 59.76 EUR",
    type: "in",
    status: "completed",
    dateTime: "16 Oct · 08:18 PM",
    month: "OCTOBER 2026",
    category: "Vita Wallet",
    reference: "VW-20261016-5976",
    fee: "€0.00",
    account: "SEPA EUR Account",
    note: "Received via Vita Wallet from Juan Carlos"
  },
  {
    id: "tx_oct_01",
    title: "Bank Transfer",
    toFrom: "From SIVAN OSHRI",
    amount: "+ 1,000.00 EUR",
    type: "in",
    status: "processing",
    dateTime: "05 Oct · 11:42 AM",
    month: "OCTOBER 2026",
    category: "Bank Transfer",
    reference: "flw-2905aa09-82f9-4e11-a369-bdbb4c183401",
    fee: "€0.00",
    account: "SEPA EUR Account",
    note: "Under compliance review - documentation requested"
  },

  // --- SEPTEMBER 2026 ---
  {
    id: "tx_sep_01",
    title: "Bank Transfer",
    toFrom: "To BNP Paribas Wealth",
    amount: "- 4,280.00 EUR",
    type: "out",
    status: "completed",
    dateTime: "30 Sep · 03:10 PM",
    month: "SEPTEMBER 2026",
    category: "SEPA Transfer",
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
    amount: "+ 800.00 EUR",
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
    amount: "+ 1,200.00 EUR",
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
    amount: "- 136.27 EUR",
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
    toFrom: "From Stripe Payments Europe",
    amount: "+ 1,500.00 EUR",
    type: "in",
    status: "completed",
    dateTime: "15 Sep · 02:40 PM",
    month: "SEPTEMBER 2026",
    category: "Merchant Payout",
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
    amount: "+ 1,200.00 EUR",
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
  // --- OCTOBER 18, 2026 (TODAY) ---
  {
    id: "compliance_review_in_progress",
    type: "in",
    title: "Compliance Review in Progress",
    date: "18 Oct · 10:18 AM",
    message: "Your submitted compliance documentation for the 1,000.00 EUR incoming transfer from SIVAN OSHRI is currently under standard administrative review. Please note that regulatory compliance reviews take place within 60 to 90 business days. You will be notified automatically once the review is completed and your funds are cleared.",
    unread: false,
    section: "TODAY",
    txId: "tx_oct_01",
    category: "Compliance",
    badge: "Under Review (60-90 Days)",
    badgeColor: "amber"
  },

  // --- OCTOBER 16, 2026 ---
  {
    id: "notif_tx_oct_06",
    type: "out",
    title: "USDT Crypto Withdrawal Sent",
    date: "16 Oct · 11:55 PM",
    message: "£50.00 GBP in USDT was successfully transferred to Solana address CybS...ZUtS (Tx: 5yR9xK...8mQ2).",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_06",
    category: "Crypto",
    badge: "Completed",
    badgeColor: "emerald"
  },
  {
    id: "notif_tx_oct_05",
    type: "in",
    title: "Payment Received from Neil Wixon",
    date: "16 Oct · 11:48 PM",
    message: "You received £30.00 GBP from Neil Wixon (Ref: 400000001858217509 • BOOKING) into your ClearBank GBP Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_05",
    category: "Deposit",
    badge: "Received",
    badgeColor: "emerald"
  },
  {
    id: "notif_tx_oct_04",
    type: "in",
    title: "Payment Received from Neil Wixon",
    date: "16 Oct · 11:36 PM",
    message: "You received £20.00 GBP from Neil Wixon (Ref: 500000001853339931 • BOOKING) into your ClearBank GBP Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_04",
    category: "Deposit",
    badge: "Received",
    badgeColor: "emerald"
  },
  {
    id: "notif_tx_oct_03",
    type: "out",
    title: "Crypto Withdrawal Sent",
    date: "16 Oct · 08:35 PM",
    message: "59.00 EUR was successfully transferred to Solana address CybS...ZUtS (Tx: 4uW8z...9K2p).",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_03",
    category: "Crypto",
    badge: "Completed",
    badgeColor: "emerald"
  },
  {
    id: "notif_tx_oct_02",
    type: "in",
    title: "Funds Received via Vita Wallet",
    date: "16 Oct · 08:18 PM",
    message: "You received 59.76 EUR from Juan Carlos via Vita Wallet. The funds have been credited to your SEPA EUR Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_02",
    category: "Vita Wallet",
    badge: "Received",
    badgeColor: "emerald"
  },
  {
    id: "compliance_docs_received",
    type: "in",
    title: "Compliance Documents Received",
    date: "16 Oct · 10:56 AM",
    message: "We have successfully received your compliance documentation and explanation of transfer purpose for the pending deposit of 1,000.00 EUR from SIVAN OSHRI (Ref: flw-2905aa09-82f9-4e11-a369-bdbb4c183401). Thank you for submitting the required verification.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_01",
    category: "Compliance",
    badge: "Documents Received",
    badgeColor: "emerald"
  },

  // --- OCTOBER 05, 2026 ---
  {
    id: "action_required",
    type: "in",
    title: "Funds Held: Action Required",
    date: "05 Oct · 11:42 AM",
    message: "Your pending deposit of 1,000.00 EUR from SIVAN OSHRI is currently undergoing compliance review.\nTo meet standard financial security regulations and expedite release of your funds, please provide the following details:\n- Your business or personal relationship with the sender.\n- Detailed explanation of the transfer purpose declared.\n- Relevant supporting documentation, invoices, or service agreements.\nYou have 7 business days to submit the required documentation. Thank you for your cooperation.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_01",
    category: "Compliance",
    badge: "Action Required",
    badgeColor: "amber"
  },
  {
    id: "sivan_transfer",
    type: "in",
    title: "Incoming Transfer Pending",
    date: "05 Oct · 11:42 AM",
    message: "A Bank Transfer of 1,000.00 EUR from SIVAN OSHRI (Ref: flw-2905aa09-82f9-4e11-a369-bdbb4c183401) is currently pending compliance verification.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_01",
    category: "Deposit",
    badge: "Pending",
    badgeColor: "amber"
  },

  // --- SEPTEMBER 2026 ---
  {
    id: "notif_tx_sep_01",
    type: "out",
    title: "Bank Transfer Sent",
    date: "30 Sep · 03:10 PM",
    message: "You sent 4,280.00 EUR via SEPA Transfer to BNP Paribas Wealth (Ref: SEPA-20260930-08). Status: Completed.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_01"
  },
  {
    id: "notif_tx_sep_02",
    type: "out",
    title: "Card Purchase Approved",
    date: "29 Sep · 02:45 PM",
    message: "You spent 640.00 EUR at LVMH Moët Hennessy Paris with your KAST Black Metal Card ···8824.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_02"
  },
  {
    id: "notif_tx_sep_03",
    type: "in",
    title: "Cashback Reward Received",
    date: "29 Sep · 02:46 PM",
    message: "+32.00 EUR cashback was credited to your Rewards Wallet for your purchase at LVMH Moët Hennessy Paris.",
    unread: true,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_03"
  },
  {
    id: "notif_tx_sep_04",
    type: "out",
    title: "Crypto Transfer Sent",
    date: "28 Sep · 11:30 AM",
    message: "850.00 EUR in USDC was dispatched to wallet As4Q...J78f on Solana (Tx: 0x8821b...4490).",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_04"
  },
  {
    id: "notif_tx_sep_05",
    type: "in",
    title: "Wire Deposit Received",
    date: "25 Sep · 09:20 AM",
    message: "You received a wire deposit of 800.00 EUR from TORB...HLIN into your SEPA EUR Account.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_05"
  },
  {
    id: "notif_tx_sep_06",
    type: "out",
    title: "Card Purchase Approved",
    date: "24 Sep · 07:15 AM",
    message: "You paid 185.00 EUR to Air France VIP Lounge (Paris CDG) with your KAST Black Metal Card.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_06"
  },
  {
    id: "notif_tx_sep_07",
    type: "out",
    title: "Internal Transfer Sent",
    date: "22 Sep · 06:40 PM",
    message: "You sent 250.00 EUR instantly to @Elena_VIP via KAST tag.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_07"
  },
  {
    id: "notif_tx_sep_08",
    type: "in",
    title: "FX Exchange Credited",
    date: "21 Sep · 01:25 PM",
    message: "1,200.00 EUR converted from ClearBank GBP Exchange was credited to your SEPA EUR Account.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_08"
  },
  {
    id: "notif_tx_sep_09",
    type: "out",
    title: "Card Purchase Approved",
    date: "18 Sep · 05:10 PM",
    message: "You spent 136.27 EUR at Amazon EU SARL with card ending in 8824.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_09"
  },
  {
    id: "notif_tx_sep_10",
    type: "out",
    title: "Crypto Transfer Sent",
    date: "17 Sep · 10:15 AM",
    message: "400.00 EUR in USDC was transferred to external wallet As4Q...J78f (Tx: 0x7712a...1984).",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_10"
  },
  {
    id: "notif_tx_sep_11",
    type: "in",
    title: "Merchant Payout Received",
    date: "15 Sep · 02:40 PM",
    message: "You received a merchant payout of 1,500.00 EUR from Stripe Payments Europe (Ref: SEPA-20260915-05).",
    unread: true,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_11"
  },
  {
    id: "notif_tx_sep_12",
    type: "out",
    title: "Card Purchase Approved",
    date: "14 Sep · 12:30 PM",
    message: "You spent 56.80 EUR at Monoprix Haussmann Paris with card ending in 8824.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_12"
  },
  {
    id: "notif_tx_sep_13",
    type: "out",
    title: "ATM Cash Withdrawal",
    date: "11 Sep · 03:00 PM",
    message: "200.00 EUR was dispensed from BNP Paribas ATM (Paris Opera).",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_13"
  },
  {
    id: "notif_tx_sep_14",
    type: "in",
    title: "Wire Deposit Received",
    date: "09 Sep · 11:05 AM",
    message: "You received a wire deposit of 1,200.00 EUR from TORB...HLIN into your SEPA EUR Account.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_14"
  },
  {
    id: "notif_tx_sep_15",
    type: "out",
    title: "Card Purchase Approved",
    date: "07 Sep · 08:45 AM",
    message: "You spent 168.00 EUR on SNCF TGV First Class tickets with card ending in 8824.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_15"
  },
  {
    id: "notif_tx_sep_16",
    type: "out",
    title: "Subscription Paid",
    date: "04 Sep · 07:00 AM",
    message: "Your monthly subscription of 14.99 EUR to Spotify Technology SA was successfully debited.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_16"
  },
  {
    id: "notif_tx_sep_17",
    type: "in",
    title: "SEPA Transfer Received",
    date: "03 Sep · 04:15 PM",
    message: "You received 950.00 EUR from Revolut Ltd Europe into your SEPA EUR account.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_17"
  },
  {
    id: "notif_tx_sep_18",
    type: "in",
    title: "Initial Account Deposit Received",
    date: "01 Sep · 09:30 AM",
    message: "You received an initial account funding of 1,500.00 EUR from BNP Paribas Wealth.",
    unread: false,
    section: "SEPTEMBER 2026",
    txId: "tx_sep_18"
  },
  {
    id: "sep_welcome",
    type: "in",
    title: "Account Successfully Opened",
    date: "01 Sep · 09:30 AM",
    message: "Welcome to KAST! Your SEPA Instant EUR Account has been provisioned and is ready for transfers.",
    unread: false,
    section: "SEPTEMBER 2026"
  }
];

/**
 * Catalog of available compliance and transactional notifications
 * that can be toggled or triggered live from the Admin Dashboard.
 */
export const availableNotificationsCatalog = {
  notif_tx_oct_06: {
    id: "notif_tx_oct_06",
    type: "out",
    title: "USDT Crypto Withdrawal Sent",
    date: "16 Oct · 11:55 PM",
    message: "£50.00 GBP in USDT was successfully transferred to Solana address CybS...ZUtS (Tx: 5yR9xK...8mQ2).",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_06",
    category: "Crypto",
    badge: "Completed",
    badgeColor: "emerald"
  },
  notif_tx_oct_05: {
    id: "notif_tx_oct_05",
    type: "in",
    title: "Payment Received from Neil Wixon",
    date: "16 Oct · 11:48 PM",
    message: "You received £30.00 GBP from Neil Wixon (Ref: 400000001858217509 • BOOKING) into your ClearBank GBP Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_05",
    category: "Deposit",
    badge: "Received",
    badgeColor: "emerald"
  },
  notif_tx_oct_04: {
    id: "notif_tx_oct_04",
    type: "in",
    title: "Payment Received from Neil Wixon",
    date: "16 Oct · 11:36 PM",
    message: "You received £20.00 GBP from Neil Wixon (Ref: 500000001853339931 • BOOKING) into your ClearBank GBP Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_04",
    category: "Deposit",
    badge: "Received",
    badgeColor: "emerald"
  },
  notif_tx_oct_03: {
    id: "notif_tx_oct_03",
    type: "out",
    title: "Crypto Withdrawal Sent",
    date: "16 Oct · 08:35 PM",
    message: "59.00 EUR was successfully transferred to Solana address CybS...ZUtS (Tx: 4uW8z...9K2p).",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_03",
    category: "Crypto",
    badge: "Completed",
    badgeColor: "emerald"
  },
  notif_tx_oct_02: {
    id: "notif_tx_oct_02",
    type: "in",
    title: "Funds Received via Vita Wallet",
    date: "16 Oct · 08:18 PM",
    message: "You received 59.76 EUR from Juan Carlos via Vita Wallet. The funds have been credited to your SEPA EUR Account.",
    unread: false,
    section: "OCTOBER 2026",
    txId: "tx_oct_02",
    category: "Vita Wallet",
    badge: "Received",
    badgeColor: "emerald"
  },
  compliance_review_in_progress: {
    id: "compliance_review_in_progress",
    type: "in",
    title: "Compliance Review in Progress",
    date: "18 Oct · 10:18 AM",
    message: "Your submitted compliance documentation for the 1,000.00 EUR incoming transfer from SIVAN OSHRI is currently under standard administrative review. Please note that regulatory compliance reviews take place within 60 to 90 business days. You will be notified automatically once the review is completed and your funds are cleared.",
    unread: false,
    section: "TODAY",
    category: "Compliance",
    badge: "Under Review (60-90 Days)",
    badgeColor: "amber"
  },
  compliance_docs_received: {
    id: "compliance_docs_received",
    type: "in",
    title: "Compliance Documents Received",
    date: "16 Oct · 10:56 AM",
    message: "We have successfully received your compliance documentation and explanation of transfer purpose for the pending deposit of 1,000.00 EUR from SIVAN OSHRI (Ref: flw-2905aa09-82f9-4e11-a369-bdbb4c183401). Thank you for submitting the required verification.",
    unread: false,
    section: "OCTOBER 2026",
    category: "Compliance",
    badge: "Documents Received",
    badgeColor: "emerald"
  },
  verification_submitted: {
    id: "verification_submitted",
    type: "in",
    title: "Verification in Review",
    date: "Today · 10:30 AM",
    message: "We have successfully received your compliance documentation and explanations for your EUR transfers. Our regulatory compliance specialists are currently reviewing your file. You will receive an automated notification as soon as your funds are approved and released.",
    unread: true,
    section: "TODAY",
    category: "Compliance",
    badge: "Underwriting",
    badgeColor: "amber"
  },
  account_cancellation: {
    id: "account_cancellation",
    type: "in",
    title: "Account Compliance Advisory",
    date: "Today · 10:15 AM",
    message: "Hello Samuel,\n\nWe hope this message finds you well. We sincerely appreciate you choosing KAST for your digital banking needs.\n\nFollowing a recent compliance review, we regret to inform you that we must proceed with reviewing your virtual EUR account operations. Any deposited funds will be fully refunded to originating verified accounts if verification is not finalized.\n\nThank you for your cooperation.\n\nSincerely,\nKAST Compliance Team",
    unread: true,
    section: "TODAY",
    category: "Risk & AML",
    badge: "Advisory Warning",
    badgeColor: "rose"
  },
  action_required: {
    id: "action_required",
    type: "in",
    title: "Funds Held: Action Required",
    date: "05 Oct · 11:42 AM",
    message: "Your pending deposit of 1,000.00 EUR from SIVAN OSHRI is currently undergoing compliance review.\nTo meet standard financial security regulations and expedite release of your funds, please provide the following details:\n- Your business or personal relationship with the sender.\n- Detailed explanation of the transfer purpose declared.\n- Relevant supporting documentation, invoices, or service agreements.\nYou have 7 business days to submit the required documentation. Thank you for your cooperation.",
    unread: true,
    section: "TODAY",
    category: "Compliance",
    badge: "Action Required",
    badgeColor: "amber"
  },
  funds_released: {
    id: "funds_released",
    type: "in",
    title: "You Received €1,000.00 EUR",
    date: "Just now",
    message: "Your deposit of 1,000.00 EUR from SIVAN OSHRI (Ref: flw-2905aa09-82f9-4e11-a369-bdbb4c183401) has completed compliance verification. Funds are now cleared and available in your SEPA EUR Account.",
    unread: true,
    section: "TODAY",
    category: "Deposit",
    badge: "Cleared & Approved",
    badgeColor: "emerald"
  }
};

export const isNotificationInInbox = (id) => {
  return notificationsData.some((n) => n.id === id);
};

const getReadNotifSet = () => {
  try {
    if (typeof sessionStorage !== "undefined") {
      const raw = sessionStorage.getItem("kast_read_notifs");
      return raw ? new Set(JSON.parse(raw)) : new Set();
    }
  } catch (e) {}
  return new Set();
};

export const markNotificationAsRead = (id) => {
  const notif = notificationsData.find((n) => n.id === id);
  if (notif) {
    notif.unread = false;
    try {
      if (typeof sessionStorage !== "undefined") {
        const readSet = getReadNotifSet();
        readSet.add(id);
        sessionStorage.setItem("kast_read_notifs", JSON.stringify([...readSet]));
      }
    } catch (e) {}
    window.dispatchEvent(new CustomEvent("kast_notifications_updated", { detail: { id, unread: false } }));
    return true;
  }
  return false;
};

// Apply session read states
try {
  const initialReadSet = getReadNotifSet();
  if (initialReadSet.size > 0) {
    notificationsData.forEach((n) => {
      if (initialReadSet.has(n.id)) {
        n.unread = false;
      }
    });
  }
} catch (e) {}

export const dispatchNotification = (idOrItem, triggerPush = true) => {
  const item = typeof idOrItem === "string" ? availableNotificationsCatalog[idOrItem] : idOrItem;
  if (!item) return;

  const existingIdx = notificationsData.findIndex((n) => n.id === item.id);
  if (existingIdx !== -1) {
    notificationsData.splice(existingIdx, 1);
  }

  notificationsData.unshift({
    ...item,
    unread: true,
    date: item.date || "Just now",
    section: "TODAY"
  });

  window.dispatchEvent(new CustomEvent("kast_notifications_updated", { detail: item }));

  if (triggerPush) {
    window.dispatchEvent(new CustomEvent("kast_push_notification", { detail: item }));
  }
};

export const removeNotification = (id) => {
  const idx = notificationsData.findIndex((n) => n.id === id);
  if (idx !== -1) {
    notificationsData.splice(idx, 1);
    window.dispatchEvent(new CustomEvent("kast_notifications_updated", { detail: { id } }));
  }
};

export const setTransactionStatus = (status, options = {}) => {
  const tx = transactions.find((t) => t.id === "tx_oct_01");
  if (tx) {
    tx.status = status;
    if (status === "completed") {
      tx.note = options.note || "Compliance verified & approved";
      dashboardData.balance = "€1,001.70";
      dashboardData.totalBalanceRaw = 1001.70;
      dashboardData.carouselSlides[0].amount = "€1,001.70";
      dashboardData.carouselSlides[0].change = "€1,000.00 cleared";
      dashboardData.carouselSlides[1].amount = "€1,001.70";
      dashboardData.carouselSlides[1].change = "SEPA Instant available";
    } else {
      tx.status = "processing";
      tx.note = options.note || "Under compliance review - documentation requested";
      dashboardData.balance = "€1.70";
      dashboardData.totalBalanceRaw = 1.70;
      dashboardData.carouselSlides[0].amount = "€1.70";
      dashboardData.carouselSlides[0].change = "1 deposit on hold";
      dashboardData.carouselSlides[1].amount = "€1.70";
      dashboardData.carouselSlides[1].change = "€1,000.00 pending";
    }
    window.dispatchEvent(new CustomEvent("kast_transaction_updated", { detail: { status, tx } }));
  }
};

export const triggerCustomPush = (title, message) => {
  const item = {
    id: "custom_" + Date.now(),
    type: "in",
    title,
    message,
    date: "Just now",
    unread: true,
    section: "TODAY"
  };
  notificationsData.unshift(item);
  window.dispatchEvent(new CustomEvent("kast_notifications_updated", { detail: item }));
  window.dispatchEvent(new CustomEvent("kast_push_notification", { detail: item }));
};

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
