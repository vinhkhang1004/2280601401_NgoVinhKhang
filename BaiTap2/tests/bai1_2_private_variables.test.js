const { createBankAccount } = require('../src/bai1_2_private_variables');

describe('Bài 1.2: Bank Account', () => {
  let account;

  beforeEach(() => {
    account = createBankAccount(100);
  });

  test('khởi tạo với số dư ban đầu', () => {
    expect(account.getBalance()).toBe(100);
  });

  test('deposit tăng số dư', () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('withdraw giảm số dư', () => {
    account.withdraw(40);
    expect(account.getBalance()).toBe(60);
  });

  test('không thể rút quá số dư', () => {
    expect(() => account.withdraw(200)).toThrow('Số dư không đủ');
  });

  test('không thể nạp/rút số âm', () => {
    expect(() => account.deposit(-10)).toThrow();
    expect(() => account.withdraw(-10)).toThrow();
  });

  test('ghi lại lịch sử giao dịch', () => {
    account.deposit(50);
    account.withdraw(20);
    const history = account.getTransactionHistory();
    
    expect(history.length).toBe(2);
    expect(history[0].type).toBe('deposit');
    expect(history[0].amount).toBe(50);
    expect(history[1].type).toBe('withdraw');
    expect(history[1].amount).toBe(20);
  });
});