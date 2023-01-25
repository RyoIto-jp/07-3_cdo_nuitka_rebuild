// import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const LineChartImpl = require('recharts/es6/chart/LineChart').LineChart
const ResponsiveContainerImpl = require('recharts/es6/component/ResponsiveContainer').ResponsiveContainer
const XAxisImpl = require('recharts/es6/cartesian/XAxis').XAxis
const YAxisImpl = require('recharts/es6/cartesian/YAxis').YAxis
const TooltipImpl = require('recharts/es6/component/Tooltip').Tooltip
const CartesianGridImpl = require('recharts/es6/cartesian/CartesianGrid').CartesianGrid
const LineImpl = require('recharts/es6/cartesian/Line').Line
const PieChartImpl = require('recharts/es6/chart/PieChart').PieChart
const PieImpl = require('recharts/es6/polar/Pie').Pie
// const Tooltip = require('recharts/es6/')
const BarChartImpl = require('recharts/es6/chart/BarChart').BarChart
const LegendImpl = require('recharts/es6/component/Legend').Legend
const BarImpl = require('recharts/es6/cartesian/Bar').Bar



export {
	ResponsiveContainerImpl as ResponsiveContainer,
	LineChartImpl as LineChart,
	LineImpl as Line,
	XAxisImpl as XAxis,
	YAxisImpl as YAxis,
	TooltipImpl as Tooltip,
	CartesianGridImpl as CartesianGrid,
  PieChartImpl as PieChart,
  PieImpl as Pie,
	BarChartImpl as BarChart,
	LegendImpl as Legend,
	BarImpl as Bar,
}