/**
 * Tạo tài khoản ngân hàng với các biến private.
 * @param {number} initialBalance - Số dư ban đầu.
 * @returns {Object} Object chứa các methods giao dịch.
 */
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  const history = [];

  /**
   * Ghi log giao dịch.
   * @param {string} type - Loại giao dịch.
   * @param {number} amount - Số tiền.
   */
  const addHistory = (type, amount) => {
    history.push({
      type,
      amount,
      date: new Date(),
      balanceAfter: balance
    });
  };

  return {
    /**
     * Nạp tiền vào tài khoản.
     * @param {number} amount - Số tiền nạp.
     * @throws {Error} Nếu số tiền <= 0.
     */
    deposit(amount) {
      if (amount <= 0) throw new Error('Số tiền nạp phải lớn hơn 0');
      balance += amount;
      addHistory('deposit', amount);
      return balance;
    },

    /**
     * Rút tiền từ tài khoản.
     * @param {number} amount - Số tiền rút.
     * @throws {Error} Nếu số tiền <= 0 hoặc vượt quá số dư.
     */
    withdraw(amount) {
      if (amount <= 0) throw new Error('Số tiền rút phải lớn hơn 0');
      if (amount > balance) throw new Error('Số dư không đủ');
      balance -= amount;
      addHistory('withdraw', amount);
      return balance;
    },

    /**
     * Lấy số dư hiện tại.
     * @returns {number} Số dư.
     */
    getBalance() {
      return balance;
    },

    /**
     * Lấy lịch sử giao dịch (bản sao để bảo mật array gốc).
     * @returns {Array} Mảng lịch sử.
     */
    getTransactionHistory() {
      return [...history];
    }
  };
}

module.exports = { createBankAccount };