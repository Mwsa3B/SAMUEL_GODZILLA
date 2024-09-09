document.addEventListener("DOMContentLoaded", function() {
    const filmes = [
        { title: "Godzilla (1954)", description: "O primeiro filme que apresentou Godzilla ao mundo." },
        { title: "Godzilla vs. King Ghidorah (1991)", description: "Uma batalha épica entre Godzilla e um de seus maiores rivais." },
        { title: "Godzilla (2014)", description: "A revitalização de Godzilla para uma nova geração de fãs." },
        { title: "Godzilla: King of the Monsters (2019)", description: "Godzilla enfrenta Mothra, Rodan e King Ghidorah." },
    ];

    const listaFilmes = document.getElementById("lista-filmes");

    filmes.forEach(filme => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${filme.title}</strong>: ${filme.description}`;
        listaFilmes.appendChild(listItem);
    });
});
