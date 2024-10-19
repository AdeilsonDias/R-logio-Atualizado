
    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")



    const relogio = setInterval (function time (){
        let hoje = new Date()
        let hr = hoje.getHours ()
        let m = hoje.getMinutes ()
        let s = hoje.getSeconds()

        if ( hr <10) hr = `0 ${hr}`

        if ( m < 10) m = `0 ${m}`

        if ( s < 10) s = `0 ${s}`

        hours.innerHTML = hr
        minutes.innerHTML = m
        seconds.innerHTML = s

    })
