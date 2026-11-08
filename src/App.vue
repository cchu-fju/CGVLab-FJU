<template>
  <MistBackground />
  <header class="topbar">
    <a class="brand" href="#home" aria-label="CGV Lab Home"><span class="brand-mark">CGV<span> / </span></span><span class="brand-text"><strong>電腦圖學與視覺化實驗室</strong><small>Computer Graphics and Visualization Lab</small></span></a>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="site-nav" @click="menuOpen=!menuOpen">{{ menuOpen ? 'Close ✕' : 'Menu ☰' }}</button>
    <nav id="site-nav" :class="{open:menuOpen}" aria-label="Primary navigation"><a v-for="item in nav" :key="item.id" :href="'#'+item.id" @click="menuOpen=false">{{ item.name }}</a></nav>
  </header>
  <main>
    <section id="home" class="hero container">
      <div class="hero-copy">
        <div class="eyebrow">FU JEN CATHOLIC UNIVERSITY · 輔仁大學資訊工程學系</div>
        <div class="hero-sign">Research with clarity, imagination &amp; impact.</div>
        <h1>電腦圖學與<br/><em>視覺化實驗室</em></h1>
        <p class="lead">Computer Graphics and Visualization Lab <strong>(CGV)</strong></p>
        <p>We bring together computer graphics, information visualization, human–computer interaction, AI and digital twins to design interactive experiences that turn complex data into understanding.</p>
        <div class="tagline"><span>Computer Graphics</span><span>Visual Analytics</span><span>Human–AI Interaction</span></div>
        <div class="actions"><a class="btn primary" href="#research">Explore Research <span>↗</span></a><a class="btn outline" href="#teaching">Teaching &amp; Courses →</a></div>
      </div>
      <div class="hero-photo"><img :src="profileUrl" alt="Watercolor-style academic illustration of Prof. Chen-Chi Hu"/><div class="photo-caption"><strong>胡臻騏 · Chen-Chi Hu</strong><small>Principal Investigator · Assistant Professor</small></div></div>
      <a class="scroll-hint" href="#research">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
    <section id="research" class="section section-blue"><div class="container"><div class="section-head"><span class="eyebrow">01 / RESEARCH</span><h2>Research Areas <span>研究領域</span></h2><p>Where visual computing, human-centered design and intelligent systems meet.</p></div>
      <div class="research-grid"><article v-for="r in research" :key="r.id" class="glass-card research-card" :style="{'--accent':r.color}"><span class="research-code">{{r.id}}</span><h3>{{r.title}}</h3><p>{{r.desc}}</p></article></div>
      <div class="panel"><div class="panel-head"><div><span class="eyebrow">INTERACTIVE VISUAL ANALYTICS</span><h3>Research Connections · 研究關聯網絡</h3></div><span>D3.js force-directed network · drag the nodes</span></div><ResearchGraph/></div>
    </div></section>
    <section id="publications" class="section"><div class="container"><div class="section-head"><span class="eyebrow">02 / PUBLICATIONS</span><h2>Publications <span>學術著作</span></h2><p>Selected research works. Explore the publication years or filter the paper list.</p></div>
      <div class="panel"><div class="panel-head"><h3>Publication Timeline</h3><span>Selected records · D3.js</span></div><PublicationChart/></div>
      <div class="filters"><label>Research area <select v-model="filter"><option value="all">All topics</option><option v-for="r in research" :key="r.id" :value="r.id">{{r.title}}</option></select></label><label>Search <input v-model="query" placeholder="Search title or venue" /></label></div>
      <div class="paper-list"><a v-for="p in filtered" :key="p.title" class="paper" :href="p.url" target="_blank" rel="noopener noreferrer"><span class="paper-year">{{p.year}}</span><div><h3>{{p.title}}</h3><p>{{p.venue}} <span class="pill">{{p.type}}</span></p></div><span class="paper-arrow">↗</span></a><p v-if="!filtered.length">No matching publications.</p></div>
      <a class="external" href="https://dblp.org/pid/150/8066.html" target="_blank" rel="noopener noreferrer">Browse the complete DBLP profile ↗</a>
    </div></section>
    <section id="projects" class="section section-blue"><div class="container"><div class="section-head"><span class="eyebrow">03 / PROJECTS</span><h2>Research Initiatives <span>研究計畫與主題</span></h2><p>Research initiatives and exploratory topics. No funding or completion status is implied.</p></div><div class="project-grid"><article v-for="(p,i) in projects" :key="p.name" class="glass-card project-card"><span class="number">0{{i+1}}</span><span class="pill">{{p.status}}</span><h3>{{p.name}}</h3><p>{{p.description}}</p></article></div></div></section>
    <section id="teaching" class="section"><div class="container"><div class="section-head"><span class="eyebrow">04 / TEACHING</span><h2>Teaching <span>教學與課程</span></h2><p>Courses connecting theoretical foundations with hands-on projects, visualization design and interactive systems.</p></div>
      <div class="teaching-intro glass-card"><div><span class="eyebrow">TEACHING PHILOSOPHY</span><h3>Learn by building, exploring and explaining.</h3></div><p>Through project-based learning and iterative prototyping, students connect computing concepts to real applications. Courses are presented for reference; current offerings and syllabi follow the university's official announcements.</p></div>
      <div class="course-grid"><article class="glass-card course-card" v-for="course in courses" :key="course.code"><div class="course-top"><span>{{course.code}}</span><span class="course-icon">{{course.icon}}</span></div><h3>{{course.en}}</h3><h4>{{course.zh}}</h4><p>{{course.description}}</p><div class="course-tags"><span v-for="tag in course.tags" :key="tag">{{tag}}</span></div></article></div>
      <div class="teaching-footer"><span>Student projects may be featured here with student consent.</span><a href="https://csie2.fju.edu.tw/teacher/317" target="_blank" rel="noopener noreferrer">University faculty profile ↗</a></div>
    </div></section>
    <section id="members" class="section section-blue"><div class="container"><div class="section-head"><span class="eyebrow">05 / MEMBERS</span><h2>People <span>研究團隊</span></h2></div><div class="member glass-card"><img :src="profileUrl" alt="Illustration of Chen-Chi Hu"/><div><span class="eyebrow">PRINCIPAL INVESTIGATOR</span><h3>Chen-Chi Hu · 胡臻騏</h3><p>Assistant Professor · Department of Computer Science and Information Engineering, Fu Jen Catholic University</p><p>Ph.D., Computer Science · National Chengchi University</p><div class="member-links"><a href="https://csie2.fju.edu.tw/teacher/317" target="_blank" rel="noopener noreferrer">Faculty Profile ↗</a><a href="https://dblp.org/pid/150/8066.html" target="_blank" rel="noopener noreferrer">DBLP ↗</a></div></div></div><p class="members-note">Student members and alumni can be added as their information is confirmed.</p></div></section>
    <section id="contact" class="section contact-section"><div class="container"><span class="eyebrow">06 / CONTACT</span><h2>Let's Collaborate.</h2><p>Research collaboration, student projects and academic exchange are welcome.</p><div class="contact-grid"><div><strong>Lab</strong><p>Computer Graphics and Visualization Lab (CGV)<br/>電腦圖學與視覺化實驗室</p></div><div><strong>Institution</strong><p>Department of Computer Science and Information Engineering<br/>Fu Jen Catholic University · Taiwan</p></div><div><strong>Contact</strong><p><a href="mailto:cchu@csie.fju.edu.tw">cchu@csie.fju.edu.tw</a><br/>Office: SF627 · Ext. 3701</p></div></div></div></section>
  </main>
  <footer><div class="container footer-inner"><span>© {{new Date().getFullYear()}} CGV Lab · Fu Jen Catholic University</span><span>Vue 3 · D3.js · Animated Atmospheric UI</span></div></footer>
  <button type="button" class="motion-switch" :aria-pressed="!motionEnabled" @click="motionEnabled=!motionEnabled">{{motionEnabled?'Pause mist motion':'Resume mist motion'}}</button>
</template>
<script setup>
import {ref,computed,watch,onMounted} from 'vue'
import MistBackground from './components/MistBackground.vue'
import ResearchGraph from './components/ResearchGraph.vue'
import PublicationChart from './components/PublicationChart.vue'
import {research,papers,projects,courses} from './data'
const profileUrl=import.meta.env.BASE_URL+'profile.jpg'
const nav=[{id:'home',name:'Home'},{id:'research',name:'Research'},{id:'publications',name:'Publications'},{id:'projects',name:'Projects'},{id:'teaching',name:'Teaching'},{id:'members',name:'Members'},{id:'contact',name:'Contact'}]
const filter=ref('all'),query=ref(''),menuOpen=ref(false),motionEnabled=ref(true)
const filtered=computed(()=>papers.filter(p=>(filter.value==='all'||p.tags.includes(filter.value))&&`${p.title} ${p.venue}`.toLowerCase().includes(query.value.toLowerCase())))
onMounted(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)motionEnabled.value=false})
watch(motionEnabled,v=>document.documentElement.classList.toggle('motion-paused',!v),{immediate:true})
</script>
