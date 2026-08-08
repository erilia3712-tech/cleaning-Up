// ===================== DATA RUANGAN =====================
// type: 'room'  => ruangan biasa (7 item pembersihan)
// type: 'toilet'=> toilet (5 item khusus toilet)
const ROOMS = [
  // ----- Lantai Bawah (11) -----
  {id:'lb-klinik', floor:'Lantai Bawah', name:'Ruang Klinik', type:'room', rooms:'ruang'},
  {id:'lb-perpus', floor:'Lantai Bawah', name:'Ruang Perpus', type:'room', rooms:'ruang'},
  {id:'lb-tu', floor:'Lantai Bawah', name:'Ruang TU', type:'room', rooms:'ruang'},
  {id:'lb-keuangan', floor:'Lantai Bawah', name:'Ruang Keuangan', type:'room', rooms:'ruang'},
  {id:'lb-perkap', floor:'Lantai Bawah', name:'Ruang Perkap', type:'room', rooms:'ruang'},
  {id:'lb-toilet-klinik-cewe', floor:'Lantai Bawah', name:'Toilet Perempuan (Dekat Klinik)', type:'toilet', gender:'cewe'},
  {id:'lb-toilet-klinik-cowo', floor:'Lantai Bawah', name:'Toilet Laki-Laki (Dekat Klinik)', type:'toilet', gender:'cowo'},
  {id:'lb-toilet-dapur-cewe', floor:'Lantai Bawah', name:'Toilet Perempuan (Dekat Dapur)', type:'toilet', gender:'cewe'},
  {id:'lb-toilet-dapur-cowo', floor:'Lantai Bawah', name:'Toilet Laki-Laki (Dekat Dapur)', type:'toilet', gender:'cowo'},
  {id:'lb-gudang-perkap', floor:'Lantai Bawah', name:'Gudang Perkap', type:'room', rooms:'ruang'},
  {id:'lb-gudang-laundry', floor:'Lantai Bawah', name:'Gudang Laundry', type:'room', rooms:'ruang'},
  {id:'lb-gudang-chemicals', floor:'Lantai Bawah', name:'Gudang Chemicals', type:'room', rooms:'ruang'},
  {id:'lb-lobby', floor:'Lantai Bawah', name:'Lobby', type:'room', rooms:'ruang'},

  // ----- Lantai Atas (12) -----
  {id:'la-pak-kapus', floor:'Lantai Atas', name:'Ruang Pak Kapus', type:'room', rooms:'ruang'},
  {id:'la-Aspri', floor:'Lantai Atas', name:'Ruang Aspri', type:'room', rooms:'ruang'},
  {id:'la-podcast', floor:'Lantai Atas', name:'Ruang Podcast', type:'room', rooms:'ruang'},
  {id:'la-ppe', floor:'Lantai Atas', name:'Ruang PP&E', type:'room', rooms:'ruang'},
  {id:'la-sertifikasi', floor:'Lantai Atas', name:'Ruang Sertifikasi', type:'room', rooms:'ruang'},
  {id:'la-rapat', floor:'Lantai Atas', name:'Ruang Rapat', type:'room', rooms:'ruang'},
  {id:'la-kabid', floor:'Lantai Atas', name:'Ruang Kabid', type:'room', rooms:'ruang'},
  {id:'la-kerma', floor:'Lantai Atas', name:'Ruang Kerma', type:'room', rooms:'ruang'},
  {id:'la-wi', floor:'Lantai Atas', name:'Ruang WI', type:'room', rooms:'ruang'},
  {id:'la-mushola', floor:'Lantai Atas', name:'Mushola', type:'room', rooms:'ruang'},
  {id:'la-toilet-cewe', floor:'Lantai Atas', name:'Toilet Perempuan', type:'toilet', gender:'cewe'},
  {id:'la-toilet-cowo', floor:'Lantai Atas', name:'Toilet Laki-Laki', type:'toilet', gender:'cowo'}
];

// ===================== ITEM PEMBERSIHAN =====================
// Kondisi Kebersihan - Ruangan biasa (berbasis objek/elemen, bukan kata kerja)
const ROOM_CHECK_ITEMS = [
  'Meja',
  'Sofa',
  'Lantai',
  'Tempat Sampah',
  'List Kaca',
  'Kaca'
];

// Kondisi Kebersihan - Toilet Perempuan (cewe)
const TOILET_CEWE_CHECK_ITEMS = [
  'Closet Duduk',
  'Cermin',
  'Wastafel',
  'Lantai',
  'Tempat Sampah'
];

// Kondisi Kebersihan - Toilet Laki-Laki (cowo)
const TOILET_COWO_CHECK_ITEMS = [
  'Closet',
  'Urinoir',
  'Cermin',
  'Wastafel',
  'Lantai',
  'Tempat Sampah'
];

