const searchButton = () => {
    const searchPhone = document.getElementById('search-phone').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = (phones) => {
    const phoneData20 = phones.slice(0, 20)
    phoneData20.forEach(phone => {
        console.log(phone)
        const phoneArea = document.getElementById('phone-area')
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("col-sm-12")
        div.classList.add("my-4")
        div.innerHTML = `
           <div class = "card px-3 py-3" style = "width: 25rem;">
               <img src = "${phone.image}" class = "img-thumnail" alt = "..">
               <div class = "card-body">
                    <h3 class = "card-title">Name: ${phone.phone_name}<h3> 
                    <h5 class = "card-text">Brand: ${phone.brand}</h5> 
                    <button onclick = "phoneDetails('${phone.slug}')"
                    class = "btn btn-primary px-4 py-2">Details</button> 
               </div> 
            </div>
        `
        phoneArea.appendChild(div)
    });
}
const phoneDetails = (details) => {
    // console.log(details)
    const url = ` https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.mainFeatures))
}