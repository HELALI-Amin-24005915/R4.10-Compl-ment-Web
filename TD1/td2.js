
class C_ThermalSensor {
    constructor() {
        this.A_subscribers = [];
    }
    F_subscribe(O_observer) {
        this.A_subscribers.push(O_observer);
    }

    F_unsubscribe(O_observer) {
        this.A_subscribers = this.A_subscribers.filter(O_sub => O_sub !== O_observer);
    }

    F_notify(I_value) {
        for (let I_i = 0; I_i < this.A_subscribers.length; I_i++) {
            this.A_subscribers[I_i].F_update(I_value);
        }
    }
}

class C_RealTimeDisplay {
    constructor(S_elementId) {
        this.O_displayElement = document.getElementById(S_elementId);
    }

    F_update(I_data) {
        this.O_displayElement.textContent = I_data + " °C";
        if (I_data <= 0) {
            this.O_displayElement.className = "bordure_blue";
        } else if (I_data <= 20) {
            this.O_displayElement.className = "bordure_green";
        } else if (I_data <= 30) {
            this.O_displayElement.className = "bordure_orange";
        } else {
            this.O_displayElement.className = "bordure_red";
        }
    }
}

class C_History {
    constructor(S_tableId) {
        this.O_tableBody = document.getElementById(S_tableId);
        this.I_count = 0;
        this.I_maxItems = 20;
    }

    F_update(I_data) {
        if (this.I_count >= this.I_maxItems) {
            this.O_tableBody.innerHTML = "";
            this.I_count = 0;
        }

        const O_row = document.createElement("tr");
        const O_cell = document.createElement("td");

        O_cell.textContent = I_data + " °C";

        O_row.appendChild(O_cell);
        this.O_tableBody.appendChild(O_row);
        this.I_count++;
    }
}

class C_AlertManager {
    constructor(S_alertId) {
        this.O_alertMessage = document.getElementById(S_alertId);
    }

    F_update(I_data) {
        if (I_data < 0) {
            this.O_alertMessage.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            this.O_alertMessage.style.display = "block";
        } else if (I_data > 30) {
            this.O_alertMessage.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            this.O_alertMessage.style.display = "block";
        } else {
            this.O_alertMessage.textContent = "";
            this.O_alertMessage.style.display = "none";
        }
    }
}

const O_temperatureSensor = new C_ThermalSensor();
const O_realTimeDisplay = new C_RealTimeDisplay("affichage-temperature");
const O_history = new C_History("O_monTableau");
const O_alertManager = new C_AlertManager("affichage-message");

O_temperatureSensor.F_subscribe(O_realTimeDisplay);
O_temperatureSensor.F_subscribe(O_history);
O_temperatureSensor.F_subscribe(O_alertManager);

const I_min = -10;
const I_max = 40;
const I_maxItems = 20;
let I_count = 0;
let O_intervalId = null;

function F_startGeneration() {
    O_intervalId = setInterval(() => {
        const I_temperature = Math.floor(Math.random() * (I_max - I_min) + I_min);
        O_temperatureSensor.F_notify(I_temperature);
        I_count++;
        
        if (I_count >= I_maxItems) {
            clearInterval(O_intervalId);
            O_history.O_tableBody.innerHTML = "";
            I_count = 0;
            F_startGeneration();
        }
    }, 500);
}

F_startGeneration();
