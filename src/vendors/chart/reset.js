export default (Chart) => {
  const gridLines = Chart.defaults.scale.gridLines
  const ticks = Chart.defaults.scale.ticks
  const g = Chart.defaults.global

  // global.defaultColor = '#ddd'
  // global.elements.arc.backgroundColor = '#ddd'
  // global.elements.line.backgroundColor = '#ddd'
  // global.elements.line.borderColor = '#ddd'
  // global.elements.point.backgroundColor = '#ddd'
  // global.elements.point.borderColor = '#ddd'
  // global.elements.rectangle.backgroundColor = '#ddd'
  // global.elements.rectangle.borderColor = '#ddd'
  g.tooltips.cornerRadius = 2
  g.tooltips.yPadding = 8
  g.tooltips.displayColors = false

  gridLines.color = '#e1e1e1'
  gridLines.zeroLineColor = '#e1e1e1'
  gridLines.drawBorder = false
  ticks.padding = 8
}
