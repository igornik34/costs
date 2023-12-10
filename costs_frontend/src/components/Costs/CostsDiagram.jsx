import React from 'react'
import Diagram from '../Diagram/Diagram'

function CostsDiagram({costs}) {
    const diagramDatasets = [
        {label: 'Янв', value: 0},
        {label: 'Фев', value: 0},
        {label: 'Мар', value: 0},
        {label: 'Апр', value: 0},
        {label: 'Май', value: 0},
        {label: 'Июн', value: 0},
        {label: 'Июл', value: 0},
        {label: 'Авг', value: 0},
        {label: 'Сен', value: 0},
        {label: 'Окт', value: 0},
        {label: 'Ноя', value: 0},
        {label: 'Дек', value: 0},
    ]

    for(const cost of costs) {
        const costMonth = new Date(cost.date).getMonth()
        diagramDatasets[costMonth].value += cost.amount
    }
  return (
    <Diagram dataSets={diagramDatasets} />
  )
}

export default CostsDiagram