//nel terminale di VS mi da un errore che non ho capito come gestire ma centra con la tipizzazzione del documento per quanto riguarda HTML//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//////////////////////////////////////////////////////////////////////////////////
var User = /** @class */ (function () {
    function User(_credito, _ncall) {
        this.credito = _credito;
        this.ncall = _ncall;
    }
    User.prototype.recharge = function (euro) {
        if (euro > 0) {
            console.log("Ricarica effettuata con successo! \n\nHai effettuato una ricarica di: ".concat(euro, " euro"));
            this.credito += euro;
        }
        else if (this.credito < 0 && euro < this.credito) {
            console.log("Sei ancora sotto di: ".concat(Math.abs(this.credito + euro), " euro"));
            this.credito += euro;
        }
        else if (this.credito === 0 && euro === 0) {
            console.log("Non hai effettuato nessuna ricarica \n");
        }
    };
    User.prototype.call = function (min, sec) {
        console.log("Durata conversazione: ".concat(min, "m e ").concat(sec, "s"));
        if (min >= 1) {
            console.log("Credito attuale: ".concat(this.credito - 0.2 * min, " euro"));
        }
    };
    //l'ho modificata volontariamente,forse non potevo farlo...//
    User.prototype.n404 = function () {
        if (this.credito >= 0) {
            return "Credito: ".concat(this.credito, " euro");
        }
        else if (this.credito < 0 && this.credito >= -10) {
            return "Ricarica insufficente,credito in rosso di: ".concat(this.credito, " euro");
        }
        else if (this.credito < -10) {
            return "Sei troppo in rosso";
        }
    };
    User.prototype.getN_Call = function () {
        return this.ncall;
    };
    User.prototype.reset = function () {
        this.ncall = 0;
    };
    return User;
}());
//////////////////////////////////////////////////////////////////////////////////
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1(_credito, _ncall) {
        return _super.call(this, _credito, _ncall) || this;
    }
    return User1;
}(User));
//////////////////////////////////////////////////////////////////////////////////
var User2 = /** @class */ (function (_super) {
    __extends(User2, _super);
    function User2(_credito, _ncall) {
        return _super.call(this, _credito, _ncall) || this;
    }
    return User2;
}(User));
//////////////////////////////////////////////////////////////////////////////////
var User3 = /** @class */ (function (_super) {
    __extends(User3, _super);
    function User3(_credito, _ncall) {
        return _super.call(this, _credito, _ncall) || this;
    }
    return User3;
}(User));
//////////////////////////////////////////////////////////////////////////////////
var tempo;
var cronometro = document.getElementById("cronometro");
//////////////////////////////////////////////////////////////////////////////////
var persona = new User1(10, 1);
console.log("\n------------User1--------------\n");
persona.recharge(20);
console.log("".concat(persona.n404(), " \nNumero chiamate: ").concat(persona.getN_Call()));
persona.reset();
console.log("Contatore chiamate: ".concat(persona.getN_Call(), " \n\n"));
//////////////////////////////////////////////////////////////////////////////////
var persona2 = new User2(20, 5);
console.log("\n------------User2--------------\n");
persona2.recharge(15);
console.log("".concat(persona2.n404(), " \nNumero chiamate: ").concat(persona2.getN_Call()));
persona2.reset();
console.log("Contatore chiamate: ".concat(persona2.getN_Call(), " \n\n"));
//////////////////////////////////////////////////////////////////////////////////
var persona3 = new User3(30, 0);
function credito(x) {
    if (x === void 0) { x = 10; }
    console.log("\n------------User3--------------\n");
    persona3.recharge(x);
}
function dati() {
    console.log("\n------------User3--------------\n");
    console.log("Credito: ".concat(persona3.credito, " euro"));
    console.log("".concat(persona3.n404(), " \nNumero chiamate: ").concat(persona3.getN_Call()));
    console.log("Contatore chiamate: ".concat(persona3.getN_Call(), " \n\n"));
}
function reset() {
    console.log("\n------------User3--------------\n");
    persona3.reset();
    console.log("Le chiamate sono state azzerate, controlla i dati");
}
function crono() {
    console.log("\n------------User3--------------\n");
    var h = 0;
    var min = 0;
    var sec = 0;
    tempo = setInterval(function () {
        cronometro.innerHTML = "Tempo trascorso: ".concat(min, " min ").concat(sec, " sec");
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            h++, (min = 0);
        }
    }, 1000);
    console.log("Numero chiamate:".concat(++persona3.ncall));
    var stop = document.getElementById("stop");
    stop === null || stop === void 0 ? void 0 : stop.addEventListener("click", function () {
        clearInterval(tempo);
        persona3.call(min, sec);
        cronometro.innerHTML = " ";
    });
}
