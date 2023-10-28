/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class AppChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Status dos serviços"
			},
			axisX: {
				title: "Status",
				reversed: true,
			},
			axisY: {
				title: "Quantidade de status",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  22, label: "Finalizado" },
					{ y:  30, label: "Em andamento" },
					{ y:  8, label: "Em atraso" },
					{ y:  3, label: "Cancelado" },
					
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		const suffixes = ["", "K", "M", "B"];
		let order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		const suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
export default AppChart