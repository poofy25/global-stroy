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

const negruzii_5 = import.meta.glob('/src/assets/img/work/Negruzii_5/*.png');
const grenoblea_120 = import.meta.glob('/src/assets/img/work/Grenoblea_120/*.png');
const grenoblea_130 = import.meta.glob('/src/assets/img/work/Grenoblea_130/*.png');

console.log (negruzii_5 , grenoblea_120 ,grenoblea_130)
console.log (getImgs(negruzii_5) , getImgs(grenoblea_120) , getImgs(grenoblea_130))
export const getImgs = (folder) => {
    const imagePaths = Object.keys(folder);
    return imagePaths;
};

const workContent = {
    "Albisoara-80-4":{
        name:'Albișoara 80/4',
        img:[albisoara804_05 , albisoara804_02 , albisoara804_03 , albisoara804_04 , albisoara804_01 , albisoara804_06 , albisoara804_07 , albisoara804_08]
    },
    "Liviu-Deleanu":{
        name:'Liviu Deleanu',
        img:[liviudeleanu_01 , liviudeleanu_02 , liviudeleanu_03 , liviudeleanu_04]
    },
    "Socoleni-15":{
        name:'Socoleni 15',
        img:[socoleni15_02 , socoleni15_01 , socoleni15_03]
    },
    "Mircea-cel-Batran-41":{
        name:'Mircea cel Bătrân 41',
        img:[mircea_cel_batran_41_img],
        vid:[mircea_cel_batran_41_vid]
    },
    "Negruzii-5":{
        name:"Negruzii 5",
        img:getImgs(negruzii_5)
    },
    "Grenoblea-120":{
        name:"Grenoblea 120",
        img:getImgs(grenoblea_120)
    },
    "Grenoblea-130":{
        name:"Grenoblea 130",
        img:getImgs(grenoblea_130)
    }
}

export default workContent