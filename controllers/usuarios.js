const { response, request } = require('express')


const usuariosGet = (req = request, res = response) =>{

    const {q, nombre = "No name", page = 1, limit = 10, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        page,
        limit,
        apikey
    });
};

const usuariosPost = (req = request, res = response) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: 'put API - controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req = request, res = response) =>{

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPatch = (req = request, res = response) =>{
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}