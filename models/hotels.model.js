const getAll = () => {
    return db.query('select * from hoteles')
}

const getById = (hotelId) => {
    return db.query('select * from hoteles where idHotel = ?', [hotelId]);
}

const create = ({ nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {
    return db.query('insert into hoteles (nombre, direccion, ciudad, estrellas, descripcion, tarifa) VALUES (?,?,?,?,?,?)', [nombre, direccion,ciudad, estrellas, descripcion, tarifa]
    );
}

const update = (idHotel, { nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {
    return db.query('update clientes set nombre = ?, direccion = ?, ciudad = ?, estrellas = ?, descripcion = ?, tarifa = ? where idHotel = ?', [nombre, direccion,ciudad, estrellas, descripcion, tarifa, idHotel])
}

const deleteById = (idHotel) => {
    return db.query = ('delete from clientes where idHotel = ?', [idHotel])
}

module.exports = {
    getAll, getById, create, update, deleteById
}