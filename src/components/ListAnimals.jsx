import React from 'react'
import CardPet from './CardPet';

function ListAnimals({ clients , setClientSelected,deleteClient}) {

    return (
        <div className='lg:w-3/5 md:w-1/2 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>{clients&&clients.length?"Listado Pacientes":"No Hay Pacientes"}</h2>
            <p className='text-xl my-5 text-center'>Administra tus {" "}
                <span className='text-indigo-600 font-bold text-center'> Pacientes y Citas</span>
            </p>
            {clients.map((clientMap) => {
                return(
                    <CardPet key={clientMap.id} client={clientMap} setClientSelected={setClientSelected} deleteClient={deleteClient}/>
                )
            })}

        </div>
    )
}

export default ListAnimals;