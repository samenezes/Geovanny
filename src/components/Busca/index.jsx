import React from 'react'

export default function index() {

function legenda(){
  fetch ('https://opentdb.com/api.php?amount=30&category=19').then(legendas=> legendas.json()
  .then(dados=>{

      var legenda1 = document.querySelector('#legenda1')
      var legenda2 = document.querySelector('#legenda2')

      legenda1.innerHTML = `${dados.results.category}`
      legenda2.innerHTML = `${dados.results.correct_answer}`

    

  }))
}

legenda()

  return (
    <div Onload={legenda()}>
      <section>
          <h1>APi de resposta</h1>
          <div>
             <p>Pergunta:</p> <figcaption id="legenda1">ola</figcaption>
              <p>Resposta:</p><figcaption id ="legenda2">ola</figcaption>
          </div>
      </section>
    </div>
  )
}
