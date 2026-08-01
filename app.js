const ROOMS = [
  {id:'lb-perlengkapan', floor:'Lantai Bawah', name:'Perlengkapan'},
  {id:'lb-gudang', floor:'Lantai Bawah', name:'Gudang'},
  {id:'lb-keuangan', floor:'Lantai Bawah', name:'Keuangan'},
  {id:'lb-tu', floor:'Lantai Bawah', name:'TU'},
  {id:'lb-perpustakaan', floor:'Lantai Bawah', name:'Perpustakaan'},
  {id:'lb-kamar-mandi-2-cewe', floor:'Lantai Bawah', name:'Kamar Mandi Bawah 2 Cewe'},
  {id:'lb-kamar-mandi-2-cowok', floor:'Lantai Bawah', name:'Kamar Mandi Bawah 2 Cowok'},
  {id:'lb-klinik', floor:'Lantai Bawah', name:'Klinik'},
  {id:'lb-wc-cewe', floor:'Lantai Bawah', name:'WC Cewe'},
  {id:'lb-wc-cowok', floor:'Lantai Bawah', name:'WC Cowok'},
  {id:'la-ppe', floor:'Lantai Atas', name:'Ruang PP&E'},
  {id:'la-aspri', floor:'Lantai Atas', name:'Ruang Aspri'},
  {id:'la-rapat', floor:'Lantai Atas', name:'Ruang Rapat'},
  {id:'la-mushola', floor:'Lantai Atas', name:'Mushola'},
  {id:'la-kerma', floor:'Lantai Atas', name:'Ruang Kerma'},
  {id:'la-divisi', floor:'Lantai Atas', name:'Ruang Divisi'},
  {id:'la-kaka-fajri', floor:'Lantai Atas', name:'Ruang Kaka Fajri'},
  {id:'la-wc-cewe', floor:'Lantai Atas', name:'WC Cewe'},
  {id:'la-wc-cowok', floor:'Lantai Atas', name:'WC Cowok'}
];

const BARCODE_IMAGES = {
  'lb-perlengkapan': 'pk.png',
  'lb-gudang': 'gd.png',
  'lb-keuangan': 'keuangan.png',
  'lb-tu': 'tu.png',
  'lb-perpustakaan': 'perpus.png',
  'lb-kamar-mandi-2-cewe': 'kamar-mandi-2-cewe.png',
  'lb-kamar-mandi-2-cowok': 'kamar-mandi-2-cowok.png',
  'lb-klinik': 'klinik.png',
  'lb-wc-cewe': 'wc-cewe.png',
  'lb-wc-cowok': 'wc-cowok.png',
  'la-ppe': 'ppe.png',
  'la-aspri': 'aspri.png',
  'la-rapat': 'rapat.png',
  'la-mushola': 'mushola.png',
  'la-kerma': 'kerma.png',
  'la-divisi': 'divisi.png',
  'la-kaka-fajri': 'kaka-fajri.png',
  'la-wc-cewe': 'wc-cewe-atas.png',
  'la-wc-cowok': 'wc-cowok-atas.png'
};

const CHECK_ITEMS = ['Kamar mandi', 'Kaca', 'Lantai', 'Toilet', 'Wastafel'];
const STATUS_OPTIONS = ['Bersih', 'Kurang Bersih', 'Kotor'];
const STATUS_TONES = ['bersih', 'kurang', 'kotor'];

function getBaseUrl() {
  return "https://erilia3712-tech.github.io/cleaning-Up";
}

