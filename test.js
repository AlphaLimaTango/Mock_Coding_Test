var VendingMachine = function(items) {
  this.balance = 0;
  this.nickel = 0;
  this.dime = 0;
  this.quarter = 0;
  this.dollar = 0;
  this.items = [
    { selector: "A", price: 65, count: 1 },
    { selector: "B", price: 100, count: 1 },
    { selector: "C", price: 150, count: 1 }
  ];
};

VendingMachine.prototype.getBalance = function() {
  return this.balance;
};

let assert = require("assert");

describe("Vending Machine", function() {
  describe("Balance of money inserted", function() {
    it("Is zero when initially powered up", function() {
      machine = new VendingMachine();
      assert.strictEqual(0, machine.getBalance());
    });
  });
});
