import { useState, useEffect } from "react";
import FormError from "./FormError";
function Form({ clients, setClients, clientSelected,setClientSelected }) {
    const [namePet, setNamePet] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const [datePet, setDatePet] = useState("");
    const [injurePet, setInjurePet] = useState("");

    //Validador
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(clientSelected).length > 0) {
            setNamePet(clientSelected.namePet);
            setNameUser(clientSelected.nameUser);
            setEmailUser(clientSelected.emailUser);
            setPhoneUser(clientSelected.phoneUser);
            setDatePet(clientSelected.datePet);
            setInjurePet(clientSelected.injurePet);
        }
    }, [clientSelected])


    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const currentDate = Date.now().toString(36);
        return random + currentDate;
    }


    const handleSubmmit = (e) => {
        e.preventDefault();
        //Validación del formulario
        if ([namePet, nameUser, emailUser, phoneUser, datePet, injurePet].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        const objClient = {

            namePet, nameUser, emailUser, phoneUser, datePet, injurePet
        }

        if (clientSelected.id) {
            //Editando registro
            objClient.id=clientSelected.id;
            const clientsUpdated=clients.map(clientState=>clientState.id===clientSelected.id?objClient:clientState);
            setClients(clientsUpdated);
            setClientSelected({});

        } else {
            //Nuevo resgistro
            objClient.id=generarId();
            setClients([...clients, objClient])
        }



        //Reiniciar el form
        setNamePet('');
        setNameUser('');
        setEmailUser('');
        setPhoneUser('');
        setDatePet('');
        setInjurePet('');
    }


    return (
        <div className="lg:w-2/5 md:w-1/2">
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className="my-5 text-lg text-center">Registrar Pacientes y {" "} <span className="text-indigo-600 font-bold">Administrarlos</span></p>

            <form onSubmit={handleSubmmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >
                {error && <FormError messageError={"Todos los campos son obligatorios"} />}
                <div className="my-3">
                    <label htmlFor="namePet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input id="namePet" className="border-2 rounded-md w-full p-2 " type="text" placeholder="Nombre de la Mascota" value={namePet} onChange={(e) => setNamePet(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="nameUser" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input id="nameUser" className="border-2 rounded-md w-full p-2 " type="text" placeholder="Nombre de la Propietario" value={nameUser} onChange={(e) => setNameUser(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="emailUser" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
                    <input id="emailUser" className="border-2 rounded-md w-full p-2 " type="email" placeholder="Email del Propietario" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="phoneUser" className="block text-gray-700 uppercase font-bold">Contacto Propietario</label>
                    <input id="phoneUser" className="border-2 rounded-md w-full p-2 " type="tel" placeholder="Contacto del Propietario" value={phoneUser} onChange={(e) => setPhoneUser(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="datePet" className="block text-gray-700 uppercase font-bold">Cita</label>
                    <input id="datePet" className="border-2 rounded-md w-full p-2" type="date" value={datePet} onChange={(e) => setDatePet(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="injurePet" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea id="injurePet" placeholder="Describe los Síntomas " className="border-2 rounded-md w-full p-2" rows="3" value={injurePet} onChange={(e) => setInjurePet(e.target.value)} />
                </div>

                <input type="submit" className="bg-indigo-600 w-full font-bold p-3 rounded-md uppercase text-white hover:bg-indigo-800 cursor-pointer" value={clientSelected.id ? "Editar Paciente" : "Agregar Paciente"} />
            </form>
        </div>
    )
}

export default Form;

