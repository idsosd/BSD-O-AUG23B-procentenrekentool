const oud = document.getElementById("inp_oud")

const soort = document.getElementById("select_soort")
const percentage = document.getElementById("inp_perc")
const factor = document.getElementById("inp_factor")
const deler = document.getElementById("inp_deler")

const nieuw = document.getElementById("inp_nieuw")

const knop = document.getElementById("losop_btn")

let ber_factor

function checkInformation()
{
    //alert("Jason doet niet alsof hij oplet en Robin al helemaal niet; hij zegt van wel;")
    if( oud.value != "" ) {
        oud.classList.remove('is-invalid')
        oud.classList.add('is-valid')
    } else {
        oud.classList.remove('is-valid')
        oud.classList.add('is-invalid')
    }
    if( soort.value != ''){
        soort.classList.remove('is-invalid')
        soort.classList.add('is-valid')
    } else {
        soort.classList.remove('is-valid')
        soort.classList.add('is-invalid')
    }
    if( percentage.value != ''){
        percentage.classList.remove('is-invalid')
        percentage.classList.add('is-valid')
    } else {
        percentage.classList.remove('is-valid')
        percentage.classList.add('is-invalid')
    }
    if( nieuw.value != ''){
        nieuw.classList.remove('is-invalid')
        nieuw.classList.add('is-valid')
    } else {
        nieuw.classList.remove('is-valid')
        nieuw.classList.add('is-invalid')
    }
    if((oud.value != "" && nieuw.value != "") || 
    (oud.value != "" && soort.value != "" && percentage.value != "") || 
    (nieuw.value != "" && soort.value != "" && percentage.value != "")){
        knop.disabled = false
    } else {
        knop.disabled = true
    }
    if(soort.value != "" && percentage.value != "") {
        if(soort.value == 1)
            ber_factor = percentage.value / 100
        else if (soort.value == 2)
            ber_factor = 1 + percentage.value / 100
        else
            ber_factor = 1 - percentage.value / 100
        factor.value = ber_factor
        deler.value = ber_factor
    }
}

function solveProblem()
{
    //alert("Hij doet het en Jason ziet er uit als een toffe banaan")
    if(oud.value != "" && soort.value != "" && percentage.value != "")
    {
        nieuw.value = oud.value * ber_factor
    }
    else if(nieuw.value != "" && soort.value != "" && percentage.value != "")
    {
        oud.value = nieuw.value / ber_factor
    }
    else 
    {
        ber_factor = nieuw.value / oud.value
        factor.value = ber_factor   
        deler.value = ber_factor
        if(ber_factor > 1)
        {
            //dan is er dus sprake van toename,
            //dus de value van het soort-veld moet 2 worden
            //het toename-percentage is dan (ber_factor - 1) * 100
            soort.value = 2
            soort.classList.remove("is-invalid")
            percentage.value = ((ber_factor - 1) * 100).toFixed(2)
            percentage.classList.remove("is-invalid")
        }
        else 
        {
            //dan is er dus sprake van afname,
            //dus de value van het soort-veld moet 3 worden
            //het afname-percentage is dan (1 - ber_factor) * 100
            soort.value = 3
            soort.classList.remove("is-invalid")
            percentage.value = ((1 - ber_factor) * 100).toFixed(2)
            percentage.classList.remove("is-invalid")
        }
    }
}

