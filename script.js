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
          done: false
        },
        {
          text: 'Pulire la cucina',
          done: false
        },
        {
          text: 'Andare in palestra',
          done: true
        }
      ],
      msgErr: '',
    }
  },
  mounted(){

  },
  methods:{

  }
}).mount('#app')