export function prepareData(data) {
  // modifying server data
  // to protect data from further API changes
  // here you can simply adapt new API structure if needed
  const sortedData = []
  const dataLen = data.length
  for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
    const curChartObj = data[dataIdx]
    const sortedX = {}
    const sortedY = []
    // sort object keys
    for (const key in curChartObj.types) {
      if (curChartObj.types[key] === 'x') {
        sortedX.columnKey = curChartObj.types[key]
        sortedX.type = curChartObj.types[key]
      } else {
        sortedY.push({
          columnKey: key,
          type: curChartObj.types[key],
          color: curChartObj.colors[key],
          name: curChartObj.names[key],
          isVisible: true
        })
      }
    }
    // sort array data
    const columnsLen = curChartObj.columns.length
    for (let columnsIdx = 0; columnsIdx < columnsLen; columnsIdx++) {
      const curColumn = curChartObj.columns[columnsIdx]
      // save x data
      if (curColumn[0] === sortedX.columnKey) {
        curColumn.shift() // remove first string element
        sortedX.data = curColumn
        sortedX.maxValLength = Math.max(...(curColumn.map(num => num.toString().length))) - 1
      }
      // save y data
      const sortedYLen = sortedY.length
      for (let sortedYIdx = 0; sortedYIdx < sortedYLen; sortedYIdx++) {
        const curSortedY = sortedY[sortedYIdx]
        if (curColumn[0] === curSortedY.columnKey) {
          curColumn.shift() // remove first string element
          curSortedY.data = curColumn
        }
      }
    }
    sortedData.push({
      x: sortedX,
      y: sortedY
    })
  }
  return sortedData
}
