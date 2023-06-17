function select(connection, tabelName, dataIdentifier = {}) {
    return connection(tabelName)
        .select()
        .where(dataIdentifier);
}

function insert(connection, tableName, data) {
    return connection(tableName)
        .insert(data)
        .returning("*");
}

function update(connection, tableName, dataIdentifier, newData) {
    return connection(tableName)
        .update(newData)
        .where(dataIdentifier)
        .returning("*");
}

function deleteData(connection, tableName, dataIdentifier) {
    return connection(tableName)
        .delete()
        .where(dataIdentifier)
        .returning("*");
}

module.exports = {
    select,
    insert,
    update,
    deleteData,
}