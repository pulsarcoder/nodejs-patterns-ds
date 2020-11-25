import accountNature from "../enums/accountNature";

const liabilities = [
    { ledgerId: "CAPITAL_ACCOUNT", name: "Capital A/C", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "CURRENT_LIABILITIES", name: "Current Liabilities", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "PROFIT_AND_LOSS", name: "Profit & Loss A/C", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "LOANS_AND_LIABILITIES", name: "Loans & Liabilities", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "BRANCHES_AND_DIVISIONS", name: "Branches & Divisions", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 }
];

const assets = [
    { ledgerId: "FIXED_ASSETS", name: "Fixed Assets", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "INVESTMENT", name: "Investment", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
    { ledgerId: "CURRENT_ASSETS", name: "Current Assets", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
];

export const balanceSheetDifference = ({ liabilities, assets }) => (
    liabilities.reduce((total, liability) => (total + liability.creditAmount - liability.debitAmount), 0)
    - assets.reduce((total, asset) => (total + asset.creditAmount - asset.debitAmount), 0)
)

export const balanceSheet = () => ({ liabilities, assets });