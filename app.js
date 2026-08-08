// ===================== DATA RUANGAN =====================
// type: 'room'  => ruangan biasa (7 item pembersihan)
// type: 'toilet'=> toilet (5 item khusus toilet)
const ROOMS = [
  // ----- Lantai Bawah (11) -----
  {id:'lb-klinik', floor:'Lantai Bawah', name:'Ruang Klinik', type:'room'},
  {id:'lb-perpus', floor:'Lantai Bawah', name:'Ruang Perpus', type:'room'},
  {id:'lb-tu', floor:'Lantai Bawah', name:'Ruang TU', type:'room'},
  {id:'lb-keuangan', floor:'Lantai Bawah', name:'Ruang Keuangan', type:'room'},
  {id:'lb-perkap', floor:'Lantai Bawah', name:'Ruang Perkap', type:'room'},
  {id:'lb-toilet-klinik-cewe', floor:'Lantai Bawah', name:'Toilet Perempuan (Dekat Klinik)', type:'toilet'},
  {id:'lb-toilet-klinik-cowo', floor:'Lantai Bawah', name:'Toilet Laki-Laki (Dekat Klinik)', type:'toilet'},
  {id:'lb-toilet-dapur-cewe', floor:'Lantai Bawah', name:'Toilet Perempuan (Dekat Dapur)', type:'toilet'},
  {id:'lb-toilet-dapur-cowo', floor:'Lantai Bawah', name:'Toilet Laki-Laki (Dekat Dapur)', type:'toilet'},
  {id:'lb-gudang-perkap', floor:'Lantai Bawah', name:'Gudang Perkap', type:'room'},
  {id:'lb-gudang-laundry', floor:'Lantai Bawah', name:'Gudang Laundry', type:'room'},
  {id:'lb-gudang-chemicals', floor:'Lantai Bawah', name:'Gudang Chemicals', type:'room'},
  {id:'lb-lobby', floor:'Lantai Bawah', name:'Lobby', type:'room'},

  // ----- Lantai Atas (12) -----
  {id:'la-pak-kapus', floor:'Lantai Atas', name:'Ruang Pak Kapus', type:'room'},
  {id:'la-spri', floor:'Lantai Atas', name:'Ruang Spri', type:'room'},
  {id:'la-podcast', floor:'Lantai Atas', name:'Ruang Podcast', type:'room'},
  {id:'la-ppe', floor:'Lantai Atas', name:'Ruang PP&E', type:'room'},
  {id:'la-sertifikasi', floor:'Lantai Atas', name:'Ruang Sertifikasi', type:'room'},
  {id:'la-rapat', floor:'Lantai Atas', name:'Ruang Rapat', type:'room'},
  {id:'la-kabid', floor:'Lantai Atas', name:'Ruang Kabid', type:'room'},
  {id:'la-kerma', floor:'Lantai Atas', name:'Ruang Kerma', type:'room'},
  {id:'la-wi', floor:'Lantai Atas', name:'Ruang WI', type:'room'},
  {id:'la-mushola', floor:'Lantai Atas', name:'Mushola', type:'room'},
  {id:'la-toilet-cewe', floor:'Lantai Atas', name:'Toilet Perempuan', type:'toilet'},
  {id:'la-toilet-cowo', floor:'Lantai Atas', name:'Toilet Laki-Laki', type:'toilet'}
];

// ===================== ITEM PEMBERSIHAN =====================
// Ruangan biasa
const ROOM_CHECK_ITEMS = [
  'Ngelap meja',
  'Sofa',
  'Menyapu',
  'Mengepel',
  'Buang sampah',
  'List kaca',
  'Kaca'
];

// Toilet (sesuai data MCP & pengecekan toilet)
const TOILET_CHECK_ITEMS = [
  'Closet',
  'Urinoir',
  'Westafel',
  'Lantai',
  'Kaca'
];

