*{margin:0;padding:0;box-sizing:border-box;font-family:'Inter','Noto Sans SC',sans-serif}
body{background:#f5f7fb;color:#172033}
button{font-family:inherit}
.app{display:flex;min-height:100vh}
.sidebar{width:250px;background:#101827;color:#fff;position:fixed;left:0;top:0;height:100vh;padding:22px 14px;z-index:10}
.logo{height:65px;display:flex;align-items:center;gap:12px;padding:0 14px;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:20px}
.logo i{font-size:30px;color:#38bdf8}.logo span{font-size:21px;font-weight:800}
.sidebar nav{display:flex;flex-direction:column;gap:5px}
.nav-item{border:0;background:transparent;color:#cbd5e1;text-align:left;padding:13px 15px;border-radius:10px;display:flex;align-items:center;gap:13px;font-size:14px;cursor:pointer;transition:.2s}
.nav-item i{width:20px;text-align:center}.nav-item:hover{background:#1e293b;color:#fff}.nav-item.active{background:#2563eb;color:#fff}
.main{margin-left:250px;width:calc(100% - 250px);padding:32px 40px}
.header{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px}
.header h1{font-size:30px;font-weight:800}.header p{color:#64748b;margin-top:5px}
.profile{display:flex;align-items:center;gap:12px}.level{background:#e0edff;color:#2563eb;padding:9px 14px;border-radius:20px;font-size:13px;font-weight:700}.avatar{width:45px;height:45px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
.page{display:none}.page.active{display:block}
.welcome{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border-radius:22px;padding:38px 42px;display:flex;justify-content:space-between;align-items:center;min-height:250px;overflow:hidden}
.welcome>div:first-child{max-width:680px}.badge{display:inline-block;background:rgba(255,255,255,.15);padding:7px 12px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:.5px;margin-bottom:15px}.welcome h2{font-size:34px;margin-bottom:12px}.welcome p{color:#dbeafe;line-height:1.7;max-width:650px}
.primary-btn{margin-top:22px;border:0;background:#fff;color:#2563eb;padding:12px 20px;border-radius:10px;font-weight:700;cursor:pointer}.primary-btn i{margin-right:6px}.welcome-icon{font-size:150px;color:rgba(255,255,255,.1);margin-right:30px}
.section-title{display:flex;align-items:end;gap:12px;margin:32px 0 18px}.section-title h2{font-size:21px}.section-title span{font-size:13px;color:#94a3b8}
.category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.category-card{background:#fff;border-radius:16px;padding:25px;box-shadow:0 5px 18px rgba(15,23,42,.05);cursor:pointer;transition:.2s;border:1px solid #eef2f7}.category-card:hover{transform:translateY(-4px);box-shadow:0 10px 25px rgba(15,23,42,.1)}.category-card i{font-size:27px;color:#2563eb;margin-bottom:18px}.category-card h3{font-size:17px;margin-bottom:6px}.category-card p{font-family:'Noto Sans SC',sans-serif;color:#94a3b8;font-size:13px}
.progress-card{background:#fff;border-radius:16px;padding:24px;box-shadow:0 5px 18px rgba(15,23,42,.05)}.progress-info{display:flex;justify-content:space-between;margin-bottom:12px}.progress-info strong{color:#2563eb}.progress-bar{height:10px;background:#e2e8f0;border-radius:20px;overflow:hidden}.progress-bar div{width:0;height:100%;background:#2563eb;border-radius:20px}.progress-card p{font-size:13px;color:#64748b;margin-top:12px}
.page-title{margin-bottom:25px}.page-title h2{font-size:27px}.page-title p{color:#64748b;margin-top:6px}
.lesson-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.lesson-card{background:#fff;padding:25px;border-radius:16px;border:1px solid #eef2f7;box-shadow:0 5px 18px rgba(15,23,42,.05)}.lesson-card i{font-size:25px;color:#2563eb;margin-bottom:15px}.lesson-card h3{margin-bottom:7px}.lesson-card p{font-size:13px;color:#64748b;line-height:1.6}
.vocabulary-box,.conversation-box,.quiz-box{background:#fff;border-radius:18px;padding:25px;min-height:250px;box-shadow:0 5px 18px rgba(15,23,42,.05)}
@media(max-width:1100px){.category-grid{grid-template-columns:repeat(2,1fr)}.lesson-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.sidebar{width:70px;padding:15px 8px}.logo{padding:0;justify-content:center}.logo span,.nav-item span{display:none}.nav-item{justify-content:center;padding:14px}.main{margin-left:70px;width:calc(100% - 70px);padding:22px}.welcome{padding:28px}.welcome h2{font-size:26px}.welcome-icon{display:none}.category-grid,.lesson-grid{grid-template-columns:1fr}.header h1{font-size:24px}.level{display:none}}
