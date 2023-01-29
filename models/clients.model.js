const getAll = () => {
    return db.query('select * from clientes')
}
const getById = (clientId) => {
    return db.query('select * from clientes where idCliente = ?', [clientId]);
}

const create = ({ nombre, apellidos, direccion, telefono, email, dni }) => {
    return db.query('insert into clientes (nombre, apellidos, direccion, telefono, email, dni) VALUES (?,?,?,?,?,?)', [nombre, apellidos, direccion, telefono, email, dni]
    );
}

const update = (clientId, { nombre, apellidos, direccion, telefono, email, dni }) => {
    return db.query('update clientes set nombre = ?, apellidos = ?, direccion = ?, telefono = ?, email = ?, dni = ? where idCliente = ?', [nombre, apellidos, direccion, telefono, email, dni, clientId])

}

const deleteById = (clientId) => {
    return db.query = ('delete from clientes where idCliente = ?', [clientId])
}

module.exports = {
    getAll, getById, create, update, deleteById
}