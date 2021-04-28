# Chartbulek.js
Make chart circle using javascript and it's super easy peasy.

## Chartbulek.js
```javascript
ChartBulek.init(selector);
```
### Example Chartbulek.js
You need to use attribute to config the chart. using data-chart, data-color-bg, data-color-chart, data-width-chart.

```html
<div  id="chart-circle" 
      class="chart-circle" 
      data-chart="40" 
      data-color-bg="#fff" 
      data-color-chart="#0e0e28" 
      data-width-chart="10"></div>
```
```javascript
ChartBulek.init("#chart-circle");
```
