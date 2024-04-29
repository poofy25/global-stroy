export const getImgs = (folder) => {
    const imagePaths = Object.values(folder);

    return imagePaths;
};




import albisoara804_01 from '/src/assets/img/work/albisoara80-4_01.png'
import albisoara804_02 from '/src/assets/img/work/albisoara80-4_02.png'
import albisoara804_03 from '/src/assets/img/work/albisoara80-4_03.png'
import albisoara804_04 from '/src/assets/img/work/albisoara80-4_04.png'
import albisoara804_05 from '/src/assets/img/work/albisoara80-4_05.png'
import albisoara804_06 from '/src/assets/img/work/albisoara80-4_06.png'
import albisoara804_07 from '/src/assets/img/work/albisoara80-4_07.png'
import albisoara804_08 from '/src/assets/img/work/albisoara80-4_08.png'

import liviudeleanu_01 from '/src/assets/img/work/liviudeleanu_01.png'
import liviudeleanu_02 from '/src/assets/img/work/liviudeleanu_02.png'
import liviudeleanu_03 from '/src/assets/img/work/liviudeleanu_03.png'
import liviudeleanu_04 from '/src/assets/img/work/liviudeleanu_04.png'

import socoleni15_01 from '/src/assets/img/work/socoleni15_01.png'
import socoleni15_02 from '/src/assets/img/work/socoleni15_02.png'
import socoleni15_03 from '/src/assets/img/work/socoleni15_03.png'

import mircea_cel_batran_41_img from '/src/assets/img/work/mircea-cel-batran-41.png'
import mircea_cel_batran_41_vid from '/src/assets/img/work/mircea-cel-batran-41.mp4'

// const negruzii_5 = import.meta.glob('/src/assets/img/work/Negruzii_5/*');
const negruzii_5 = import.meta.glob('/src/assets/img/work/Negruzii_5/*', { eager: true, as: 'url' })
const grenoblea_120 = import.meta.glob('/src/assets/img/work/Grenoblea_120/*', { eager: true, as: 'url' })
const grenoblea_130 = import.meta.glob('/src/assets/img/work/Grenoblea_130/*', { eager: true, as: 'url' })

const albaiulia_83 = import.meta.glob('/src/assets/img/work/Alba_Iulia_83/*', { eager: true, as: 'url' })
const cetateaalba_27 = import.meta.glob('/src/assets/img/work/Cetatea_Alba_27/*', { eager: true, as: 'url' })
const cuzavoda_13_2 = import.meta.glob('/src/assets/img/work/Cuza_Voda_13_2/*', { eager: true, as: 'url' })

const georgecalinescu_12 = import.meta.glob('/src/assets/img/work/George_Calinescu_12/*', { eager: true, as: 'url' })
const ionhancu_7 = import.meta.glob('/src/assets/img/work/Ion_Hancu_7/*', { eager: true, as: 'url' })
const ionnistor_28 = import.meta.glob('/src/assets/img/work/Ion_Nistor_28/*', { eager: true, as: 'url' })

const muncesti_245_3 = import.meta.glob('/src/assets/img/work/Muncesti_245_3/*', { eager: true, as: 'url' })
const steafanneaga_67 = import.meta.glob('/src/assets/img/work/Stefan_Neaga_67/*', { eager: true, as: 'url' })

const cojusna = import.meta.glob('/src/assets/img/work/Cojusna/*', { eager: true, as: 'url' })




console.log (getImgs(negruzii_5) , `/assets/${getImgs(negruzii_5)[0]}`)


const workContent = {
    "Conjusna":{
        name:"Cojușna",
        img:getImgs(cojusna)
    },
    "Albisoara_80_4":{
        name:'Albișoara 80/4',
        img:[albisoara804_05 , albisoara804_02 , albisoara804_03 , albisoara804_04 , albisoara804_01 , albisoara804_06 , albisoara804_07 , albisoara804_08]
    },
    "Liviu_Deleanu":{
        name:'Liviu Deleanu',
        img:[liviudeleanu_01 , liviudeleanu_02 , liviudeleanu_03 , liviudeleanu_04]
    },
    "Socoleni_15":{
        name:'Socoleni 15',
        img:[socoleni15_02 , socoleni15_01 , socoleni15_03]
    },
    "Mircea_cel_Batran_41":{
        name:'Mircea cel Bătrân 41',
        img:[mircea_cel_batran_41_img],
        vid:[mircea_cel_batran_41_vid]
    },
    "Negruzii_5":{
        name:"Negruzii 5",
        img:getImgs(negruzii_5)
    },
    "Grenoblea_120":{
        name:"Grenoblea 120",
        img:getImgs(grenoblea_120)
    },
    "Grenoblea_130":{
        name:"Grenoblea 130",
        img:getImgs(grenoblea_130)
    },
    "Alba_Iulia_83":{
        name:"Alba Iulia 83",
        img:getImgs(albaiulia_83)
    },
    "Cetatea_Alba_27":{
        name:"Cetatea Albă 27",
        img:getImgs(cetateaalba_27)
    },
    "Cuza_Voda_13_2":{
        name:"Cuza Vodă 13/2",
        img:getImgs(cuzavoda_13_2)
    },
    "George_Calinescu_12":{
        name:"George Calinescu 12",
        img:getImgs(georgecalinescu_12)
    },
    "ionhancu_7":{
        name:"Ion Hancu 7",
        img:getImgs(ionhancu_7)
    },
    "ionnistor_28":{
        name:"Ion Nistor 28",
        img:getImgs(ionnistor_28)
    },
    "Muncesti_245_3":{
        name:"Muncesti 245/3",
        img:getImgs(muncesti_245_3)
    },
    "Steafan_Neaga_67":{
        name:"Stefan Neaga 67",
        img:getImgs(steafanneaga_67)
    }
}

export default workContent