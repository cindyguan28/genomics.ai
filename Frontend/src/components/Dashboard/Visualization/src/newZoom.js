import * as d3 from "d3";

export let zoomM =
    d3.zoom()
        .scaleExtent([0.5, 16])
        .on('zoom', handleZoom);


export function handleZoom(e) {
    e = d3.select('svg g')
        .attr('transform', e.transform);
    return e;
}

export function resetZoom() {
    d3.select('svg g')
        .transition()
        .call(zoomM.scaleTo, 1);
}

export function zoomInN() {
    d3.select('svg g')
        .transition()
        .call(zoomM.scaleBy, 1.75);
}

export function zoomOutN() {
    d3.select('svg g')
        .transition()
        .call(zoomM.scaleBy, 0.5);
}