// ===================== PEKERJAAN YANG DILAKUKAN =====================
// Checklist pekerjaan cleaner - Ruangan biasa
const ROOM_WORK_ITEMS = [
  'Mengelap meja',
  'Membersihkan sofa',
  'Menyapu lantai',
  'Mengepel lantai',
  'Membuang sampah'
];

// Checklist pekerjaan cleaner - Toilet
const TOILET_WORK_ITEMS = [
  'Membersihkan closet',
  'Membersihkan wastafel',
  'Membersihkan cermin',
  'Menyapu lantai',
  'Mengepel lantai',
  'Membuang sampah',
  'Mengisi hand soap'
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
  if(room.type === 'toilet'){
    return room.gender === 'cewe' ? TOILET_CEWE_CHECK_ITEMS : TOILET_COWO_CHECK_ITEMS;
  }
  return ROOM_CHECK_ITEMS;
}

function getWorkItems(room){
  if(!room) return ROOM_WORK_ITEMS;
  return room.type === 'toilet' ? TOILET_WORK_ITEMS : ROOM_WORK_ITEMS;
}

// ===================== PENAMPIL DAFTAR RUANGAN (index) =====================
// ===================== BARCODE / QR PER RUANGAN =====================
// Kode unik per ruangan dibuat otomatis dari urutan ROOMS.
// Ruangan baru yang ditambahkan ke ROOMS otomatis mendapat kode sendiri (tidak tertukar).
function getRoomBarcode(room){
  const idx = ROOMS.findIndex(r => r.id === room.id);
  const prefix = room.floor.includes('Bawah') ? 'LB' : 'LA';
  return `${prefix}-${String(idx + 1).padStart(3, '0')}`;
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
    const typeBadge = document.createElement('span');
    typeBadge.className = r.type === 'toilet' ? 'type-badge type-toilet' : 'type-badge type-room';
    typeBadge.textContent = r.type === 'toilet' ? '🚻 Toilet' : '🪑 Ruangan';
    const title = document.createElement('h3'); title.textContent = r.name;
    const sub = document.createElement('div'); sub.className='room-meta'; sub.textContent = r.floor;
    const qrWrap = document.createElement('div'); qrWrap.className='qr';
    const link = getQrTargetUrl(r.id);
    try { new QRCode(qrWrap, {text:link,width:140,height:140}); } catch(e){}
    // Label barcode: nama ruangan + kode unik (agar tidak tertukar saat scan/input)
    const barcodeLabel = document.createElement('div');
    barcodeLabel.className = 'barcode-label';
    barcodeLabel.textContent = `${r.name}`;
    const barcodeCode = document.createElement('div');
    barcodeCode.className = 'barcode-code';
    barcodeCode.textContent = getRoomBarcode(r);
    const a = document.createElement('a'); a.href = link; a.className='room-link'; a.textContent = 'Buka halaman';
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
    const head = document.createElement('div'); head.className='room-card-head';
    head.appendChild(title); head.appendChild(typeBadge);
    card.appendChild(head); card.appendChild(sub); card.appendChild(qrWrap);
    card.appendChild(barcodeLabel); card.appendChild(barcodeCode);
    card.appendChild(a);
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

function setCurrentRecord(data, monthKey, dateKey, statuses, note, cleaner, works){
  if(!monthKey || !dateKey) return data;
  if(!data[monthKey]) data[monthKey] = {};
  data[monthKey][dateKey] = {statuses, note: note || '', cleaner: cleaner || '', works: works || [], savedAt:new Date().toISOString()};
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

  const room = getRoomById(roomId);
  const items = getCheckItems(room);
  const workItems = getWorkItems(room);
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
    const workArr = record.works || [];
    const doneWorks = workItems.filter((_, i) => workArr[i] === true);
    const workText = workItems.map((wk, i) => `${workArr[i] ? '☑' : '☐'} ${wk}`).join(' · ');
    const hasRusak = statuses.some(v => v === 4);
    const note = record.note ? `<div class="month-note">📝 ${record.note}</div>` : '';
    const cleaner = record.cleaner ? `<span>👤 ${record.cleaner}</span>` : '';
    return `<div class="month-summary-item ${hasRusak ? 'item-rusak' : ''}">
      <div class="month-summary-title">
        <span>${formatDateLabel(dateKey)} ${cleaner}</span>
        <span>${filled ? '✅ Lengkap' : '⚠️ Belum lengkap'} ${hasRusak ? '• 🔧 Rusak' : ''}</span>
      </div>
      <div class="month-summary-meta"><span>🧹 ${doneWorks.length}/${workItems.length} pekerjaan</span></div>
      <div class="month-summary-meta"><span>${statusText}</span></div>
      ${doneWorks.length ? `<div class="month-summary-meta"><span>✅ ${doneWorks.join(', ')}</span></div>` : ''}
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
  // Label barcode konsisten dengan nama ruangan (agar tidak tertukar)
  const roomBarcodeLabel = document.getElementById('barcode-label');
  if(roomBarcodeLabel){
    roomBarcodeLabel.textContent = `${room.name} — ${getRoomBarcode(room)}`;
    roomBarcodeLabel.style.display = 'block';
  }

  // Tampilkan tabel MCP jika toilet
  const mcpSection = document.getElementById('mcp-section');
  if(mcpSection && room.type === 'toilet'){
    mcpSection.style.display = 'block';
    renderMcpTable();
  }

  const items = getCheckItems(room);
  const workItems = getWorkItems(room);
  const form = document.getElementById('checklist-form');
  const dateInput = document.getElementById('record-date');
  const monthInput = document.getElementById('record-month');
  const cleanerInput = document.getElementById('record-cleaner');
  const noteInput = document.getElementById('record-note');
  const roomInstructions = document.getElementById('room-instructions');
  const saveBtn = document.getElementById('save-btn');
  const updateBtn = document.getElementById('update-btn');
  const deleteBtn = document.getElementById('delete-btn');
  const resetBtn = document.getElementById('reset-btn');

  if(roomInstructions){
    if(room.type === 'room'){
      roomInstructions.innerHTML = `
        <strong>Untuk ruangan biasa</strong>
        <p><strong>Kondisi Kebersihan</strong> dinilai per objek: Meja / Sofa / Lantai / Tempat Sampah / List Kaca / Kaca.</p>
        <p>Setiap objek pilih: 🟢 Bersih, 🟡 Kurang Bersih, 🔴 Kotor, atau ⚫ Rusak.</p>
        <p>“Pekerjaan yang dilakukan” dicatat terpisah dan bukan status objek.</p>
        <ul>
          <li>☑ Mengelap meja</li>
          <li>☑ Membersihkan sofa</li>
          <li>☑ Menyapu lantai</li>
          <li>☑ Mengepel lantai</li>
          <li>☑ Membuang sampah</li>
        </ul>
      `;
    } else {
      roomInstructions.innerHTML = `
        <strong>Untuk toilet</strong>
        <p><strong>Kondisi Kebersihan</strong> dinilai per item toilet: Closet / Cermin / Wastafel / Lantai / Tempat Sampah.</p>
        <p>Setiap item pilih: 🟢 Bersih, 🟡 Kurang Bersih, 🔴 Kotor, atau ⚫ Rusak.</p>
        <p>“Pekerjaan yang dilakukan” dicatat terpisah dan bukan status item.</p>
        <ul>
          <li>☑ Membersihkan closet</li>
          <li>☑ Membersihkan wastafel</li>
          <li>☑ Membersihkan cermin</li>
          <li>☑ Menyapu lantai</li>
          <li>☑ Mengepel lantai</li>
          <li>☑ Membuang sampah</li>
        </ul>
      `;
    }
  }

  let currentStatuses = Array(items.length).fill('');
  let currentWorks = Array(workItems.length).fill(false);
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
    currentWorks = Array(workItems.length).fill(false);
    if(record?.statuses){
      currentStatuses = items.map((_, i) => record.statuses[i] || '');
    }
    if(record?.works){
      currentWorks = workItems.map((_, i) => record.works[i] === true);
    }
    if(record?.cleaner && cleanerInput){ cleanerInput.value = record.cleaner || ''; }
    if(record?.note && noteInput){ noteInput.value = record.note || ''; }

    // ====== Bagian 1: Kondisi Kebersihan ======
    const secTitle1 = document.createElement('div');
    secTitle1.className = 'section-title';
    secTitle1.textContent = '🧽 Kondisi Kebersihan';
    form.appendChild(secTitle1);

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

    // ====== Bagian 2: Pekerjaan yang dilakukan ======
    const secTitle2 = document.createElement('div');
    secTitle2.className = 'section-title';
    secTitle2.textContent = '🧹 Pekerjaan yang dilakukan';
    form.appendChild(secTitle2);

    workItems.forEach((wk, idx) => {
      const wrow = document.createElement('div'); wrow.className='work-item';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'work-check';
      cb.checked = currentWorks[idx] === true;
      cb.addEventListener('change', () => { currentWorks[idx] = cb.checked; });
      const wlabel = document.createElement('label'); wlabel.className='work-label';
      wlabel.textContent = wk;
      wrow.appendChild(cb); wrow.appendChild(wlabel); form.appendChild(wrow);
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
    currentData = setCurrentRecord(currentData, monthKey, dateKey, currentStatuses, note, cleaner, currentWorks);
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
    currentWorks = Array(workItems.length).fill(false);
    if(noteInput) noteInput.value = '';
    if(cleanerInput) cleanerInput.value = '';
    renderChecklist();
    showStatusMessage('Data dihapus untuk tanggal ini.');
  });

  if(resetBtn){
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentStatuses = Array(items.length).fill('');
      currentWorks = Array(workItems.length).fill(false);
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

