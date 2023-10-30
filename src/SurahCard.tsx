import { InfoSurat } from "./Types";

function SurahCard(props: { infoSurat: InfoSurat; onClick: () => void }) {
  return (
    <div
      onClick={props.onClick}
      className="flex cursor-pointer rounded-lg transition-all hover:bg-slate-50 hover:ring-1 items-center py-3 px-5 w-full"
    >
      <div className="w-full">
        <h1 className="text-lg">{props.infoSurat.namaLatin}</h1>
        <h2 className="text-sm text-slate-500">{props.infoSurat.arti}</h2>
      </div>
      <span className="w-min">{props.infoSurat.jumlahAyat}</span>
    </div>
  );
}

export default SurahCard;
