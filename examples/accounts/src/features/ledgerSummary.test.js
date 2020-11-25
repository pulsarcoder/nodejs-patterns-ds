import { expect } from 'chai';
import accountNature from '../enums/accountNature';

describe("Ledger Summary - basic functionality", () => {
    it("should return 23 primary ledgers", () => {
        const expected = [
            { ledgerId: '', name: '', accountNature: accountNature.CREDIT, debitAmount: 0, creditAmount: 0 }
        ];
        const actual = ledgerSummary();
        expect(actual).to.deep.eq(expected);
    })
})