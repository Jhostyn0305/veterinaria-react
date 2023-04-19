import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListAnimals from "./components/ListAnimals"
function App() {
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected] = useState({});

  const deleteClient=(id)=>{
    const clientsDeleted=clients.filter(pet=>pet.id!==id);
    setClients(clientsDeleted);
  }

  return (

    <div className="container mx-3 mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form clients={clients} setClients={setClients} clientSelected={clientSelected} setClientSelected={setClientSelected}/>
        <ListAnimals clients={clients} setClientSelected={setClientSelected} deleteClient={deleteClient} />
      </div>
    </div>

  )
}

export default App
