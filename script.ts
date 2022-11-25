//nel terminale di VS mi da un errore che non ho capito come gestire ma centra con la tipizzazzione del documento per quanto riguarda HTML//


//////////////////////////////////////////////////////////////////////////////////


interface Call {
  credito: number;
  ncall: number;

  recharge(euro: number): void;
  call(min: number, sec: number): void;
  n404(): number | string;
  getN_Call(): number;
  reset(): void;
}

//////////////////////////////////////////////////////////////////////////////////

class User implements Call {
  public credito: number;
  public ncall: number;

  constructor(_credito: number, _ncall: number) {
    this.credito = _credito;
    this.ncall = _ncall;
  }

  public recharge(euro: number): void {
    if (euro > 0) {
      console.log(
        `Ricarica effettuata con successo! \n\nHai effettuato una ricarica di: ${euro} euro`
      );
      this.credito += euro;
    } else if (this.credito < 0 && euro < this.credito) {
      console.log(`Sei ancora sotto di: ${Math.abs(this.credito + euro)} euro`);
      this.credito += euro;
    } else if (this.credito === 0 && euro === 0) {
      console.log(`Non hai effettuato nessuna ricarica \n`);
    }
  }

  public call(min: number, sec: number): void {
    console.log(`Durata conversazione: ${min}m e ${sec}s`);
    if (min >= 1) {
      console.log(`Credito attuale: ${this.credito - 0.2 * min} euro`);
    }
  }
  

  //l'ho modificata volontariamente,forse non potevo farlo...//
  public n404(): any {
    if (this.credito >= 0) {
      return `Credito: ${this.credito} euro`;
    } else if (this.credito < 0 && this.credito >= -10) {
      return `Ricarica insufficente,credito in rosso di: ${this.credito} euro`;
    } else if (this.credito < -10) {
      return "Sei troppo in rosso";
    }
  }

  public getN_Call(): number {
    return this.ncall;
  }

  public reset(): void {
    this.ncall = 0;
  }
}

//////////////////////////////////////////////////////////////////////////////////


class User1 extends User {
  constructor(_credito: number, _ncall: number) {
    super(_credito, _ncall);
  }
}


//////////////////////////////////////////////////////////////////////////////////


class User2 extends User {
  constructor(_credito: number, _ncall: number) {
    super(_credito, _ncall);
  }
}


//////////////////////////////////////////////////////////////////////////////////


class User3 extends User {
  constructor(_credito: number, _ncall: number) {
    super(_credito, _ncall);
  }
}

//////////////////////////////////////////////////////////////////////////////////


let tempo: any;
let cronometro: any = document.getElementById("cronometro");

//////////////////////////////////////////////////////////////////////////////////


let persona = new User1(10, 1);
console.log(`\n------------User1--------------\n`);
persona.recharge(20);
console.log(`${persona.n404()} \nNumero chiamate: ${persona.getN_Call()}`);
persona.reset();
console.log(`Contatore chiamate: ${persona.getN_Call()} \n\n`);

//////////////////////////////////////////////////////////////////////////////////


let persona2 = new User2(20, 5);
console.log(`\n------------User2--------------\n`);
persona2.recharge(15);
console.log(`${persona2.n404()} \nNumero chiamate: ${persona2.getN_Call()}`);
persona2.reset();
console.log(`Contatore chiamate: ${persona2.getN_Call()} \n\n`);

//////////////////////////////////////////////////////////////////////////////////


let persona3 = new User3(30, 0);
function credito(x: number = 10) {
  console.log(`\n------------User3--------------\n`);
  persona3.recharge(x);
}  

function dati (){
  console.log(`\n------------User3--------------\n`);
  console.log(`Credito: ${persona3.credito} euro`);
  console.log(`${persona3.n404()} \nNumero chiamate: ${persona3.getN_Call()}`);
  console.log(`Contatore chiamate: ${persona3.getN_Call()} \n\n`);
}

function reset (){
  console.log(`\n------------User3--------------\n`);
  persona3.reset();
  console.log(`Le chiamate sono state azzerate, controlla i dati`);
}


function crono(): any {
  console.log(`\n------------User3--------------\n`);

  let h = 0;
  let min = 0;
  let sec = 0;

  tempo = setInterval(function (): any {
    cronometro.innerHTML = `Tempo trascorso: ${min} min ${sec} sec`;
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      h++, (min = 0);
    }
  }, 1000);

  console.log(`Numero chiamate:${++persona3.ncall}`);

  let stop = document.getElementById("stop");
  stop?.addEventListener("click", () => {
    clearInterval(tempo);
    persona3.call(min, sec);
    cronometro.innerHTML = ` `;
  });
}
