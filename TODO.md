# TODO - Perbaikan Barcode Scan

## Steps:
- [x] 1. Analisis masalah: Barcode gambar statis (PNG) tidak bisa di-scan
- [x] 2. Rencana: Ganti dengan QR Code dinamis
- [x] 3. Edit `room.html` - tambah CDN QRCode.js, ganti `<img>` dengan `<div>` untuk QR code
- [x] 4. Edit `app.js` - ganti logic barcode statis menjadi generate QR code dinamis
- [x] 5. Test: Jalankan server dan verifikasi ✅
