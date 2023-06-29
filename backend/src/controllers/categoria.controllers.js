import getConnection from "../db/database.js";

const getcategorias = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

const  addCategories = async (req, res)=>{
    try {
        const{CategoriaNombre,Descripcion,Imagen} =req.body;

        const categories = {
            CategoriaNombre,
            Descripcion,
            Imagen
        };
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?",categories);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const getcategoria = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias WHERE CategoriaID = ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

const deletecategoria = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

const  updateCategories = async (req, res)=>{
    try {
        const {id} = req.params;
        const{CategoriaNombre,Descripcion,Imagen} =req.body;
        const categories = {
            CategoriaNombre,
            Descripcion,
            Imagen
        };
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[categories, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methodsHTTP = {
    getcategorias,
    addCategories,
    getcategoria,
    deletecategoria,
    updateCategories
}

