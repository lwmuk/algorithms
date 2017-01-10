const assert = require('assert');

/**
 * 第3章 蛮力法
 * 蛮力法是一种简单直接地解决问题的方法，常常直接基于问题的描述和所涉及的概念定义。
 */

/**
 * 交换数组中两个位置的值
 *
 * @param {Array} array 数组
 * @param {Number} i 第一个位置
 * @param {Number} j 第二个位置
 *
 * @returns {Array} 交换后的数组
 * @private
 */
function swap(array, i, j) {
  assert(Array.isArray(array));
  assert(i < array.length && j < array.length);

  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  return array;
}

module.exports = {
  /**
   * 选择排序
   * 顺序扫描整个列表，找到最小元素交换到第一个位置，找到次小元素交换到第二个位置，以此类推，
   * 直到排序完成。
   *
   * @param {Array} array 待排序数组
   *
   * @returns {Array} 排序好的数组
   */
  selectionSort(array) {
    assert(Array.isArray(array));

    // 拷贝副本，不修改输入数组
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
        swap(sortedArray, i, min);
      }
    }

    return sortedArray;
  },

  /**
   * 冒泡排序
   * 比较列表中相邻元素，如果它们是逆序就交换位置，重复多次，直至列表排好序
   *
   * @param {Array} array 待排序数组
   *
   * @returns {Array} 排序好的数组
   */
  bubbleSort(array) {
    assert(Array.isArray(array));

    // 拷贝副本，不修改输入数组
    const sortedArray = [...array];
    // 超过1个以上元素的数组才需要排序
    if (sortedArray.length > 1) {
      for (let i = 0, n = sortedArray.length; i < n - 1; i += 1) {
        // 依次将数组前部的最大元素冒泡到尾部
        for (let j = 0; j < n - i - 1; j += 1) {
          if (sortedArray[j + 1] < sortedArray[j]) {
            swap(sortedArray, j, j + 1);
          }
        }
      }
    }

    return sortedArray;
  },

  /**
   * 顺序查找
   *
   * @param {Array} array 数组
   * @param {*} key 查找键
   *
   * @returns {Number} 元素存在返回下标，否则返回-1
   */
  sequentialSearch(array, key) {
    assert(Array.isArray(array));

    for (let i = 0, len = array.length; i < len; i += 1) {
      if (array[i] === key) {
        return i;
      }
    }

    return -1;
  },
};
