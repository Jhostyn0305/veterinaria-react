function CardPet({client,setClientSelected, deleteClient}) {
    const handleDelete=()=>{
        const response=confirm('Deseas eliminar el registro?');

        if(response){
            deleteClient(client.id)
        }
    }
    return (
        <div className='m-3 bg-white rounded-md shadow-xl py-12 px-5 '>
            <p className='font-bold mb-3 uppercase'>Nombre: {" "}
                <span className='font-normal normal-case'>{client.namePet}</span>
            </p>
            <p className='font-bold mb-3 uppercase'>Propietario: {" "}
                <span className='font-normal normal-case'>{client.nameUser}</span>
            </p>
            <p className='font-bold mb-3 uppercase'>Email: {" "}
                <span className='font-normal normal-case'>{client.emailUser}</span>
            </p>
            <p className='font-bold mb-3 uppercase'>Contacto: {" "}
                <span className='font-normal normal-case'>{client.phoneUser}</span>
            </p>
            <p className='font-bold mb-3 uppercase'>Cita: {" "}
                <span className='font-normal normal-case'>{client.datePet}</span>
            </p>
            <p className='font-bold mb-3 uppercase'>Síntomas: {" "}
                <span className='font-normal normal-case'>{client.injurePet}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="m-3 p-2 bg-indigo-600 hover:bg-indigo-800 rounded-md text-white uppercase font-bold" onClick={()=>setClientSelected(client)}>Editar</button>
                <button type="button" className="m-3 p-2 bg-red-600 hover:bg-red-800 rounded-md text-white uppercase font-bold" onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default CardPet;