//paso 1 creo una instacia de XmlhttpRequest
const xhr=new XMLHttpRequest();

//crear fragmento para cada registro traido de la api y poder mostarr enla web
const $fragmen=document.createDocumentFragment();

//obtengo el elemento del DOM que contendra el gragmento
const $xhr=document.getElementById('xhr');

//paso 2 asigno un evento a el objeto que se encargara de actuar cuando haya un susceso en el objeto xhr
xhr.addEventListener('readystatechange',(e)=>{
    //que quiero que haga cuando alla un cambio de estado

    //si la peticion no fue satisfactoria quiero que no haga nada
    if(xhr.readyState!==4) return; 

    //si el codigo de petición esta en un rango de 200 hasta 300 
    if (xhr.status>=200 && xhr.status<=300) {
        //la petición esta ok y debera mostrar lo que se trajo de la api

        //hacer que la peticion se no sea un string
        const json=JSON.parse(xhr.responseText);
        let $li;
        json.forEach(item => {
            $li=document.createElement('li');
            $li.innerHTML=item.name+' Email: ------------------------->'+item.email;
            $fragmen.appendChild($li);
        });
        //mostrar registros en el Dom
       
        $xhr.appendChild($fragmen);

        
    }else{
        console.log('Ocurrió un error');
    }
});

//paso 3 abro la petición
xhr.open('GET','https://jsonplaceholder.typicode.com/users');

//paso 4 enviar petición a la api
xhr.send();


