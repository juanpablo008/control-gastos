import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
      
      {gastos.map( gasto => {
        <Gasto
          hey={gasto.id}
          gasto={gasto}
        />
      })}
    </div>
  )
}

export default ListadoGastos