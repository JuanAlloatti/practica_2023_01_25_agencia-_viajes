const getAll = () => {
    return db.query('select * from clientes_viajes')
}

const hacerReserva = (clientId, viajeId) => {
    return db.query = ('insert into clientes_viajes ( clientes_idClientes, viajes_idViaje) VALUES (?,?)', [clientId, viajeId])
}

module.exports = {
    getAll, hacerReserva
}