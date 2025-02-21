window.addEventListener("DOMContentLoaded", () => {
    class ButtonHandler {
        constructor(buttonElementId){
            this.buttonElement = document.getElementById(buttonElementId);
            this.buttonElement.addEventListener("click", this);
            document.getElementById("root").appendChild(this.buttonElement);
        }
        handleEvent(event){
            fetch("https://www.surf-forecast.com/osm/points_of_interest.json?bbox=-10.3436279296875,53.80146187935565,-9.830017089843752,54.14313233476031&types=locations,sea_temp,buoys,metars&current_location=Keel&zoom=10")
                .then(response => {
                    if (!response.ok) {
                        console.error('Network response was not ok');
                        return;
                    }
                    return response.json().catch(error => console.error("JSON parsing error", error));
                })
                .then(data => {
                    if (data) {
                        console.log(data);
                    }
                })
                .catch(error => console.error(error));
        }
    }
    const buttonhandler = new ButtonHandler("Surf-button");
});