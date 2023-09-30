import { Ayat, InfoSurat } from "./Types";
import AyatCard from "./AyatCard"
import { motion } from "framer-motion";
import { IoArrowBackOutline } from "react-icons/io5"
function PembacaSurat(props: { infoSurat: InfoSurat, daftarAyat: Ayat[], kembaliCb: () => void }) {
    return (
        <div className="w-full overflow-y-visible">

            <nav className="flex justify-between py-3 font-bold   text-gray-400 text-2xl "><button onClick={props.kembaliCb} className="hover:text-gray-500  transition-all "><IoArrowBackOutline /></button></nav>
            <div className="w-full h-40 flex-col flex justify-center  items-center">
                <h1 className="text-5xl font-bold font-arabic mb-5">{props.infoSurat.nama}</h1>
                <h2>{props.infoSurat.namaLatin} • {props.infoSurat.arti}</h2>
                <h3>{props.infoSurat.jumlahAyat} ayat - {props.infoSurat.tempatTurun ? "Mekah" : "Madinah"}</h3>
            </div>
            <div className="flex gap-4 divide-y flex-col pb-10">
                {props.daftarAyat.length ? props.daftarAyat.map((ayat, i) => (<motion.div id={"ayat#" + props.infoSurat.nomor + "." + i} key={"ayat#" + props.infoSurat.nomor + "." + i} initial={{ translateX: "100%", opacity: 0, }} animate={{ translateX: 0, opacity: 1 }} transition={{ type: "tween", ease: "easeOut", delay: i * 0.05 }}>
                    <AyatCard nomorAyat={i + 1} ayat={ayat} />
                </motion.div>
                )) : <span className="text-center">Loading...</span>}</div>
        </div>
    )
}

export default PembacaSurat;