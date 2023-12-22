export const getLangFromUrl = (url)=>{
    let lang = 'ro'

    const firstUrlSegment =  document.location.pathname.split('/')[1];



    if(firstUrlSegment === 'ro'){
        lang = 'ro'
    }
    if(firstUrlSegment ==='ru'){
        lang = 'ru'
    }


    return lang
}
