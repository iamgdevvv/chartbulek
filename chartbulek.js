var ChartBulek = {
    createEl: function(data) {
        var width   = 100;
        var radius  = 50;
    
        var size_chart  = width + data.data_widthchart;
        var size_circle = size_chart / 2;
    
        var stroke_dashoffset   = radius * 2 * Math.PI;
        var current_offset      = stroke_dashoffset * data.data_chart / 100;

        var el_chart = "<svg class='icon-chart-circle' xmlns='http://www.w3.org/2000/svg' width='" + size_chart + "' height='" + size_chart + "' viewBox='0 0 " + size_chart + " " + size_chart + "' style='transform: rotate(-90deg)'><circle class='circle-path-bg' cx='" + size_circle + "' cy='" + size_circle + "' r='" + radius + "' fill='none' stroke='" + data.data_colorbg + "' stroke-width='" + data.data_widthchart + "' stroke-dasharray='" + stroke_dashoffset + " " + stroke_dashoffset + "'/><circle class='circle-path-chart' cx='" + size_circle + "' cy='" + size_circle + "' r='" + radius + "' fill='none' stroke='" + data.data_colorchart + "' stroke-width='" + data.data_widthchart + "' stroke-dasharray='" + current_offset + " " + stroke_dashoffset + "'/></svg>"

        return el_chart;
    },
    init: function(element) {
        var el = document.querySelectorAll(element);

        if(!el) {
            console.log("Element " + el + " not found");
            return false;
        }
        
        var i = 0;

        for(i = 0; i < el.length; i++) {
            var data_chart      = parseFloat(el[i].getAttribute("data-chart"));
            var data_colorbg    = el[i].getAttribute("data-color-bg") || "#eee";
            var data_colorchart = el[i].getAttribute("data-color-chart") || "#ccc";
            var data_widthchart = parseFloat(el[i].getAttribute("data-width-chart"));

            if(!data_chart || !data_widthchart) {
                console.log("data-chart or data-width-chart of " + el[i] + " wrong");
                return false;
            }

            var data_el = {
                data_chart: data_chart,
                data_colorbg: data_colorbg,
                data_colorchart: data_colorchart,
                data_widthchart: data_widthchart
            }

            el[i].insertAdjacentHTML("beforeend", this.createEl(data_el));
        }
    }
}