// ===================== STATUS =====================
// 1 = Bersih (B), 2 = Kurang Bersih (X), 3 = Kotor, 4 = Rusak
const STATUS_OPTIONS = ['Bersih', 'Kurang Bersih', 'Kotor', 'Rusak'];
const STATUS_TONES = ['bersih', 'kurang', 'kotor', 'rusak'];

// Standar MCP - Master Cleaning Program (Toilet)
const MCP_STANDARDS = [
  {no:1, area:'Pintu masuk', standar:'Bersih, kering, tak ada noda'},
  {no:2, area:'Dinding sekat', standar:'Bersih, kering, tak ada sawang-sawang'},
  {no:3, area:'Washtafel', standar:'Bersih, kering, tak ada noda/plak'},
  {no:4, area:'Cermin besar', standar:'Bersih, licin, tak kusam, tak ada noda'},
  {no:5, area:'Kloset duduk', standar:'Bersih, tak ada noda, kering'},
  {no:6, area:'Dinding kloset', standar:'Bersih, tak ada noda/plak'},
  {no:7, area:'Lantai toilet', standar:'Bersih, kering, tak berlumut'},
  {no:8, area:'Tempat sampah', standar:'Bersih, kering, tak berbau'},
  {no:9, area:'Jet shower', standar:'Bersih, tak karat, tak bocor'},
  {no:10, area:'Selang + kran air', standar:'Bersih, tak karat, tak bocor'},
  {no:11, area:'Urinoir', standar:'Bersih, kering, tak bernoda/plak'},
  {no:12, area:'Tabung hand soap', standar:'Kuat, tak bocor, tak tersumbat'},
  {no:13, area:'Exhaust fan', standar:'Bersih, tak rusak, kokoh'},
  {no:14, area:'Kaca dinding', standar:'Bersih, tak rusak, kokoh'},
  {no:15, area:'Handuk', standar:'Bersih, kering, tak bernoda'}
];

// Status pengecekan toilet: B (Bersih) / X (Kurang Bersih)
const CEK_STATUS = ['B', 'X'];

// Daftar kolom pengecekan toilet (form user)
const CEK_COLUMNS = ['Wastafel','Closet','Urinoir','Cermin','Shower','Lantai','Pewangi','Handsoap'];

// ===================== HUB/PEMBANTU LINK =====================
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

function getCheckItems(room){
  if(!room) return ROOM_CHECK_ITEMS;
  return room.type === 'toilet' ? TOILET_CHECK_ITEMS : ROOM_CHECK_ITEMS;
}

// ===================== PENAMPIL DAFTAR RUANGAN (index) =====================
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
    const typeBadge = document.createElement('span');
    typeBadge.className = r.type === 'toilet' ? 'type-badge type-toilet' : 'type-badge type-room';
    typeBadge.textContent = r.type === 'toilet' ? '🚻 Toilet' : '🪑 Ruangan';
    const title = document.createElement('h3'); title.textContent = r.name;
    const sub = document.createElement('div'); sub.className='room-meta'; sub.textContent = r.floor;
    const qrWrap = document.createElement('div'); qrWrap.className='qr';
    const link = getQrTargetUrl(r.id);
    try { new QRCode(qrWrap, {text:link,width:140,height:140}); } catch(e){}
    const a = document.createElement('a'); a.href = link; a.className='room-link'; a.textContent = 'Buka halaman';
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
    const head = document.createElement('div'); head.className='room-card-head';
    head.appendChild(title); head.appendChild(typeBadge);
    card.appendChild(head); card.appendChild(sub); card.appendChild(qrWrap); card.appendChild(a);
    if(r.floor.includes('Bawah')) down.appendChild(card); else up.appendChild(card);
  });
}

// ===================== PENGELOLAAN DATA (localStorage CRUD) =====================
function getRoomById(id){return ROOMS.find(r=>r.id===id)}

function getRoomStorageKey(roomId){ return `checklist_${roomId}`; }

// Struktur data per record: {statuses:[...], note:'...', cleaner:'...', savedAt:'ISO'}
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

