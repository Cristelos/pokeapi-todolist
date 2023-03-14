// Primero hay que recuperar los elementos que tenemos en nuestra página, input, botón, lista y el campo que queramos hacer desaparecer

const input$$ = document.querySelector('input');
const btn$$ = document.querySelector('.btn-add')
const lista$$ = document.querySelector('.li-container')

//falta por seleccionar el elemento que vamos a borrar

//Una vez que los tengamos, tenemos que darle funcionalidad a los botones y crear un elemento li por cada texto introducido en el input

//Creamos un array para añadir los elementos que vamos a ir creando

const tareas = [];

// Vamos a crear una función que escuche el input, cree la lista y añada la p a una lista

const crearLista = (devuelve) => {

    //primero creamos una variable que nos dé el valor del input
    const crearTarea = input$$.value;
    if(crearTarea !== ""){

        //creamos un elemento li
        const li$$ = document.createElement('li');
        const p$$ =document.createElement('p');
        p$$.innerText = crearTarea;

        //creamos el botón de eliminar
        const btnElimina$$ = document.createElement('button');
        btnElimina$$.innerText = 'X';

        btnElimina$$.addEventListener('click', () =>{
            const index = tareas.indexOf(p$$);
            if(index !== -1){
                tareas.splice(index,1);
                lista$$.removeChild(li$$);
            }
        })
        

        li$$.appendChild(p$$);
        li$$.appendChild(btnElimina$$);
        lista$$.appendChild(li$$);
        tareas.push(p$$);

        input$$.value ='';
        
    }
}

function eliminar(){
    const tarea = this.parentNode;
    tarea.remove();
}

btn$$.addEventListener('click',crearLista, () => {
    div$$.innerHTML = '';
    tareas.length = 0;
});


