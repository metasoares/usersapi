const footerDate = document.querySelector('#footer-date')
const copy = document.querySelector('.copy-icon')
const linkToCopy = document.querySelector('.copy-link')
//Copy More

const dateToWeb = () => {
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    let day = new Date().getDate()

    if ( day < 10) {
      day = '0' + day 
    } 
    if(month < 10) {
        month = '0' + month
    }

    let date = `${month} - ${day} - ${year}`
    return footerDate.innerText =`${date}`
}
dateToWeb()


//Copy API LINK
const copyData = () =>{
  
    // let coyText;
    copy.addEventListener('click', (e) => {
        e.preventDefault()

        let copyLink = navigator.clipboard.writeText(linkToCopy.innerHTML)
        if(copyLink) { 
         copy.innerHTML = 'Copied'
            // handlePromise()
        }
        else {
            copy.innerHTML = 'Copy'
        }
        return copyLink

    })
}
copyData()

console.log(copyData)

// const helper = () => {
//    return new Promise((resolve, reject) => {
//     copy.innerHTML = 'Copied'
//    resolve(copy.innerHTML)
//    }) 
// }


// const handlePromise = () => {
//     helper().then(result => {
//         copy.innerHTML = `${result}`
//     }),then((catch) => {
//         copy.innerHTML = 'Copy'
//     })
// }

