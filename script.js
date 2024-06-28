//1.avere un elenco task da compiere
//2.ciclare l'elenco task e creare un li per ogni task
//3.al click del li inserire o disinserire la classe done
//4.al click dell' icona, rimuovere il task solo se la classe done è presente, altrimenti riportare un messaggio d'errore
//5.scrivere il task nell'input e al click del button(o con enter) aggiungere il task in cima all'elenco e svuotare l'input
//6.verifica la lunghezza minima del nuovo task(se minore di 5 caratteri, visualizza un messaggio d'errore)
//se l'elenco è vuoto mostrare l'h3 con il messaggio 'Hai concluso task da completare 👼'

const { createApp } = Vue;

createApp({
  data(){
    return{
      logo: 'logo.png',
      taskList: [
        {
          text: 'Fare la spesa',
          done: false,
          count: 1
        },
        {
          text: 'Pulire la cucina',
          done: false,
          count: 1
        },
        {
          text: 'Andare in palestra',
          done: true,
          count: 1
        }
      ],
      msgErr: '',
      newTask: '',
      controlBadge: null
    }
  },
  mounted(){

  },
  methods:{
    addTask(){
      this.msgErr = '';
      if (this.newTask.length < 5) {
        this.msgErr = 'Il task deve avere almeno 5 caratteri'
        this.newTask = '';
      } else {
        //controllo se il task esiste: uso una variabile locale e gli assegno un arrow function che con col metodo find cerca all'interno dell'array un task.text che corrisponda a ciò che abbiamo scritto nell'input
        this.controlBadge = this.taskList.find(task => task.text === this.newTask);
        //se lo trova allora incrementa il count di 1
        if (this.controlBadge) {
         this.incrementBadge(); 
        }else{
        //altrimenti:
        //il metodo unshift aggiunge un elemento in testa all'array
          this.taskList.unshift({
            text: this.newTask,
            done: false,
            count: 1
          });
        }
        this.newTask = '';
      }  
    },
    deleteTask(index){
      this.msgErr = '';
      if (this.taskList[index].done) {
        this.taskList.splice(index, 1)
      } else {
        this.msgErr = 'Sbarra la task per rimuoverla'
      }        
    },
    incrementBadge(){
      if(this.controlBadge){
       this.controlBadge.count++
      }
    },
    decrementBadge(){
      if(this.controlBadge&&this.controlBadge.count > 1){
        this.controlBadge.count--
      }
    }  
  }
}).mount('#app')