function buildAppUrl(path, params = {}) {
  let baseUrl;

  if (window.location.hostname === "erilia3712-tech.github.io") {
    baseUrl = "https://erilia3712-tech.github.io/cleaning-Up";
  } else {
    baseUrl = window.location.origin;
  }

  const url = new URL(path, baseUrl + "/");

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

function getQrTargetUrl(roomId){
  const room = getRoomById(roomId);
  if(!room) return '';
  return buildAppUrl('room.html', {id: room.id});
}

function createIndex(){
  const down = document.getElementById('floor-down');
  const up = document.getElementById('floor-up');
  const heroStats = document.querySelectorAll('.hero-stat');
  const serverAddress = document.getElementById('server-address');
  if(serverAddress){
    serverAddress.textContent = `Alamat server: ${getBaseUrl()}`;
  }
  if(heroStats[0]) heroStats[0].textContent = `${ROOMS.length} Ruangan`;
  if(heroStats[1]) heroStats[1].textContent = `${STATUS_OPTIONS.length} Status`;

  ROOMS.forEach(r=>{
    const card = document.createElement('div'); card.className='room-card';
    const title = document.createElement('h3'); title.textContent = r.name;
    const sub = document.createElement('div'); sub.className='room-meta'; sub.textContent = r.floor;
    const qrWrap = document.createElement('div'); qrWrap.className='qr';
    const link = getQrTargetUrl(r.id);
    new QRCode(qrWrap, {text:link,width:140,height:140});
    const a = document.createElement('a'); a.href = link; a.className='room-link'; a.textContent = 'Buka halaman';
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
    card.appendChild(title); card.appendChild(sub); card.appendChild(qrWrap); card.appendChild(a);
    if(r.floor.includes('Bawah')) down.appendChild(card); else up.appendChild(card);
  });
}

function getRoomById(id){return ROOMS.find(r=>r.id===id)}
function getRoomStorageKey(roomId){ return `checklist_${roomId}`; }

function readRoomData(roomId){
  try {
    const parsed = JSON.parse(localStorage.getItem(getRoomStorageKey(roomId)) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveRoomData(roomId, data){
  localStorage.setItem(getRoomStorageKey(roomId), JSON.stringify(data));
}

function getMonthKey(dateValue){ return dateValue ? dateValue.slice(0, 7) : ''; }
function getDateKey(dateValue){ return dateValue || ''; }

function getCurrentRecord(data, monthKey, dateKey){
  if(!monthKey || !dateKey) return null;
  return data?.[monthKey]?.[dateKey] || null;
}

function setCurrentRecord(data, monthKey, dateKey, statuses){
  if(!monthKey || !dateKey) return data;
  if(!data[monthKey]) data[monthKey] = {};
  data[monthKey][dateKey] = {statuses, savedAt:new Date().toISOString()};
  return data;
}

function removeCurrentRecord(data, monthKey, dateKey){
  if(!monthKey || !dateKey) return data;
  if(data[monthKey]?.[dateKey]) delete data[monthKey][dateKey];
  if(data[monthKey] && Object.keys(data[monthKey]).length === 0) delete data[monthKey];
  return data;
}

function formatMonthLabel(monthKey){
  if(!monthKey) return 'Belum dipilih';
  const [year, month] = monthKey.split('-');
  const label = new Date(Number(year), Number(month) - 1);
  return label.toLocaleDateString('id-ID', {month:'long', year:'numeric'});
}

function formatDateLabel(dateKey){
  if(!dateKey) return 'Tanggal belum dipilih';
  const d = new Date(`${dateKey}T00:00:00`);
  return d.toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'});
}

function getStatusLabel(value){
  if(value === 1) return 'Bersih';
  if(value === 2) return 'Kurang Bersih';
  if(value === 3) return 'Kotor';
  return 'Belum diisi';
}

function renderHistorySummary(data){
  const el = document.getElementById('history-summary');
  if(!el) return;
  const months = Object.entries(data || {})
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 4)
    .map(([monthKey, dates]) => {
      const entries = Object.entries(dates || {});
      const latest = entries.sort(([a], [b]) => b.localeCompare(a))[0];
      const latestDate = latest?.[1]?.savedAt;
      return `<div class="history-pill"><strong>${formatMonthLabel(monthKey)}</strong><span>${entries.length} hari • ${latestDate ? new Date(latestDate).toLocaleDateString('id-ID') : 'Belum ada'}</span></div>`;
    });
  el.innerHTML = months.length
    ? months.join('')
    : '<div class="history-pill"><strong>Belum ada riwayat</strong><span>Data akan muncul setelah disimpan.</span></div>';
}

function loadSummaryPage(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const monthKey = params.get('month') || `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const room = getRoomById(id);
  const title = document.getElementById('room-title');
  const summary = document.getElementById('room-info');
  const monthInput = document.getElementById('summary-month');
  const backLink = document.getElementById('back-to-room');

  if(!room){ title.textContent='Ruangan tidak ditemukan'; summary.innerHTML=''; return; }
  title.textContent = `${room.floor} — ${room.name}`;
  summary.innerHTML = `<span class="info-pill">📍 ${room.floor}</span><span class="info-pill">🧼 ${room.name}</span>`;
  monthInput.value = monthKey;
  backLink.href = buildAppUrl('room.html', {id: room.id});

  const data = readRoomData(room.id);
  renderMonthReport(room.id, data, monthKey);

  monthInput.addEventListener('change', () => {
    const nextMonth = monthInput.value;
    if(!nextMonth) return;
    history.replaceState({}, '', buildAppUrl('summary.html', {id: room.id, month: nextMonth}));
    renderMonthReport(room.id, data, nextMonth);
  });
}

function renderMonthReport(roomId, data, monthKey){
  const statsEl = document.getElementById('month-report-stats');
  const listEl = document.getElementById('month-report-list');
  if(!statsEl || !listEl) return;

  const monthData = data?.[monthKey] || {};
  const entries = Object.entries(monthData).sort(([a], [b]) => b.localeCompare(a));
  const totalDays = entries.length;
  const completedDays = entries.filter(([, record]) => Array.isArray(record?.statuses) && record.statuses.every(v => v !== '')).length;
  const statusCounts = {bersih:0, kurang:0, kotor:0};
  entries.forEach(([, record]) => {
    (record?.statuses || []).forEach(value => {
      if(value === 1) statusCounts.bersih += 1;
      if(value === 2) statusCounts.kurang += 1;
      if(value === 3) statusCounts.kotor += 1;
    });
  });

  statsEl.innerHTML = totalDays
    ? `
      <span class="summary-chip">${formatMonthLabel(monthKey)}</span>
      <span class="summary-chip">${totalDays} hari tercatat</span>
      <span class="summary-chip">${completedDays} hari lengkap</span>
      <span class="summary-chip">${Math.round((completedDays / totalDays) * 100)}% selesai</span>
    `
    : '<span class="summary-chip">Belum ada data</span>';

  if(!totalDays){
    listEl.innerHTML = '<div class="month-summary-item"><div class="month-summary-title">Data kosong</div><div class="month-summary-meta"><span>Belum ada catatan untuk bulan ini.</span></div></div>';
    return;
  }

  listEl.innerHTML = entries.map(([dateKey, record]) => {
    const filled = Array.isArray(record.statuses) && record.statuses.every(v => v !== '');
    const statusText = record.statuses
      .map(getStatusLabel)
      .map(val => val === 'Belum diisi' ? '–' : val)
      .join(' · ');
    return `<div class="month-summary-item">
      <div class="month-summary-title">
        <span>${formatDateLabel(dateKey)}</span>
        <span>${filled ? '✅ Lengkap' : '⚠️ Belum lengkap'}</span>
      </div>
      <div class="month-summary-meta"><span>${statusText}</span></div>
    </div>`;
  }).join('');
}

function updateReportLink(roomId, monthKey){
  const link = document.getElementById('open-report');
  if(!link) return;
  link.href = buildAppUrl('summary.html', {id: roomId, month: monthKey});
}

function showStatusMessage(message){
  const el = document.getElementById('saved-at');
  if(!el) return;
  el.textContent = message;
}

function loadRoomPage(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const room = getRoomById(id);
  const title = document.getElementById('room-title');
  const summary = document.getElementById('room-info');
  if(!room){ title.textContent='Ruangan tidak ditemukan'; summary.innerHTML=''; return }
  title.textContent = `${room.floor} — ${room.name}`;
  summary.innerHTML = `<span class="info-pill">📍 ${room.floor}</span><span class="info-pill">🧼 ${room.name}</span>`;

  const barcodeQr = document.getElementById('barcode-qr');
  if(barcodeQr){
    const qrLink = getQrTargetUrl(room.id);
    barcodeQr.innerHTML = '';
    new QRCode(barcodeQr, {text: qrLink, width: 140, height: 140});
    barcodeQr.style.display = 'block';
  }

  const form = document.getElementById('checklist-form');
  const dateInput = document.getElementById('record-date');
  const monthInput = document.getElementById('record-month');
  const saveBtn = document.getElementById('save-btn');
  const updateBtn = document.getElementById('update-btn');
  const deleteBtn = document.getElementById('delete-btn');

  let currentStatuses = Array(CHECK_ITEMS.length).fill('');
  let currentData = readRoomData(room.id);

  const today = new Date();
  const defaultDate = today.toISOString().split('T')[0];
  const defaultMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  dateInput.value = defaultDate;
  monthInput.value = defaultMonth;

  function renderChecklist(){
    form.innerHTML = '';
    const monthKey = monthInput.value;
    const dateKey = dateInput.value;
    const record = getCurrentRecord(currentData, monthKey, dateKey);
    currentStatuses = Array(CHECK_ITEMS.length).fill('');
    if(record?.statuses) currentStatuses = record.statuses.map(v => v ?? '');

    CHECK_ITEMS.forEach((it, idx) => {
      const row = document.createElement('div'); row.className='check-item';
      const label = document.createElement('div'); label.className='item-label'; label.textContent = it;
      const opts = document.createElement('div'); opts.className='status-options';

      STATUS_OPTIONS.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'status-btn';
        btn.textContent = `${i + 1}. ${opt}`;
        btn.dataset.tone = STATUS_TONES[i];
        if(currentStatuses[idx] && currentStatuses[idx] === i + 1) btn.classList.add('active');
        btn.addEventListener('click', () => {
          Array.from(opts.children).forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          currentStatuses[idx] = i + 1;
        });
        opts.appendChild(btn);
      });

      row.appendChild(label); row.appendChild(opts); form.appendChild(row);
    });

    renderHistorySummary(currentData);
    updateReportLink(room.id, monthKey);
    const latestRecord = getCurrentRecord(currentData, monthKey, dateKey);
    if(latestRecord?.savedAt){
      showStatusMessage(`Tersimpan: ${new Date(latestRecord.savedAt).toLocaleString('id-ID')}`);
    } else {
      showStatusMessage('');
    }
  }

  function saveCurrentRecord(mode){
    const monthKey = monthInput.value;
    const dateKey = dateInput.value;
    if(!monthKey || !dateKey) return;
    currentData = setCurrentRecord(currentData, monthKey, dateKey, currentStatuses);
    saveRoomData(room.id, currentData);
    renderHistorySummary(currentData);
    updateReportLink(room.id, monthKey);
    const record = getCurrentRecord(currentData, monthKey, dateKey);
    if(record?.savedAt){
      showStatusMessage(`${mode === 'update' ? 'Data diperbarui' : 'Data disimpan'} untuk ${formatDateLabel(dateKey)} • ${formatMonthLabel(monthKey)}`);
    }
  }

  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveCurrentRecord('save');
  });

  updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveCurrentRecord('update');
  });

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const monthKey = monthInput.value;
    const dateKey = dateInput.value;
    if(!monthKey || !dateKey) return;
    currentData = removeCurrentRecord(currentData, monthKey, dateKey);
    saveRoomData(room.id, currentData);
    currentStatuses = Array(CHECK_ITEMS.length).fill('');
    renderChecklist();
    showStatusMessage('Data dihapus untuk tanggal ini.');
  });

  dateInput.addEventListener('change', renderChecklist);
  monthInput.addEventListener('change', renderChecklist);
  renderChecklist();
}

function showSavedAt(iso){
  const el = document.getElementById('saved-at');
  if(!el) return;
  if(!iso){ el.textContent = ''; return }
  const d = new Date(iso); el.textContent = `Tersimpan: ${d.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.dataset.page;
  if(page==='index') createIndex();
  if(page==='room') loadRoomPage();
  if(page==='summary') loadSummaryPage();
});
