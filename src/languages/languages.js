import roJson from '/src/languages/RO.json'
import ruJson from '/src/languages/RU.json'

const translateJson = {
    ro:roJson,
    ru:ruJson
}

export const getTranslation = (lang)=>{
    if(lang==='ro'){
        return translateJson.ro
    }
    else if (lang==='ru'){
        return translateJson.ru
    }
    else{
        return translateJson.ro
    }
}

