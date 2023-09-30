import AudioPlayer from "./AudioPlayer";
import { Ayat } from "./Types";

function AyatCard(props: { ayat: Ayat, nomorAyat: number }) {
    return (<div className="flex py-2 gap-2  flex-col">
        <p className="text-right leading-10 mb-2 text-xl font-bold font-arabic">{props.ayat.teksArab}</p>
        <p>{props.ayat.teksLatin}</p>
        <p>{props.ayat.teksIndonesia}</p>
        <div className="flex items-center">
            <span className="border-solid ring-1 ring-gray-700 flex aspect-square h-8 ml-2 items-center justify-center rounded-full">{props.nomorAyat}</span><AudioPlayer src={props.ayat.audioURL} />
        </div>
    </div>)
}

export default AyatCard;