var VendingMachine = function () {
    this.balance = 0;
};

VendingMachine.prototype.getBalance = function () {
    return this.balance;
};

let assert = require('assert');

describe('Vending Machine', function () {

    describe('Balance of money inserted', function () {
        it('Is zero when initially powered up', function () {
            machine = new VendingMachine();
            assert.strictEqual(0, machine.getBalance())
        });
    });
});
