// 編輯此檔即可更新 YouTube 連結與學生作品，不需要修改 Vue 元件。
// YouTube 接受完整 watch / youtu.be / shorts / embed 網址，或 11 碼影片 ID。
// 未填寫時顯示預留位置，不會載入第三方 iframe。
const threeVideos = () => Array.from({ length: 3 }, () => '')
const tenProjects = () => Array.from({ length: 10 }, (_, i) => ({ group: i + 1, title: '', youtube: '' }))
const tenImages = () => Array.from({ length: 10 }, (_, i) => ({ group: i + 1, title: '', image: '', description: '' }))

export const courseContent = {
  unity: {
    title: 'Unity 3D 虛擬實境應用', subtitle: 'Unity 3D Virtual Reality Applications', color: '#3279c4',
    intro: '作業二至作業八，每份作業保留 3 個 YouTube 影片欄位；期末專案另設 10 組影片展示區。',
    assignments: Array.from({ length: 7 }, (_, i) => ({ title: `作業 ${i + 2} · HW${i + 2}`, description: '', videos: threeVideos() })),
    finalProjects: tenProjects()
  },
  visualization: {
    title: '資料分析與視覺化', subtitle: 'Data Analysis and Visualization', color: '#159b79',
    intro: '作業一至作業三，每份作業保留 3 個 YouTube 影片欄位；期末專案另設 10 組影片展示區。',
    assignments: Array.from({ length: 3 }, (_, i) => ({ title: `作業 ${i + 1} · HW${i + 1}`, description: '', videos: threeVideos() })),
    finalProjects: tenProjects()
  },
  hci: {
    title: '人機介面與互動設計', subtitle: 'Human–Computer Interaction', color: '#8858c7',
    intro: '期中 Low-fi Prototype 與期末 Hi-fi Prototype，各保留 10 組圖片及說明欄位。',
    galleries: [
      { id: 'lowfi', title: '期中 · Low-fi Prototype', items: tenImages() },
      { id: 'hifi', title: '期末 · Hi-fi Prototype', items: tenImages() }
    ]
  }
}
