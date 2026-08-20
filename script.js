const lessons={
office:[
["Dasar Komunikasi Kantor","办公室沟通","Kosakata dan kalimat yang sering digunakan saat bekerja di kantor."],
["Meeting & Rapat","会议","Cara menyampaikan pendapat, meminta penjelasan, dan mengambil keputusan."],
["Email & Dokumen","邮件与文件","Bahasa Mandarin untuk email, laporan, dokumen, dan administrasi."]
],
manufacturing:[
["Produksi","生产","Kosakata proses produksi, mesin, target, dan hasil produksi."],
["Quality Control","质量控制","Bahasa Mandarin untuk pemeriksaan kualitas dan masalah produk."],
["Safety","安全生产","Istilah keselamatan kerja dan instruksi di area pabrik."]
],
mining:[
["Operasional Tambang","矿山作业","Kosakata dasar aktivitas dan operasional pertambangan."],
["Safety Tambang","矿山安全","Instruksi keselamatan dan komunikasi di area tambang."],
["Equipment","设备","Istilah alat berat, mesin, maintenance, dan operasional."]
],
logistics:[
["Warehouse","仓库","Kosakata gudang, stok, barang masuk dan barang keluar."],
["Shipping","运输","Bahasa Mandarin untuk pengiriman dan transportasi."],
["Supply Chain","供应链","Istilah supply chain, purchasing, inventory, dan distribusi."]
]
};

const icons={office:"fa-building",manufacturing:"fa-industry",mining:"fa-mountain",logistics:"fa-truck"};

function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page)?.classList.add("active");
document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
const nav=[...document.querySelectorAll(".nav-item")].find(n=>n.getAttribute("onclick")===`showPage('${page}')`);
if(nav)nav.classList.add("active");
window.scrollTo({top:0,behavior:"smooth"});
}

function renderLessons(){
Object.entries(lessons).forEach(([type,data])=>{
const box=document.getElementById(type+"Lessons");
if(!box)return;
box.innerHTML=data.map((l,i)=>`
<div class="lesson-card">
<i class="fa-solid ${icons[type]}"></i>
<h3>${l[0]}</h3>
<p class="chinese">${l[1]}</p>
<p>${l[2]}</p>
<button class="primary-btn" onclick="startLesson('${type}',${i})">Mulai Pelajaran</button>
</div>`).join("");
});
}

const vocabulary=[
["会议","huìyì","Rapat / meeting"],
["报告","bàogào","Laporan"],
["生产","shēngchǎn","Produksi"],
["质量","zhìliàng","Kualitas"],
["安全","ānquán","Keselamatan"],
["设备","shèbèi","Peralatan / equipment"],
["仓库","cāngkù","Gudang"],
["库存","kùcún","Persediaan / stok"],
["供应商","gōngyìngshāng","Supplier"],
["订单","dìngdān","Pesanan / order"]
];

function renderVocabulary(){
const box=document.getElementById("vocabularyList");
box.innerHTML=vocabulary.map(v=>`
<div class="vocab-item">
<strong>${v[0]}</strong>
<span>${v[1]}</span>
<p>${v[2]}</p>
</div>`).join("");
}

const conversations=[
["Atasan memberikan tugas","这个任务今天可以完成吗？","Zhège rènwu jīntiān kěyǐ wánchéng ma?","Apakah tugas ini bisa diselesaikan hari ini?"],
["Meminta penjelasan","可以再解释一下吗？","Kěyǐ zài jiěshì yíxià ma?","Bisa dijelaskan sekali lagi?"],
["Melaporkan masalah","我们发现了一个问题。","Wǒmen fāxiàn le yí ge wèntí.","Kami menemukan sebuah masalah."],
["Memberikan update","目前进度正常。","Mùqián jìndù zhèngcháng.","Saat ini progress berjalan normal."]
];

function renderConversations(){
const box=document.getElementById("conversationList");
box.innerHTML=conversations.map(c=>`
<div class="conversation-item">
<h3>${c[0]}</h3>
<strong>${c[1]}</strong>
<span>${c[2]}</span>
<p>${c[3]}</p>
</div>`).join("");
}

function renderQuiz(){
document.getElementById("quizContent").innerHTML=`
<div class="quiz-question">
<h3>1. Apa arti dari “仓库”?</h3>
<button onclick="checkAnswer(this,true)">Gudang</button>
<button onclick="checkAnswer(this,false)">Supplier</button>
<button onclick="checkAnswer(this,false)">Produksi</button>
<button onclick="checkAnswer(this,false)">Laporan</button>
<p id="quizResult"></p>
</div>`;
}

function checkAnswer(btn,correct){
const result=document.getElementById("quizResult");
if(correct){
result.innerText="✓ Benar! 仓库 (cāngkù) = Gudang";
result.style.color="#16a34a";
}else{
result.innerText="✕ Belum benar. Coba lagi.";
result.style.color="#dc2626";
}
}

function startLesson(type,index){
const lesson=lessons[type][index];
alert(`${lesson[0]}\n${lesson[1]}\n\nPelajaran ini akan kita bangun lebih lengkap pada tahap berikutnya.`);
}

renderLessons();
renderVocabulary();
renderConversations();
renderQuiz();
