const indexddb =  window.indexedDB;

let db;

const conexion = indexddb.open('MiAgua',2);

conexion.onsuccess = () => {
    db = conexion.result
    console.log('Base de datos abierta', db)
}

conexion.onupgradeneeded = (e) => {
    db = e.target.result
    console.log("Base de datos creado", db)
    const coleccionObjetos = db.createObjectStore('usuarios',{
        keyPath: 'clave'
    })
}

conexion.onerror = (error) => {
    console.log("Error", error);
}

const agregar = (info)=>{
    const trasaccion = db.transaction(['usuarios'],'readwrite')
    const coleccionObjetos = trasaccion.objectStore('usuarios')
    const conexion = coleccionObjetos.add(data) 
}

const obtener = (clave)=>{
    const trasaccion = db.transaction(['usuarios'],'readonly')
    const coleccionObjetos = trasaccion.objectStore('usuarios')
    const conexion = coleccionObjetos.get(clave) 

    conexion.onsuccess = (e) => {
        console.log(conexion.result);
    }
}

const actualizar = ()=>{

}

const eliminar = ()=>{

}

const consultar = ()=>{
    const trasaccion = db.transaction(['usuarios'],'readonly')
    const coleccionObjetos = trasaccion.objectStore('usuarios')
    const conexion = coleccionObjetos.openCursor()
    
    conexion.onsuccess = (e) => {
        const cursor = e.target.result
        if(cursor){
            console.log('Lista de usuarios')
            console.log(cursor.value)
        }else{
            console.log('No hay usuarios en la lista');
        }
    }
}