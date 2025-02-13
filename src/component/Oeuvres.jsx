import PropTypes from "prop-types";

function Oeuvres({selectionOeuvre}) {

    const allOeuvres = [
                            {index: 1 ,img : "/assets/image/IMG_0003.jpg", "dataDescription" : "Aquarelle montagnes abstraites, d'après modèle", "typeOeuvre" : "peinture"},
                            {index: 2 ,img : "/assets/image/IMG_0006.jpg", "dataDescription" : "Pinceau brosse à sec, acrylique format A6", "typeOeuvre" : "peinture"},
                            {index: 3 ,img : "/assets/image/IMG_0025.jpg", "dataDescription" : "Mésange à l'aquarelle, d'après photo", "typeOeuvre" : "peinture"},
                            {index: 4 ,img : "/assets/image/IMG_0029.jpg", "dataDescription" : "Aquarelle et encre de Chine, d'après photo style semi réaliste", "typeOeuvre" : "peinture"},
                            {index: 5 ,img : "/assets/image/IMG_0032.jpg", "dataDescription" : "Aquarelle, d'après photo", "typeOeuvre" : "peinture"},
                            {index: 6 ,img : "/assets/image/IMG_0033.jpg", "dataDescription" : "Peinture montagnes abstraites, d'après modèle", "typeOeuvre" : "peinture"},
                            {index: 7 ,img : "/assets/image/IMG_0034.jpg", "dataDescription" : "Aquarelle et crayon à papier, d'après photo", "typeOeuvre" : "peinture"},
                            {index: 8 ,img : "/assets/image/IMG_0035.jpg", "dataDescription" : "Aquarelle et encre de Chine, d'après photo", "typeOeuvre" : "peinture"},
                            {index: 9 ,img : "/assets/image/IMG_0039.jpg", "dataDescription" : "Magnifique peinture", "typeOeuvre" : "peinture"},
                            {index: 10 ,img : "/assets/image/sculpture1.jpg", "dataDescription" : "Magnifique sculpture", "typeOeuvre" : "sculpture"},
                            {index: 11 ,img : "/assets/image/sculpture2.jpg", "dataDescription" : "Magnifique sculpture", "typeOeuvre" : "sculpture"},
                        ]
    let OeuvresFiltrees;

    if (selectionOeuvre) {
        OeuvresFiltrees = allOeuvres.filter((oeuvre) => oeuvre.typeOeuvre === selectionOeuvre);
    } else {
        OeuvresFiltrees = allOeuvres;
    }

    return (
        <section className="grid">
            {OeuvresFiltrees.map(element => (
                <div className="containerImg" data-description = {element.dataDescription} key={element.index}>
                <img src={element.img} alt="non" /></div>
            ))}
        </section>
    )
}

Oeuvres.propTypes = {
    selectionOeuvre : PropTypes.string,
}

export default Oeuvres;