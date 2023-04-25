# Simple Quran API

This Quran API is sourced from the Ministry of Religious Affairs (Kemenag) and AlQuranCloud, collected in JSON format.

### Penggunaan Endpoint

- `/api/surahs` memberikan response berupa seluruh data surat dalam Al-Quran.
- `/api/surahs/{surahId}` menghasilkan response berupa data surah dan ayat-ayat di dalam surah tersebut. Sebagai contoh [/api/surahs/1](https://quran-api.vercel.app/api/surahs/1) akan menghasilkan sebuah object berisi data surah dan ayat-ayat Al-Fatihah.
- `/api/surahs/{surahId}?ayah={number}` untuk menghasilkan response berupa data ayat pada surat tertentu. Sebagai contoh [/api/surahs/1?ayah=1](https://quran-api.vercel.app/api/surahs/1?ayah=1) akan menghasilkan sebuah object berisi data Al-Fatihah:1.

### Sumber Data

- [quran.kemenag.go.id](https://quran.kemenag.go.id) : ayat-ayat Al-Quran dan tafsir tahlili ayat Al-Quran.
- [api.alquran.cloud](https://api.alquran.cloud) : surah, ayat, dan terjemahannya dalam bahasa Inggris.
- [quranicaudio.com](https://quranicaudio.com) : muratal Dr. Shawqy Hamed, Syekh Mishari Rashid al-`Afasy, Syekh Abdurrahman As-Sudais, dan Syekh Yasser ad-Dussary.
- [mp3quran.net](https://mp3quran.net) muratal Syekh Salah Albudair dan Syekh Ibrahim Kashidan/
