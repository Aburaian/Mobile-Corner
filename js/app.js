// search phone
const searchButton = () => {
    document.getElementById("phone-area").innerHTML = ""
    document.getElementById("details-container").innerHTML = ""
    const searchPhone = document.getElementById("search-phone").value
    document.getElementById("search-phone").value = ""
    const error = document.getElementById("error")
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.data == 0 || searchPhone == "") {
                error.innerText = "No Phone Found"

            } else {
                displayPhone(data.data)
                error.innerText = "";

            }
        })

}
// display phone
const displayPhone = (phones) => {
    const phoneData20 = phones.slice(0, 20)
    const phoneArea = document.getElementById("phone-area")
    phoneArea.textContent = ""
    phoneData20.forEach(phone => {
        const div = document.createElement("div")
        div.classList.add("col-lg-4")
        div.classList.add("col-sm-12")
        div.classList.add("my-4")
        div.innerHTML = `
            <div class = "card p-3" style = "width: 20rem;" =>
                    <img src = "${phone.image}" class = "img-thumnail" alt = ".." >
                    <div class = "card-body" >
                        <h3 class = "card-title" > Name: ${phone.phone_name} </h3>
                        <h5 class = "card-text" > Brand: ${phone.brand} </h5>  
                        <button onclick = "phoneDetails('${phone.slug}')" class = "btn btn-primary px-4 py-2"> Details </button>  
                    </div>  
            </div>
        `
        phoneArea.appendChild(div)
    });
}
// phone details
const phoneDetails = (slugId) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${slugId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}
// display phone details
const displayDetails = (details) => {
    const detailsContainer = document.getElementById("details-container")
    detailsContainer.textContent = ""
    const div = document.createElement('div')
    div.classList.add("my-4")
    div.classList.add("shadow")
    div.classList.add("bg-light")
    div.classList.add("rounded")
    div.classList.add("p-5")
    div.innerHTML = `
            <img src = "${details.image}"
            class = "img-thumnail"
            alt = "">
            <h2 class = "my-2"> ${details.name} </h2>
            <h3>${details.releaseDate ? details.releaseDate:"No Release Date Found"}</h3>
            <h3 class = "my-2">MainFeatures: </h3>
            <ul>
                <li><span class="h6">ChipSet:</span>  ${details.mainFeatures.chipSet}</li>
                <li><span class ="h6">DisplaySize:</span>  ${details.mainFeatures.displaySize}</li>
                <li><span class ="h6">Memory:</span>  ${details.mainFeatures.memory}</li>
                <li><span class ="h6">Storage:</span> ${details.mainFeatures.storage}</li>
            </ul>
                <h4 class = "my-2"> Sensors: </h4>
                <p class= "d-inline me-2"> ${details.mainFeatures.sensors[0] ? details.mainFeatures.sensors[0]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[1] ? details.mainFeatures.sensors[1]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[2] ? details.mainFeatures.sensors[2]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[3] ? details.mainFeatures.sensors[3]:"" }</p>
                <p class="d-inline"> ${details.mainFeatures.sensors[4] ? details.mainFeatures.sensors[4]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[5] ? details.mainFeatures.sensors[5]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[6] ? details.mainFeatures.sensors[6]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[7] ? details.mainFeatures.sensors[7]:"" }</p>
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[8] ? details.mainFeatures.sensors[8]:"" }</p> 
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[9] ? details.mainFeatures.sensors[9]:"" }</p> 
                <p class="d-inline me-2"> ${details.mainFeatures.sensors[10] ? details.mainFeatures.sensors[10]:"" }</p> 
                <p class="d-inline"> ${details.mainFeatures.sensors[11] ? details.mainFeatures.sensors[11]:"" }</p> 
                <p class="d-inline"> ${details.mainFeatures.sensors[12] ? details.mainFeatures.sensors[12]:"" }</p> 
                <p class="d-inline"> ${details.mainFeatures.sensors[13] ? details.mainFeatures.sensors[13]:"" }</p> 
                <p class="d-inline"> ${details.mainFeatures.sensors[14] ? details.mainFeatures.sensors[14]:"" }</p> 
                <p class="d-inline"> ${details.mainFeatures.sensors[15] ? details.mainFeatures.sensors[15]:"" }</p>
            <h3 class = "my-2" > Others: </h3>
            <ul>
                <li><span class ="h6">Bluetooth:</span> ${details.others?.Bluetooth ? details.others?.Bluetooth: "not available"} </li> 
                <li> <span class = "h6"> GPS: </span> ${details.others?.GPS ? details.others?.GPS: "not available"} </li >
                <li> <span class = "h6"> NFC: </span> ${details.others?.NFC ? details.others?.NFC: "not available"} </li >
                <li><span class ="h6">Radio:</span> ${details.others?.Radio ? details.others?.Radio: "not available"} </li> 
                <li><span class ="h6">USB:</span> ${details.others?.USB ? details.others?.USB: "not available"} </li> 
                <li><span class ="h6">WLAN:</span> ${details.others?.WLAN ? details.others?.WLAN: "not available"} </li>
            </ul> 
    `
    detailsContainer.appendChild(div)
}