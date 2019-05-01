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

VendingMachine.prototype.sellItem = function(selector) {
  for (item of this.items) {
    if (selector === item.selector) {
      this.balance -= item.price;
      item.count -= 1;
    }
  }
};

VendingMachine.prototype.returnMoney = function() {
  this.balance = 0;
};

VendingMachine.prototype.checkStockCount = function() {
  const stockCount = 0;
  for (let item in this.items) {
    stockCount += item.count;
  }
  return stockCount;
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

  describe("Sell Item", function() {
    it("minus item price from balance", function() {
      machine = new VendingMachine();
      machine.receiveMoney("dollar");
      machine.receiveMoney("quarter");
      machine.sellItem("B");
      assert.strictEqual(25, machine.getBalance());
    });
  });

  describe("coin return", function() {
    it("return all money", function() {
      machine = new VendingMachine();
      machine.receiveMoney("dollar");
      machine.receiveMoney("quarter");
      machine.returnMoney();
      assert.strictEqual(0, machine.getBalance());
    });
  });

  describe("check stock count", function() {
    xit("counts number of stock", function() {
      machine = new VendingMachine();
      assert.strictEqual(2, machine.checkStockCount());
    });
  });
});
