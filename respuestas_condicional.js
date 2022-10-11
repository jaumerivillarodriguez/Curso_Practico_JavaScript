
let tipoSuscripcion = function (tipo){
    if (tipo=="Free"){
        return "Solo puedes tomar los cursos gratis"
    }
    else if (tipo=="Basic") {
        return "Puedes tomar casi todos los cursos de Platzi durante un mes"
    }

    else if (tipo=="Expert") {
        return "Puedes tomar casi todos los cursos de Platzi durante un año"
    }
    else if (tipo=="ExpertDuo") {
        return "Tú y alguin pueden tomar Todos los cursos de Platzi durante un año"
    }
    else {
        return "No has indicado bien el tipo de suscripción"
    }
}

tipoSuscripcion("Free");
tipoSuscripcion("Basic");