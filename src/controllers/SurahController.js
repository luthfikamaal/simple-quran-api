const fs = require('fs');

const surahs = require('../../data/surahs.json');
const ayahs = require('../../data/ayahs.json');

class SurahController {
  static index(req, res) {
    return res.status(200).json({ surahs });
  }

  static show(req, res) {
    try {
      const surah = surahs.find((e) => e.number == req.params.number);
      const ayahOfSurah = ayahs.filter((e) => e.surahId == req.params.number);

      if (req.query.ayah) {
        const ayahSurah = ayahs.find((e) => e.number.inSurah == req.query.ayah && e.surahId == req.params.number);
        const surat = surahs.find((e) => e.number == ayahSurah.surahId);

        return res.status(200).json({
          ayah: {
            ...ayahSurah,
            surah: surat,
          },
        });
      }

      const detailSurah = {
        ...surah,
        ayahs: ayahOfSurah,
        murratals: [
          {
            name: 'Syekh Abdurrahman As-Sudais',
            audio: `https://download.quranicaudio.com/qdc/abdurrahmaan_as_sudais/murattal/${req.params.number}.mp3`,
          },
          {
            name: 'Syekh Mishari Rashid al-`Afasy',
            audio: `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${req.params.number.toString().padStart(3, '0')}.mp3`,
          },
          {
            name: 'Dr. Shawqy Hamed',
            audio: `https://download.quranicaudio.com/quran/dr.shawqy_7amed/murattal/${req.params.number.toString().padStart(3, '0')}.mp3`,
          },
          {
            name: 'Syekh Yasser ad-Dussary',
            audio: `https://download.quranicaudio.com/quran/yasser_ad-dussary/${req.params.number.toString().padStart(3, '0')}.mp3`,
          },
          {
            name: 'Syekh Salah Albudair',
            audio: `https://server6.mp3quran.net/s_bud/${req.params.number.toString().padStart(3, '0')}.mp3`,
          },
          {
            name: 'Syekh Ibrahim Kashidan',
            audio: `https://server16.mp3quran.net/download/i_kshidan/Rewayat-Qalon-A-n-Nafi/${req.params.number.toString().padStart(3, '0')}.mp3`,
          },
        ],
      };

      return res.status(200).json({ surah: detailSurah });
    } catch (error) {
      return res.status(404).json({ error: 'NOT FOUND' });
    }
  }
}

module.exports = SurahController;
