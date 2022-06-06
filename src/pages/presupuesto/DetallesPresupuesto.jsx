import React from 'react'
import { useState, useEffect} from "react"
import { detallesPresupuestoService, borrarPresupuestoService} from "../../services/presupuestos.services.js";
import {useParams, useNavigate, Link} from "react-router-dom"


function DetallesPresupuesto() {


    const {id} = useParams()
    const navigate = useNavigate()

    const [ presupuestoDetalles, setPresupuestoDetalles ] = useState(null)

    
    useEffect(() => {
        detallesPresupuesto()
    }, [])

    const detallesPresupuesto = async () => {
        try {
            const response = await detallesPresupuestoService(id)
            setPresupuestoDetalles(response.data)
        } catch (error) {
            navigate("/error")            
        }
    }

    const handleDelete = async () => {
        try {
            await borrarPresupuestoService(id)
            navigate(`/presupuestos/${id}`)
        } catch (error) {
            
        }
    }

    if (presupuestoDetalles === null ) {
        return <h3>...Cargando</h3>
    }

  return (
    <div>
      <h3>Detalles del Presupuesto</h3>

      <h4>Servicio: {presupuestoDetalles.direccion}</h4>      
      <button onClick={handleDelete}>Borrar</button>
      <Link to={`/presupuestos/editar/${id}`}><button>Editar</button></Link>
      
    </div>
  )
}

export default DetallesPresupuesto

