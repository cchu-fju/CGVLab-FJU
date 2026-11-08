<template>
  <div v-if="course" class="container course-page" :style="{'--course-accent':course.color}">
    <a class="back-link" href="#teaching">← 返回 Teaching 課程列表</a>
    <div class="course-hero glass-card"><span class="eyebrow">CGV LAB · TEACHING SHOWCASE</span><h1>{{ course.title }}</h1><p class="course-subtitle">{{ course.subtitle }}</p><p>{{ course.intro }}</p><span class="pending-note">展示欄位已建立 · 影片與圖片將於取得授權後逐步更新</span></div>
    <template v-if="course.assignments">
      <section v-for="(a,ai) in course.assignments" :key="ai" class="course-section" :id="'assignment-'+(ai+1)">
        <div class="course-section-title"><span class="color-marker">{{ String(ai+1).padStart(2,'0') }}</span><div><span class="eyebrow">ASSIGNMENT</span><h2>{{a.title}}</h2><p v-if="a.description">{{a.description}}</p></div></div>
        <div class="media-grid"><article v-for="(video,i) in a.videos" :key="i" class="media-card glass-card"><h3>影片 {{i+1}} / YouTube Video {{i+1}}</h3><div class="video-frame"><iframe v-if="youtubeId(video)" :src="'https://www.youtube-nocookie.com/embed/'+youtubeId(video)" :title="`${a.title} 影片 ${i+1}`" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div v-else class="media-placeholder"><span class="placeholder-icon">▶</span><strong>影片預留位置</strong><small>尚未設定 YouTube 影片</small></div></div></article></div>
      </section>
      <section class="course-section" id="final-projects"><div class="course-section-title"><span class="color-marker">★</span><div><span class="eyebrow">FINAL PROJECT</span><h2>期末專案 · 10 組影片展示</h2></div></div>
        <div class="media-grid"><article v-for="item in course.finalProjects" :key="item.group" class="media-card glass-card"><h3>第 {{item.group}} 組 <span v-if="item.title">· {{item.title}}</span></h3><div class="video-frame"><iframe v-if="youtubeId(item.youtube)" :src="'https://www.youtube-nocookie.com/embed/'+youtubeId(item.youtube)" :title="`第 ${item.group} 組期末專案`" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div v-else class="media-placeholder"><span class="placeholder-icon">▶</span><strong>YouTube 作品影片</strong><small>Group {{String(item.group).padStart(2,'0')}} · 待更新</small></div></div></article></div>
      </section>
    </template>
    <template v-if="course.galleries"><section v-for="gallery in course.galleries" :key="gallery.id" class="course-section" :id="gallery.id"><div class="course-section-title"><span class="color-marker">✦</span><div><span class="eyebrow">STUDENT PROTOTYPES</span><h2>{{gallery.title}}</h2></div></div><div class="media-grid"><article v-for="item in gallery.items" :key="item.group" class="media-card glass-card"><h3>第 {{item.group}} 組 <span v-if="item.title">· {{item.title}}</span></h3><div class="image-frame"><img v-if="item.image" :src="assetPath(item.image)" :alt="item.title||`第 ${item.group} 組作品`" loading="lazy"/><div v-else class="media-placeholder"><span class="placeholder-icon">▧</span><strong>Prototype 作品圖片</strong><small>Group {{String(item.group).padStart(2,'0')}} · 待更新</small></div></div><p v-if="item.description">{{item.description}}</p></article></div></section></template>
    <div class="course-end"><a class="btn primary" href="#teaching">← 返回所有課程</a></div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { courseContent } from '../courseContent'
const props=defineProps({slug:{type:String,required:true}})
const course=computed(()=>courseContent[props.slug])
function youtubeId(value){if(!value)return '';const s=String(value).trim();if(/^[A-Za-z0-9_-]{11}$/.test(s))return s;try{const u=new URL(s);if(!['youtube.com','www.youtube.com','m.youtube.com','www.youtube-nocookie.com','youtube-nocookie.com','youtu.be','www.youtu.be'].includes(u.hostname))return '';const id=u.hostname.includes('youtu.be')?u.pathname.slice(1).split('/')[0]:u.pathname.startsWith('/shorts/')||u.pathname.startsWith('/embed/')?u.pathname.split('/')[2]:u.searchParams.get('v');return /^[A-Za-z0-9_-]{11}$/.test(id||'')?id:''}catch{return ''}}
function assetPath(path){if(/^(https?:)?\/\//.test(path))return path;return import.meta.env.BASE_URL+path.replace(/^\//,'')}
</script>
