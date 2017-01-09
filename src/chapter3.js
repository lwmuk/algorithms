const assert = require('assert');

/**
 * 第3章 蛮力法
 * 蛮力法是一种简单直接地解决问题的方法，常常直接基于问题的描述和所涉及的概念定义。
 */

module.exports = {
  /**
   * 选择排序
   * 顺序扫描整个列表，找到最小元素交换到第一个位置，找到次小元素交换到第二个位置，以此类推，
   * 直到排序完成。
   *
   * @param {*[]} array 待排序数组
   *
   * @returns {*[]} 排序好的数组
   */
  selectionSort(array) {
    assert(Array.isArray(array));

    // 拷贝副本，不原地修改
    const sortedArray = [...array];
    // 超过1个以上元素的数组才需要排序
    if (sortedArray.length > 1) {
      for (let i = 0, n = sortedArray.length; i < n - 1; i += 1) {
        let min = i;
        // 依次寻找剩余最小元素
        for (let j = i + 1; j < n; j += 1) {
          min = sortedArray[j] < sortedArray[min] ? j : min;
        }

        // 交换最小元素到前面位置
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[min];
        sortedArray[min] = temp;
      }
    }

    return sortedArray;
  },
};
