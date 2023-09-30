import { useState } from "react";
import { InfoSurat } from "./Types";
import SurahCard from "./SurahCard";
import { AnimatePresence, motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";

function DaftarSurat(props: { bacaSuratCb: (infoSurat: InfoSurat) => void }) {
    const daftarSurat: InfoSurat[] = [
        {
            "nomor": 1,
            "nama": "الفاتحة",
            "namaLatin": "Al-Fatihah",
            "jumlahAyat": 7,
            "tempatTurun": 1,
            "arti": "Pembukaan"
        },
        {
            "nomor": 2,
            "nama": "البقرة",
            "namaLatin": "Al-Baqarah",
            "jumlahAyat": 286,
            "tempatTurun": 0,
            "arti": "Sapi"
        },
        {
            "nomor": 3,
            "nama": "اٰل عمران",
            "namaLatin": "Ali 'Imran",
            "jumlahAyat": 200,
            "tempatTurun": 0,
            "arti": "Keluarga Imran"
        },
        {
            "nomor": 4,
            "nama": "النساۤء",
            "namaLatin": "An-Nisa'",
            "jumlahAyat": 176,
            "tempatTurun": 0,
            "arti": "Wanita"
        },
        {
            "nomor": 5,
            "nama": "الماۤئدة",
            "namaLatin": "Al-Ma'idah",
            "jumlahAyat": 120,
            "tempatTurun": 0,
            "arti": "Hidangan"
        },
        {
            "nomor": 6,
            "nama": "الانعام",
            "namaLatin": "Al-An'am",
            "jumlahAyat": 165,
            "tempatTurun": 1,
            "arti": "Binatang Ternak"
        },
        {
            "nomor": 7,
            "nama": "الاعراف",
            "namaLatin": "Al-A'raf",
            "jumlahAyat": 206,
            "tempatTurun": 1,
            "arti": "Tempat Tertinggi"
        },
        {
            "nomor": 8,
            "nama": "الانفال",
            "namaLatin": "Al-Anfal",
            "jumlahAyat": 75,
            "tempatTurun": 0,
            "arti": "Rampasan Perang"
        },
        {
            "nomor": 9,
            "nama": "التوبة",
            "namaLatin": "At-Taubah",
            "jumlahAyat": 129,
            "tempatTurun": 0,
            "arti": "Pengampunan"
        },
        {
            "nomor": 10,
            "nama": "يونس",
            "namaLatin": "Yunus",
            "jumlahAyat": 109,
            "tempatTurun": 1,
            "arti": "Yunus"
        },
        {
            "nomor": 11,
            "nama": "هود",
            "namaLatin": "Hud",
            "jumlahAyat": 123,
            "tempatTurun": 1,
            "arti": "Hud"
        },
        {
            "nomor": 12,
            "nama": "يوسف",
            "namaLatin": "Yusuf",
            "jumlahAyat": 111,
            "tempatTurun": 1,
            "arti": "Yusuf"
        },
        {
            "nomor": 13,
            "nama": "الرّعد",
            "namaLatin": "Ar-Ra'd",
            "jumlahAyat": 43,
            "tempatTurun": 0,
            "arti": "Guruh"
        },
        {
            "nomor": 14,
            "nama": "ابرٰهيم",
            "namaLatin": "Ibrahim",
            "jumlahAyat": 52,
            "tempatTurun": 1,
            "arti": "Ibrahim"
        },
        {
            "nomor": 15,
            "nama": "الحجر",
            "namaLatin": "Al-Hijr",
            "jumlahAyat": 99,
            "tempatTurun": 1,
            "arti": "Hijr"
        },
        {
            "nomor": 16,
            "nama": "النحل",
            "namaLatin": "An-Nahl",
            "jumlahAyat": 128,
            "tempatTurun": 1,
            "arti": "Lebah"
        },
        {
            "nomor": 17,
            "nama": "الاسراۤء",
            "namaLatin": "Al-Isra'",
            "jumlahAyat": 111,
            "tempatTurun": 1,
            "arti": "Memperjalankan Malam Hari"
        },
        {
            "nomor": 18,
            "nama": "الكهف",
            "namaLatin": "Al-Kahf",
            "jumlahAyat": 110,
            "tempatTurun": 1,
            "arti": "Goa"
        },
        {
            "nomor": 19,
            "nama": "مريم",
            "namaLatin": "Maryam",
            "jumlahAyat": 98,
            "tempatTurun": 1,
            "arti": "Maryam"
        },
        {
            "nomor": 20,
            "nama": "طٰهٰ",
            "namaLatin": "Taha",
            "jumlahAyat": 135,
            "tempatTurun": 1,
            "arti": "Taha"
        },
        {
            "nomor": 21,
            "nama": "الانبياۤء",
            "namaLatin": "Al-Anbiya'",
            "jumlahAyat": 112,
            "tempatTurun": 1,
            "arti": "Para Nabi"
        },
        {
            "nomor": 22,
            "nama": "الحج",
            "namaLatin": "Al-Hajj",
            "jumlahAyat": 78,
            "tempatTurun": 0,
            "arti": "Haji"
        },
        {
            "nomor": 23,
            "nama": "المؤمنون",
            "namaLatin": "Al-Mu'minun",
            "jumlahAyat": 118,
            "tempatTurun": 1,
            "arti": "Orang-Orang Mukmin"
        },
        {
            "nomor": 24,
            "nama": "النّور",
            "namaLatin": "An-Nur",
            "jumlahAyat": 64,
            "tempatTurun": 0,
            "arti": "Cahaya"
        },
        {
            "nomor": 25,
            "nama": "الفرقان",
            "namaLatin": "Al-Furqan",
            "jumlahAyat": 77,
            "tempatTurun": 1,
            "arti": "Pembeda"
        },
        {
            "nomor": 26,
            "nama": "الشعراۤء",
            "namaLatin": "Asy-Syu'ara'",
            "jumlahAyat": 227,
            "tempatTurun": 1,
            "arti": "Para Penyair"
        },
        {
            "nomor": 27,
            "nama": "النمل",
            "namaLatin": "An-Naml",
            "jumlahAyat": 93,
            "tempatTurun": 1,
            "arti": "Semut-semut"
        },
        {
            "nomor": 28,
            "nama": "القصص",
            "namaLatin": "Al-Qasas",
            "jumlahAyat": 88,
            "tempatTurun": 1,
            "arti": "Kisah-Kisah"
        },
        {
            "nomor": 29,
            "nama": "العنكبوت",
            "namaLatin": "Al-'Ankabut",
            "jumlahAyat": 69,
            "tempatTurun": 1,
            "arti": "Laba-Laba"
        },
        {
            "nomor": 30,
            "nama": "الرّوم",
            "namaLatin": "Ar-Rum",
            "jumlahAyat": 60,
            "tempatTurun": 1,
            "arti": "Romawi"
        },
        {
            "nomor": 31,
            "nama": "لقمٰن",
            "namaLatin": "Luqman",
            "jumlahAyat": 34,
            "tempatTurun": 1,
            "arti": "Luqman"
        },
        {
            "nomor": 32,
            "nama": "السّجدة",
            "namaLatin": "As-Sajdah",
            "jumlahAyat": 30,
            "tempatTurun": 1,
            "arti": "Sajdah"
        },
        {
            "nomor": 33,
            "nama": "الاحزاب",
            "namaLatin": "Al-Ahzab",
            "jumlahAyat": 73,
            "tempatTurun": 0,
            "arti": "Golongan Yang Bersekutu"
        },
        {
            "nomor": 34,
            "nama": "سبأ",
            "namaLatin": "Saba'",
            "jumlahAyat": 54,
            "tempatTurun": 1,
            "arti": "Saba'"
        },
        {
            "nomor": 35,
            "nama": "فاطر",
            "namaLatin": "Fatir",
            "jumlahAyat": 45,
            "tempatTurun": 1,
            "arti": "Maha Pencipta"
        },
        {
            "nomor": 36,
            "nama": "يٰسۤ",
            "namaLatin": "Yasin",
            "jumlahAyat": 83,
            "tempatTurun": 1,
            "arti": "Yasin"
        },
        {
            "nomor": 37,
            "nama": "الصّٰۤفّٰت",
            "namaLatin": "As-Saffat",
            "jumlahAyat": 182,
            "tempatTurun": 1,
            "arti": "Barisan-Barisan"
        },
        {
            "nomor": 38,
            "nama": "ص",
            "namaLatin": "Sad",
            "jumlahAyat": 88,
            "tempatTurun": 1,
            "arti": "Sad"
        },
        {
            "nomor": 39,
            "nama": "الزمر",
            "namaLatin": "Az-Zumar",
            "jumlahAyat": 75,
            "tempatTurun": 1,
            "arti": "Rombongan"
        },
        {
            "nomor": 40,
            "nama": "غافر",
            "namaLatin": "Gafir",
            "jumlahAyat": 85,
            "tempatTurun": 1,
            "arti": "Maha Pengampun"
        },
        {
            "nomor": 41,
            "nama": "فصّلت",
            "namaLatin": "Fussilat",
            "jumlahAyat": 54,
            "tempatTurun": 1,
            "arti": "Yang Dijelaskan"
        },
        {
            "nomor": 42,
            "nama": "الشورى",
            "namaLatin": "Asy-Syura",
            "jumlahAyat": 53,
            "tempatTurun": 1,
            "arti": "Musyawarah"
        },
        {
            "nomor": 43,
            "nama": "الزخرف",
            "namaLatin": "Az-Zukhruf",
            "jumlahAyat": 89,
            "tempatTurun": 1,
            "arti": "Perhiasan"
        },
        {
            "nomor": 44,
            "nama": "الدخان",
            "namaLatin": "Ad-Dukhan",
            "jumlahAyat": 59,
            "tempatTurun": 1,
            "arti": "Kabut"
        },
        {
            "nomor": 45,
            "nama": "الجاثية",
            "namaLatin": "Al-Jasiyah",
            "jumlahAyat": 37,
            "tempatTurun": 1,
            "arti": "Berlutut"
        },
        {
            "nomor": 46,
            "nama": "الاحقاف",
            "namaLatin": "Al-Ahqaf",
            "jumlahAyat": 35,
            "tempatTurun": 1,
            "arti": "Bukit Pasir"
        },
        {
            "nomor": 47,
            "nama": "محمّد",
            "namaLatin": "Muhammad",
            "jumlahAyat": 38,
            "tempatTurun": 0,
            "arti": "Muhammad"
        },
        {
            "nomor": 48,
            "nama": "الفتح",
            "namaLatin": "Al-Fath",
            "jumlahAyat": 29,
            "tempatTurun": 0,
            "arti": "Kemenangan"
        },
        {
            "nomor": 49,
            "nama": "الحجرٰت",
            "namaLatin": "Al-Hujurat",
            "jumlahAyat": 18,
            "tempatTurun": 0,
            "arti": "Kamar-Kamar"
        },
        {
            "nomor": 50,
            "nama": "ق",
            "namaLatin": "Qaf",
            "jumlahAyat": 45,
            "tempatTurun": 1,
            "arti": "Qaf"
        },
        {
            "nomor": 51,
            "nama": "الذّٰريٰت",
            "namaLatin": "Az-Zariyat",
            "jumlahAyat": 60,
            "tempatTurun": 1,
            "arti": "Angin yang Menerbangkan"
        },
        {
            "nomor": 52,
            "nama": "الطور",
            "namaLatin": "At-Tur",
            "jumlahAyat": 49,
            "tempatTurun": 1,
            "arti": "Bukit Tursina"
        },
        {
            "nomor": 53,
            "nama": "النجم",
            "namaLatin": "An-Najm",
            "jumlahAyat": 62,
            "tempatTurun": 1,
            "arti": "Bintang"
        },
        {
            "nomor": 54,
            "nama": "القمر",
            "namaLatin": "Al-Qamar",
            "jumlahAyat": 55,
            "tempatTurun": 1,
            "arti": "Bulan"
        },
        {
            "nomor": 55,
            "nama": "الرحمن",
            "namaLatin": "Ar-Rahman",
            "jumlahAyat": 78,
            "tempatTurun": 0,
            "arti": "Maha Pengasih"
        },
        {
            "nomor": 56,
            "nama": "الواقعة",
            "namaLatin": "Al-Waqi'ah",
            "jumlahAyat": 96,
            "tempatTurun": 1,
            "arti": "Hari Kiamat"
        },
        {
            "nomor": 57,
            "nama": "الحديد",
            "namaLatin": "Al-Hadid",
            "jumlahAyat": 29,
            "tempatTurun": 0,
            "arti": "Besi"
        },
        {
            "nomor": 58,
            "nama": "المجادلة",
            "namaLatin": "Al-Mujadalah",
            "jumlahAyat": 22,
            "tempatTurun": 0,
            "arti": "Gugatan"
        },
        {
            "nomor": 59,
            "nama": "الحشر",
            "namaLatin": "Al-Hasyr",
            "jumlahAyat": 24,
            "tempatTurun": 0,
            "arti": "Pengusiran"
        },
        {
            "nomor": 60,
            "nama": "الممتحنة",
            "namaLatin": "Al-Mumtahanah",
            "jumlahAyat": 13,
            "tempatTurun": 0,
            "arti": "Wanita Yang Diuji"
        },
        {
            "nomor": 61,
            "nama": "الصّفّ",
            "namaLatin": "As-Saff",
            "jumlahAyat": 14,
            "tempatTurun": 0,
            "arti": "Barisan"
        },
        {
            "nomor": 62,
            "nama": "الجمعة",
            "namaLatin": "Al-Jumu'ah",
            "jumlahAyat": 11,
            "tempatTurun": 0,
            "arti": "Jumat"
        },
        {
            "nomor": 63,
            "nama": "المنٰفقون",
            "namaLatin": "Al-Munafiqun",
            "jumlahAyat": 11,
            "tempatTurun": 0,
            "arti": "Orang-Orang Munafik"
        },
        {
            "nomor": 64,
            "nama": "التغابن",
            "namaLatin": "At-Tagabun",
            "jumlahAyat": 18,
            "tempatTurun": 0,
            "arti": "Pengungkapan Kesalahan"
        },
        {
            "nomor": 65,
            "nama": "الطلاق",
            "namaLatin": "At-Talaq",
            "jumlahAyat": 12,
            "tempatTurun": 0,
            "arti": "Talak"
        },
        {
            "nomor": 66,
            "nama": "التحريم",
            "namaLatin": "At-Tahrim",
            "jumlahAyat": 12,
            "tempatTurun": 0,
            "arti": "Pengharaman"
        },
        {
            "nomor": 67,
            "nama": "الملك",
            "namaLatin": "Al-Mulk",
            "jumlahAyat": 30,
            "tempatTurun": 1,
            "arti": "Kerajaan"
        },
        {
            "nomor": 68,
            "nama": "القلم",
            "namaLatin": "Al-Qalam",
            "jumlahAyat": 52,
            "tempatTurun": 1,
            "arti": "Pena"
        },
        {
            "nomor": 69,
            "nama": "الحاۤقّة",
            "namaLatin": "Al-Haqqah",
            "jumlahAyat": 52,
            "tempatTurun": 1,
            "arti": "Hari Kiamat"
        },
        {
            "nomor": 70,
            "nama": "المعارج",
            "namaLatin": "Al-Ma'arij",
            "jumlahAyat": 44,
            "tempatTurun": 1,
            "arti": "Tempat Naik"
        },
        {
            "nomor": 71,
            "nama": "نوح",
            "namaLatin": "Nuh",
            "jumlahAyat": 28,
            "tempatTurun": 1,
            "arti": "Nuh"
        },
        {
            "nomor": 72,
            "nama": "الجن",
            "namaLatin": "Al-Jinn",
            "jumlahAyat": 28,
            "tempatTurun": 1,
            "arti": "Jin"
        },
        {
            "nomor": 73,
            "nama": "المزّمّل",
            "namaLatin": "Al-Muzzammil",
            "jumlahAyat": 20,
            "tempatTurun": 1,
            "arti": "Orang Yang Berselimut"
        },
        {
            "nomor": 74,
            "nama": "المدّثّر",
            "namaLatin": "Al-Muddassir",
            "jumlahAyat": 56,
            "tempatTurun": 1,
            "arti": "Orang Yang Berkemul"
        },
        {
            "nomor": 75,
            "nama": "القيٰمة",
            "namaLatin": "Al-Qiyamah",
            "jumlahAyat": 40,
            "tempatTurun": 1,
            "arti": "Hari Kiamat"
        },
        {
            "nomor": 76,
            "nama": "الانسان",
            "namaLatin": "Al-Insan",
            "jumlahAyat": 31,
            "tempatTurun": 0,
            "arti": "Manusia"
        },
        {
            "nomor": 77,
            "nama": "المرسلٰت",
            "namaLatin": "Al-Mursalat",
            "jumlahAyat": 50,
            "tempatTurun": 1,
            "arti": "Malaikat Yang Diutus"
        },
        {
            "nomor": 78,
            "nama": "النبأ",
            "namaLatin": "An-Naba'",
            "jumlahAyat": 40,
            "tempatTurun": 1,
            "arti": "Berita Besar"
        },
        {
            "nomor": 79,
            "nama": "النّٰزعٰت",
            "namaLatin": "An-Nazi'at",
            "jumlahAyat": 46,
            "tempatTurun": 1,
            "arti": "Malaikat Yang Mencabut"
        },
        {
            "nomor": 80,
            "nama": "عبس",
            "namaLatin": "'Abasa",
            "jumlahAyat": 42,
            "tempatTurun": 1,
            "arti": "Bermuka Masam"
        },
        {
            "nomor": 81,
            "nama": "التكوير",
            "namaLatin": "At-Takwir",
            "jumlahAyat": 29,
            "tempatTurun": 1,
            "arti": "Penggulungan"
        },
        {
            "nomor": 82,
            "nama": "الانفطار",
            "namaLatin": "Al-Infitar",
            "jumlahAyat": 19,
            "tempatTurun": 1,
            "arti": "Terbelah"
        },
        {
            "nomor": 83,
            "nama": "المطفّفين",
            "namaLatin": "Al-Mutaffifin",
            "jumlahAyat": 36,
            "tempatTurun": 1,
            "arti": "Orang-Orang Curang"
        },
        {
            "nomor": 84,
            "nama": "الانشقاق",
            "namaLatin": "Al-Insyiqaq",
            "jumlahAyat": 25,
            "tempatTurun": 1,
            "arti": "Terbelah"
        },
        {
            "nomor": 85,
            "nama": "البروج",
            "namaLatin": "Al-Buruj",
            "jumlahAyat": 22,
            "tempatTurun": 1,
            "arti": "Gugusan Bintang"
        },
        {
            "nomor": 86,
            "nama": "الطارق",
            "namaLatin": "At-Tariq",
            "jumlahAyat": 17,
            "tempatTurun": 1,
            "arti": "Yang Datang Di Malam Hari"
        },
        {
            "nomor": 87,
            "nama": "الاعلى",
            "namaLatin": "Al-A'la",
            "jumlahAyat": 19,
            "tempatTurun": 1,
            "arti": "Maha Tinggi"
        },
        {
            "nomor": 88,
            "nama": "الغاشية",
            "namaLatin": "Al-Gasyiyah",
            "jumlahAyat": 26,
            "tempatTurun": 1,
            "arti": "Hari Kiamat"
        },
        {
            "nomor": 89,
            "nama": "الفجر",
            "namaLatin": "Al-Fajr",
            "jumlahAyat": 30,
            "tempatTurun": 1,
            "arti": "Fajar"
        },
        {
            "nomor": 90,
            "nama": "البلد",
            "namaLatin": "Al-Balad",
            "jumlahAyat": 20,
            "tempatTurun": 1,
            "arti": "Negeri"
        },
        {
            "nomor": 91,
            "nama": "الشمس",
            "namaLatin": "Asy-Syams",
            "jumlahAyat": 15,
            "tempatTurun": 1,
            "arti": "Matahari"
        },
        {
            "nomor": 92,
            "nama": "الّيل",
            "namaLatin": "Al-Lail",
            "jumlahAyat": 21,
            "tempatTurun": 1,
            "arti": "Malam"
        },
        {
            "nomor": 93,
            "nama": "الضحى",
            "namaLatin": "Ad-Duha",
            "jumlahAyat": 11,
            "tempatTurun": 1,
            "arti": "Duha"
        },
        {
            "nomor": 94,
            "nama": "الشرح",
            "namaLatin": "Asy-Syarh",
            "jumlahAyat": 8,
            "tempatTurun": 1,
            "arti": "Lapang"
        },
        {
            "nomor": 95,
            "nama": "التين",
            "namaLatin": "At-Tin",
            "jumlahAyat": 8,
            "tempatTurun": 1,
            "arti": "Buah Tin"
        },
        {
            "nomor": 96,
            "nama": "العلق",
            "namaLatin": "Al-'Alaq",
            "jumlahAyat": 19,
            "tempatTurun": 1,
            "arti": "Segumpal Darah"
        },
        {
            "nomor": 97,
            "nama": "القدر",
            "namaLatin": "Al-Qadr",
            "jumlahAyat": 5,
            "tempatTurun": 1,
            "arti": "Kemuliaan"
        },
        {
            "nomor": 98,
            "nama": "البيّنة",
            "namaLatin": "Al-Bayyinah",
            "jumlahAyat": 8,
            "tempatTurun": 0,
            "arti": "Bukti Nyata"
        },
        {
            "nomor": 99,
            "nama": "الزلزلة",
            "namaLatin": "Az-Zalzalah",
            "jumlahAyat": 8,
            "tempatTurun": 0,
            "arti": "Guncangan"
        },
        {
            "nomor": 100,
            "nama": "العٰديٰت",
            "namaLatin": "Al-'Adiyat",
            "jumlahAyat": 11,
            "tempatTurun": 1,
            "arti": "Kuda Yang Berlari Kencang"
        },
        {
            "nomor": 101,
            "nama": "القارعة",
            "namaLatin": "Al-Qari'ah",
            "jumlahAyat": 11,
            "tempatTurun": 1,
            "arti": "Hari Kiamat"
        },
        {
            "nomor": 102,
            "nama": "التكاثر",
            "namaLatin": "At-Takasur",
            "jumlahAyat": 8,
            "tempatTurun": 1,
            "arti": "Bermegah-Megahan"
        },
        {
            "nomor": 103,
            "nama": "العصر",
            "namaLatin": "Al-'Asr",
            "jumlahAyat": 3,
            "tempatTurun": 1,
            "arti": "Asar"
        },
        {
            "nomor": 104,
            "nama": "الهمزة",
            "namaLatin": "Al-Humazah",
            "jumlahAyat": 9,
            "tempatTurun": 1,
            "arti": "Pengumpat"
        },
        {
            "nomor": 105,
            "nama": "الفيل",
            "namaLatin": "Al-Fil",
            "jumlahAyat": 5,
            "tempatTurun": 1,
            "arti": "Gajah"
        },
        {
            "nomor": 106,
            "nama": "قريش",
            "namaLatin": "Quraisy",
            "jumlahAyat": 4,
            "tempatTurun": 1,
            "arti": "Quraisy"
        },
        {
            "nomor": 107,
            "nama": "الماعون",
            "namaLatin": "Al-Ma'un",
            "jumlahAyat": 7,
            "tempatTurun": 1,
            "arti": "Barang Yang Berguna"
        },
        {
            "nomor": 108,
            "nama": "الكوثر",
            "namaLatin": "Al-Kausar",
            "jumlahAyat": 3,
            "tempatTurun": 1,
            "arti": "Pemberian Yang Banyak"
        },
        {
            "nomor": 109,
            "nama": "الكٰفرون",
            "namaLatin": "Al-Kafirun",
            "jumlahAyat": 6,
            "tempatTurun": 1,
            "arti": "Orang-Orang kafir"
        },
        {
            "nomor": 110,
            "nama": "النصر",
            "namaLatin": "An-Nasr",
            "jumlahAyat": 3,
            "tempatTurun": 0,
            "arti": "Pertolongan"
        },
        {
            "nomor": 111,
            "nama": "اللهب",
            "namaLatin": "Al-Lahab",
            "jumlahAyat": 5,
            "tempatTurun": 1,
            "arti": "Api Yang Bergejolak"
        },
        {
            "nomor": 112,
            "nama": "الاخلاص",
            "namaLatin": "Al-Ikhlas",
            "jumlahAyat": 4,
            "tempatTurun": 1,
            "arti": "Ikhlas"
        },
        {
            "nomor": 113,
            "nama": "الفلق",
            "namaLatin": "Al-Falaq",
            "jumlahAyat": 5,
            "tempatTurun": 1,
            "arti": "Subuh"
        },
        {
            "nomor": 114,
            "nama": "الناس",
            "namaLatin": "An-Nas",
            "jumlahAyat": 6,
            "tempatTurun": 1,
            "arti": "Manusia"
        }
    ]
    const variant = {
        hidden: { translateX: "100%", opacity: 0 },
        visible: { translateX: 0, opacity: 1 },
        exit: { translateX: "-100%", opacity: 0 }
    };
    const [keyword, setKeyword] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value.replace(" ", "-").toLowerCase());
    }
    return (<div className="w-full flex flex-col gap-5 overflow-x-visible mx-auto ">
        <div className="w-full h-40 flex  items-center  justify-center "><h1 className="font-bold text-4xl text-center">Mulai membaca!</h1></div>
        <div className="ring-1 ring-slate-200 flex items-center gap-2 shadow-sm rounded-md bg-gray-50 focus-within:ring-slate-300 px-4 py-2">
            <span className="text-slate-400"><IoSearchOutline /></span>
            <input onChange={handleSearch} className=" bg-inherit w-full outline-none placeholder-slate-400" type="text" name="" placeholder="Cari surat..." id="" />
        </div>
        <div className="w-full  overflow-visible py-9 scrollbar-none ">
            <AnimatePresence>
                {(keyword.length ? daftarSurat.filter(infoSurat => infoSurat.arti.toLowerCase().replace(" ", "-").includes(keyword) || infoSurat.namaLatin.toLowerCase().replace(" ", "-").includes(keyword)) : daftarSurat)?.map((infoSurat: InfoSurat) => {
                    return (<motion.div key={"surat#" + infoSurat.nomor} transition={{ type: "tween", ease: "linear" }} animate={variant.visible} exit={variant.exit}> <SurahCard onClick={() => { props.bacaSuratCb(infoSurat) }} infoSurat={infoSurat} /></motion.div>);
                })}
            </AnimatePresence>

        </div>
    </div >)
}

export default DaftarSurat;