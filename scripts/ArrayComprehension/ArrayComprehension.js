/**
 * @function
 * @name ArrayComprehension

 * @description
 *
 */
function ArrayComprehension(options) {
  var generator, start, startIndex, parts, output;

  // if generator is specified we expect the format to be correct
  if (options && options.generator && (generator = options.generator.trim())) {

    parts = generator.split(ArrayComprehension.rangeSymbol);

    if (parts.length > 1) {
      start = parts[0].split(ArrayComprehension.splitSymbol).map(Number);
      startIndex = start.length - 1;

      output = (startIndex ? [start[0]] : []).concat(ArrayComprehension.generateRangeItems(
          start[startIndex],
          Number(parts[1]),
          startIndex ? start[startIndex] - start[0] : null
      ));

    } else {
      output = generator.split(ArrayComprehension.splitSymbol).map(Number);
    }

  } else {
    output = [];
  }

  return output;
}

ArrayComprehension.rangeSymbol = '..';
ArrayComprehension.splitSymbol = ',';

/**
 * @function
 * @name ArrayComprehension.generateRangeItems
 *
 * @param {number} start value of the range
 * @param {number} end value of the range
 * @param {number} [step=1] step for generator
 *
 * @description
 * Generates numbers from start value to end value with specified step
 *
 * @returns {Array}
 */
ArrayComprehension.generateRangeItems = function(start, end, step) {
  step = step || 1;

  return (end < start && step > 0) || (end > start && step < 0) ?
         [] :
         Array.apply(null, new Array(Math.floor((end - start) / step) + 1)).map(function(value, index) {
           return start + step * index;
         });
}
