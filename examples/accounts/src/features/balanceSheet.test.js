import { expect } from 'chai';
import accountNature from '../enums/accountNature';
import { balanceSheet, balanceSheetDifference } from './BalanceSheet';

describe("BalanceSheet - basic functionality", () => {
    // it("should have liabilities and assets as empty array", () => {
    //     const expected = { liabilities: [], assets: [] };
    //     const actual = balanceSheet();
    //     expect(actual).to.be.deep.eq(expected);
    // })

    it("should have default accounts in liabilities", () => {
        const expected = {
            liabilities: [
                { ledgerId: "CAPITAL_ACCOUNT", name: "Capital A/C", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "CURRENT_LIABILITIES", name: "Current Liabilities", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "PROFIT_AND_LOSS", name: "Profit & Loss A/C", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "LOANS_AND_LIABILITIES", name: "Loans & Liabilities", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "BRANCHES_AND_DIVISIONS", name: "Branches & Divisions", accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 }
            ]
        }
        const actual = balanceSheet();
        expect(actual).excluding('assets').to.deep.eq(expected);
    })

    it("should have default accounts in assets", () => {
        const expected = {
            assets: [
                { ledgerId: "FIXED_ASSETS", name: "Fixed Assets", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "INVESTMENT", name: "Investment", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
                { ledgerId: "CURRENT_ASSETS", name: "Current Assets", accountNature: accountNature.DEBIT, debitAmount: 0, creditAmount: 0 },
            ]
        }
        const actual = balanceSheet();
        expect(actual).excluding('liabilities').to.deep.eq(expected);
    })

    it("difference of liabilities and assets equal to zero", () => {
        const expected = 0;
        const actual = balanceSheetDifference(balanceSheet());
        expect(actual).to.be.eq(expected);
    })
})
