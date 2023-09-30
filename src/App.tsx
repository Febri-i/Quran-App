import { useEffect, useState } from "react";
import DaftarSurat from "./DaftarSurat";
import PembacaSurat from "./PembacaSurat";
import { Ayat, InfoSurat } from "./Types";
import { AnimatePresence, motion } from "framer-motion";
function App() {
    const [suratDibaca, setSuratDibaca] = useState<InfoSurat>({
        "nomor": -1,
        "nama": "",
        "namaLatin": "",
        "jumlahAyat": -1,
        "tempatTurun": -1,
        "arti": ""
    })
    const [ayatDibaca, setAyatDibaca] = useState<Ayat[]>([]);
    const handleBacaSurat: (infoSurat: InfoSurat) => void = (infoSurat: InfoSurat) => {
        setSuratDibaca(infoSurat);

        fetch("/surat/" + infoSurat.nomor)
            .then(res => res.text())
            .then(data => {
                setAyatDibaca(JSON.parse(data));
            })
    }
    const handleKembali: () => void = () => {
        setSuratDibaca({
            "nomor": -1,
            "nama": "",
            "namaLatin": "",
            "jumlahAyat": -1,
            "tempatTurun": -1,
            "arti": ""
        });
        setAyatDibaca([]);
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    })
    const variant = {
        initial: { translateX: "50%", opacity: 0 }, animate: { translateX: "-50%", opacity: 1 }, exit: { translate: "-100%", opacity: 0 },
    }
    return (
        <div className="w-full overflow-x-hidden h-full text-gray-700">
            <AnimatePresence>

                {(suratDibaca.nomor < 0) && <motion.div key={"daftarSurat"} className=" w-96 absolute top-0 left-1/2 -translate-x-1/2" transition={{ type: "tween", ease: "easeOut" }} initial={variant.initial} exit={variant.exit} animate={variant.animate}><DaftarSurat bacaSuratCb={handleBacaSurat} /></motion.div>}
                {(suratDibaca.nomor > 0) && <motion.div key={"pembacaSurat"} transition={{ type: "tween", ease: "easeOut" }} initial={variant.initial} animate={variant.animate} exit={variant.exit} className="w-96 absolute left-1/2  ">
                    <PembacaSurat daftarAyat={ayatDibaca} infoSurat={suratDibaca} kembaliCb={handleKembali} />
                </motion.div>}

            </AnimatePresence>
        </div>
    )
}

export default App;