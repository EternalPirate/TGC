export function roundUpVal (val) {
  // round up maxVal
  val = Math.ceil(val)

  return (Number(val.toString().slice(0, 1)) + 1) * // get first num + 1 of max val
    Number(`1e${val.toString().length - 1}`) // 1e5 = 100000. get max val in tens/hundreds/thousands format
}

export function calcFrameArea (yData, from, to) {
  let maxValHeight = 0
  const visibleArr = []
  for (let yDataIndex = 0; yDataIndex < yData.length; yDataIndex++) {
    const curyData = yData[yDataIndex]
    if (curyData.isVisible) {
      const curVisibleData = curyData.data.slice(from, to)
      maxValHeight = maxValHeight < Math.max(...curVisibleData) ? Math.max(...curVisibleData) : maxValHeight
    }
    visibleArr.push(curyData)
  }
  // round up maxVal
  return {
    from,
    to,
    visibleArr,
    maxValHeight: roundUpVal(maxValHeight)
  }
}