function setCurrentRecord(data, monthKey, dateKey, statuses, note, cleaner){
  if(!monthKey || !dateKey) return data;
  if(!data[monthKey]) data[monthKey] = {};
  data[monthKey][dateKey] = {statuses, note: note || '', cleaner: cleaner || '', savedAt:new Date().toISOString()};
  return data;
}

function removeCurrentRecord(data, monthKey, dateKey){
  if(!monthKey || !dateKey) return data;
  if(data[monthKey]?.[dateKey]) delete data[monthKey][dateKey];
  if(data[monthKey] && Object.keys(data[monthKey]).length === 0) delete data[monthKey];
  return data;
}

// ===================== FORMAT TAMBAHAN =====================
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
  if(value === 4) return 'Rusak';
  return 'Belum diisi';
}

// ===================== REKAP SINGKAT (history-summary) =====================
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

// ===================== REKAP BULANAN (summary page) =====================
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

  const items = getCheckItems(getRoomById(roomId));
  const monthData = data?.[monthKey] || {};
  const entries = Object.entries(monthData).sort(([a], [b]) => b.localeCompare(a));
  const totalDays = entries.length;
  const completedDays = entries.filter(([, record]) => Array.isArray(record?.statuses) && record.statuses.length === items.length).length;
  const statusCounts = {bersih:0, kurang:0, kotor:0, rusak:0};
  entries.forEach(([, record]) => {
    (record?.statuses || []).forEach(value => {
      if(value === 1) statusCounts.bersih += 1;
      if(value === 2) statusCounts.kurang += 1;
      if(value === 3) statusCounts.kotor += 1;
      if(value === 4) statusCounts.rusak += 1;
    });
  });

  statsEl.innerHTML = totalDays
    ? `
      <span class="summary-chip">${formatMonthLabel(monthKey)}</span>
      <span class="summary-chip">${totalDays} hari tercatat</span>
      <span class="summary-chip">${completedDays} hari lengkap</span>
      <span class="summary-chip">${Math.round((completedDays / totalDays) * 100)}% selesai</span>
      ${statusCounts.rusak > 0 ? `<span class="summary-chip chip-rusak">⚠️ ${statusCounts.rusak} item rusak</span>` : ''}
    `
    : '<span class="summary-chip">Belum ada data</span>';

  if(!totalDays){
    listEl.innerHTML = '<div class="month-summary-item"><div class="month-summary-title">Data kosong</div><div class="month-summary-meta"><span>Belum ada catatan untuk bulan ini.</span></div></div>';
    return;
  }

  listEl.innerHTML = entries.map(([dateKey, record]) => {
    const filled = Array.isArray(record.statuses) && record.statuses.length === items.length;
    const statuses = record.statuses || [];
    const statusText = items.map((it, i) => `${it}: ${getStatusLabel(statuses[i])}`).join(' · ');
    const hasRusak = statuses.some(v => v === 4);
    const note = record.note ? `<div class="month-note">📝 ${record.note}</div>` : '';
    const cleaner = record.cleaner ? `<span>👤 ${record.cleaner}</span>` : '';
    return `<div class="month-summary-item ${hasRusak ? 'item-rusak' : ''}">
      <div class="month-summary-title">
        <span>${formatDateLabel(dateKey)} ${cleaner}</span>
        <span>${filled ? '✅ Lengkap' : '⚠️ Belum lengkap'} ${hasRusak ? '• 🔧 Rusak' : ''}</span>
      </div>
      <div class="month-summary-meta"><span>${statusText}</span></div>
      ${note}
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

// ===================== HALAMAN DETAIL RUANGAN (room page) =====================
function loadRoomPage(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const room = getRoomById(id);
  const title = document.getElementById('room-title');
  const summary = document.getElementById('room-info');
  if(!room){ title.textContent='Ruangan tidak ditemukan'; summary.innerHTML=''; return }
  title.textContent = `${room.floor} — ${room.name}`;
  summary.innerHTML = `<span class="info-pill">📍 ${room.floor}</span><span class="info-pill">🧼 ${room.name}</span>${room.type === 'toilet' ? '<span class="info-pill">🚻 Toilet</span>' : ''}`;

  const barcodeQr = document.getElementById('barcode-qr');
  if(barcodeQr){
    const qrLink = getQrTargetUrl(room.id);
    barcodeQr.innerHTML = '';
    try { new QRCode(barcodeQr, {text: qrLink, width: 140, height: 140}); } catch(e){}
    barcodeQr.style.display = 'block';
  }

  // Tampilkan tabel MCP jika toilet
  const mcpSection = document.getElementById('mcp-section');
  if(mcpSection && room.type === 'toilet'){
    mcpSection.style.display = 'block';
    renderMcpTable();
  }

  const items = getCheckItems(room);
  const form = document.getElementById('checklist-form');
  const dateInput = document.getElementById('record-date');
  const monthInput = document.getElementById('record-month');
  const cleanerInput = document.getElementById('record-cleaner');
  const noteInput = document.getElementById('record-note');
  const saveBtn = document.getElementById('save-btn');
  const updateBtn = document.getElementById('update-btn');
  const deleteBtn = document.getElementById('delete-btn');
  const resetBtn = document.getElementById('reset-btn');

  let currentStatuses = Array(items.length).fill('');
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
    currentStatuses = Array(items.length).fill('');
    if(record?.statuses){
      currentStatuses = items.map((_, i) => record.statuses[i] || '');
    }
    if(record?.cleaner && cleanerInput){ cleanerInput.value = record.cleaner || ''; }
    if(record?.note && noteInput){ noteInput.value = record.note || ''; }

    items.forEach((it, idx) => {
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
    const note = noteInput ? noteInput.value.trim() : '';
    const cleaner = cleanerInput ? cleanerInput.value.trim() : '';
    currentData = setCurrentRecord(currentData, monthKey, dateKey, currentStatuses, note, cleaner);
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
    if(!confirm('Hapus data pengecekan untuk tanggal ini?')) return;
    currentData = removeCurrentRecord(currentData, monthKey, dateKey);
    saveRoomData(room.id, currentData);
    currentStatuses = Array(items.length).fill('');
    if(noteInput) noteInput.value = '';
    if(cleanerInput) cleanerInput.value = '';
    renderChecklist();
    showStatusMessage('Data dihapus untuk tanggal ini.');
  });

  if(resetBtn){
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentStatuses = Array(items.length).fill('');
      if(noteInput) noteInput.value = '';
      if(cleanerInput) cleanerInput.value = '';
      renderChecklist();
      showStatusMessage('Form dikosongkan. Klik Simpan untuk menyimpan.');
    });
  }

  dateInput.addEventListener('change', renderChecklist);
  monthInput.addEventListener('change', renderChecklist);
  renderChecklist();
}

// ===================== TABEL MCP TOILET =====================
function renderMcpTable(){
  const container = document.getElementById('mcp-standards');
  if(!container) return;
  let rows = '';
  MCP_STANDARDS.forEach(s => {
    rows += `<tr>
      <td>${s.no}</td>
      <td>${s.area}</td>
      <td>${s.standar}</td>
      <td class="cek-col"><button type="button" class="cek-btn" data-mcp="${s.no}">B</button>
      <button type="button" class="cek-btn" data-mcp="${s.no}" style="margin-left:4px">X</button></td>
    </tr>`;
  });
  container.innerHTML = rows;

  // Interaksi tombol B/X pada tabel MCP
  container.querySelectorAll('.cek-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const siblings = container.querySelectorAll(`.cek-btn[data-mcp="${btn.dataset.mcp}"]`);
      siblings.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.dataset.page;
  if(page==='index') createIndex();
  if(page==='room') loadRoomPage();
  if(page==='summary') loadSummaryPage();
});

