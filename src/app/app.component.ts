import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numeroInstrucoes:number = 0;
  listaInstrucoes:{index:string,color:string}[][] = [];
  baseInstrucoes:{index:string,color:string}[] = [];
  tempoTotal:string = '-';
  tempoCiclo:number = 0;
  constructor() { }

  ngOnInit(): void {}

  iniciarSimulacao(){
    this.listaInstrucoes = [];
    this.runTime();
    this.tempoTotal = ((this.numeroInstrucoes+4)*this.tempoCiclo).toString()+'ns';
  }

  getListInstrucoes(){
    let listBaseTodasIntrucoes:{index:string,color:string}[][] = []

    for(let i = 0; i<5; i++){
      listBaseTodasIntrucoes[i] = [{index:'  ',color:'background-color: white;'},{index:'  ',color:'background-color: white;'},{index:'  ',color:'background-color: white;'},{index:'  ',color:'background-color: white;'}]
      this.listaInstrucoes[i] = [];
    }
    for(let i=Number(this.numeroInstrucoes);i>=1;i--){
      const color = this.getRandomColor();
      listBaseTodasIntrucoes[0].splice(4,0,{index:i.toString(),color:'background-color:'+color});
      listBaseTodasIntrucoes[1].splice(3,0,{index:i.toString(),color:'background-color:'+color});
      listBaseTodasIntrucoes[2].splice(2,0,{index:i.toString(),color:'background-color:'+color});
      listBaseTodasIntrucoes[3].splice(1,0,{index:i.toString(),color:'background-color:'+color});
      listBaseTodasIntrucoes[4].splice(0,0,{index:i.toString(),color:'background-color:'+color});

    }
    
    return listBaseTodasIntrucoes.slice(0).reverse();
    
  }
  runTime(){
    let listBaseTodasIntrucoes:{index:string,color:string}[][] = this.getListInstrucoes();
    for(let i=0; i<Number(this.numeroInstrucoes)+4;i++){

      setTimeout(()=> {

        this.listaInstrucoes[0].push(listBaseTodasIntrucoes[0][i])
        this.listaInstrucoes[1].push(listBaseTodasIntrucoes[1][i])
        this.listaInstrucoes[2].push(listBaseTodasIntrucoes[2][i])
        this.listaInstrucoes[3].push(listBaseTodasIntrucoes[3][i])
        this.listaInstrucoes[4].push(listBaseTodasIntrucoes[4][i])

      }, i*1000);  
      
    }
  }

  getRandomColor() {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
  }

}
