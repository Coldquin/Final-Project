

window.addEventListener("DOMContentLoaded", () => {
    class ButtonHandler {
        constructor(buttonElementId){
            this.buttonElement = document.getElementById(buttonElementId);
            this.buttonElement.addEventListener("click", this);
            document.getElementById("root").appendChild(this.buttonElement);
        }
        handleEvent(event){
            const lat = 53.975797;
            const lng = -10.083917;
            const params = 'windSpeed';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '0558e164-f007-11ef-b19c-0242ac130003-0558e2ae-f007-11ef-b19c-0242ac130003'
  }

                }
            )
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