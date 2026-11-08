<template><div class="chart-wrap"><svg ref="svg" role="img" aria-label="Publications by year"></svg></div></template>
<script setup>
import { ref,onMounted,onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import { papers } from '../data'
const svg=ref(null);let observer
function draw(){const el=svg.value,w=el.clientWidth||600,h=250,m={top:15,right:20,bottom:38,left:35};const data=d3.rollups(papers,v=>v.length,d=>d.year).map(([year,count])=>({year:String(year),count})).sort((a,b)=>+a.year-+b.year);const s=d3.select(el).attr('viewBox',`0 0 ${w} ${h}`);s.selectAll('*').remove();const x=d3.scaleBand().domain(data.map(d=>d.year)).range([m.left,w-m.right]).padding(.28),y=d3.scaleLinear().domain([0,d3.max(data,d=>d.count)+1]).range([h-m.bottom,m.top]);s.append('g').attr('transform',`translate(0,${h-m.bottom})`).call(d3.axisBottom(x)).selectAll('text').attr('fill','#50758e');s.append('g').attr('transform',`translate(${m.left},0)`).call(d3.axisLeft(y).ticks(3).tickFormat(d3.format('d'))).selectAll('text').attr('fill','#50758e');s.selectAll('.domain,.tick line').attr('stroke','#9cbcd0');s.selectAll('rect.bar').data(data).join('rect').attr('class','bar').attr('x',d=>x(d.year)).attr('y',d=>y(d.count)).attr('width',x.bandwidth()).attr('height',d=>y(0)-y(d.count)).attr('rx',5).attr('fill','#4f9fbe').append('title').text(d=>`${d.year}: ${d.count} publications`)}
onMounted(()=>{observer=new ResizeObserver(draw);observer.observe(svg.value)});onBeforeUnmount(()=>observer?.disconnect())
</script>
