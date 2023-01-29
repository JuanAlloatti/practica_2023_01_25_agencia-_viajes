const getAll = () => {
    return db.query('select * from viajes')
}

const getById = (viajeId) => {
    return db.query('select * from viajes where idViaje = ?', [viajeId]);
}

const create = ({ fechaSalida, fechaVuelta, idVueloIda, idVueloVuelta, hotelId }) => {
    return db.query('insert into viajes (fecha_salida,fecha_vuelta,idVueloIda,idVueloVuelta,hotelId) VALUES (?,?,?,?,?)', [fechaSalida, fechaVuelta, idVueloIda, idVueloVuelta, hotelId])
}

const update = (viajeId, { fechaSalida, fechaVuelta, idVueloIda, idVueloVuelta, hotelId }) => {
    return db.query('update viajes set fecha_salida = ?, fecha_vuelta = ?, idVueloIda = ? , idVueloVuelta = ?, hotelId = ? where idViaje = ?', [fechaSalida, fechaVuelta, idVueloIda, idVueloVuelta, hotelId, viajeId])
}

const deleteById = (viajeId) => {
    return db.query = ('delete from viajes where idViaje = ?', [viajeId])
}

module.exports = {
    getAll, getById, create, update, deleteById
}