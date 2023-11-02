import { Billing } from "./billing";
import { PackageType } from "./packageType";
import { Transaction } from "./transaction";

describe('billing', () => { })

describe('calculate Basic package billing mothly fee', () => {
    const packageType = PackageType.BASIC;
    beforeEach(() => {
    })

    it('should return 0 when no transaction', () => {
        const transaction: Transaction[] = [];

        const billing = new Billing(packageType, transaction)
        const monthlyFee = billing.calculateMonthlyFee();

        expect(monthlyFee).toBe(0);
    })
    it('should calculate monthly fee', () => {
        const transaction = [
            new Transaction(
                new Date("2020-01-01 00:00:00"),
                new Date("2020-01-01 00:01:00")
            ),
        ];

        const billing = new Billing(packageType, transaction)
        const monthlyFee = billing.calculateMonthlyFee();

        expect(monthlyFee).toBe(1);
    })

    it('should return 2THB when call 2 minutes transaction', () => {
        const transaction = [
            new Transaction(
                new Date("2020-01-01 00:00:00"),
                new Date("2020-01-01 00:02:00")
            ),
        ];

        const billing = new Billing(packageType, transaction)
        const monthlyFee = billing.calculateMonthlyFee();

        expect(monthlyFee).toBe(2);
    })
})
