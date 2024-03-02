import axios from "axios";

//objeto lambda que me permite obtener un  estudiante por su id
//axios ya viene incluido implicitamente un await
const consultarEstudiante = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${id}`).then(r => r.data);
    console.log(data);
    return data;
}

const insertar = async (body) => {
    const data = axios.post('http://localhost:8080/API/v1.0/Inscripcion/estudiantes', body).then(r => r.data);
    console.log(data);
}


export const consutarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}
