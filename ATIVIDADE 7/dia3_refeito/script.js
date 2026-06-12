function add(){
   const ele = document.getElementById("novo");

	ele.innerHTML = `<div class="card" style="width: 22rem;" aria-hidden="true">
            <img src="img/_vinicius_junior.png" class="card-img-top" alt="card-text Copa">
            
                <div class="card-body"> 
                    <h5 id="Nome" class="card-title card-text-glow">
                        <span class="card-text col-6"> ⚽ Nome Completo: Vinícius José Paixão de Oliveira Júnior  </span>
                        <span id="Rank" class="badge text-bg-secondary"> 🏃 Rank: 9,5 </span>
                    </h5>
                    <p class="card-text card-text-glow">
                        <span id="Data_Nas" class="card-text col-4"> 📅 Data de Nascimento: 12/07/2000 (25 anos) </span><br>
                        <span id="Alutra" class="card-text col-4"> 📏 Altura: 1,76 m </span><br>
                        <span id="Posição " class="card-text col-6"> 🏃 Posição: Ponta-esquerda / Atacante </span><br>
                    </p>

                
                </div>`	;
}