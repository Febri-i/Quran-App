export interface Ayat {
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audioURL: string;
}

export interface Surat {
  detail: InfoSurat;
  ayat: Ayat[];
}

export interface InfoSurat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: number;
  arti: string;
}
