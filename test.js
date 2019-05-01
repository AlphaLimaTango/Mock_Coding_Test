var VendingMachine = function(items) {
  this.balance = 0;
  this.coins = [
    { type: "nickle", value: 5, count: 0 },
    { type: "dime", value: 10, count: 0 },
    { type: "quarter", value: 25, count: 0 },
    { type: "dollar", value: 100, count: 0 }
  ];
  this.items = [
    { selector: "A", price: 65, count: 1 },
    { selector: "B", price: 100, count: 1 },
    { selector: "C", price: 150, count: 1 }
  ];
};

VendingMachine.prototype.getBalance = function() {
  return this.balance;
};

VendingMachine.prototype.receiveMoney = function(coinType) {
  for (coin of this.coins) {
    if (coin.type === coinType) {
      this.balance += coin.value;
    }
  }
};

VendingMachine.prototype.sellItem = function(item) {
  for (object of this.items) {
    if (item === object.type) {
      this.balance += this.items.selector;
    }
  }
};

let assert = require("assert");

describe("Vending Machine", function() {
  describe("Balance of money inserted", function() {
    it("Is zero when initially powered up", function() {
      machine = new VendingMachine();
      assert.strictEqual(0, machine.getBalance());
    });
  });

  describe("Receive Money", function() {
    it("Adds the value of coin to balance", function() {
      machine = new VendingMachine();
      machine.receiveMoney("nickle");
      assert.strictEqual(5, machine.getBalance());
    });
  });
});
