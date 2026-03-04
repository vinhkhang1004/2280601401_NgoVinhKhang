/**
 * Bài 1.1: Counter với Closure
 * Tạo counter với private state sử dụng closure
 */

/**
 * Tạo một counter object với các methods để thao tác giá trị đếm.
 * Giá trị được bảo vệ bởi closure, không thể truy cập trực tiếp từ bên ngoài.
 * @returns {{ increment: Function, decrement: Function, getValue: Function, reset: Function }}
 */
function createCounter() {
  let count = 0;

  return {
    /** Tăng giá trị counter lên 1 */
    increment() {
      count += 1;
    },

    /** Giảm giá trị counter xuống 1 */
    decrement() {
      count -= 1;
    },

    /**
     * Lấy giá trị hiện tại của counter
     * @returns {number}
     */
    getValue() {
      return count;
    },

    /** Đặt lại counter về 0 */
    reset() {
      count = 0;
    },
  };
}

module.exports = { createCounter };