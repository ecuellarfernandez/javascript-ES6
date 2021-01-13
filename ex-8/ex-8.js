// Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions), i que la taula de multiplicar la mostri en una taula HTML
const form_html = document.getElementById('numbersForm');
    const form_number_1 = document.getElementById('numberToMultiply');
    const form_number_2 = document.getElementById('multiplier');

    let table = localStorage.getItem('table') || '{}';
        table = JSON.parse(table);
        
const table_html = document.getElementById('table');
    const tableHeading = document.getElementById('tableHeading');
const delete_html = document.getElementById('deleteButton');
    
    // Validation
    const inputValidation = item=> isNaN(item) || item < 1 || item > 10 ? true : false;

    // New table
    form_html.addEventListener('submit', e=>{
        e.preventDefault();
        let num1 = parseInt(form_number_1.value);
        let num2 = parseInt(form_number_2.value);
        // Validate fields
       if(inputValidation(num1)) form_number_1.classList.add('is-invalid');
       if(inputValidation(num2)) form_number_2.classList.add('is-invalid');
       if(inputValidation(num1) || inputValidation(num2)) return message('The numbers must be range 1 to 10', 'warning');
       let newTable = {
           numberToMultiply: num1,
           multiplier: num2
       }
       table = newTable;
       renderTable();
       form_html.reset();
    });
        form_html.addEventListener('keyup', e=>{
            if(e.target.classList.contains('form-control') && e.target.value != ''){
                e.target.classList.remove('is-invalid');
            }
        });

    // Save in localStorage
    const saveTable = ()=> localStorage.setItem('table', JSON.stringify(table));

    // Render table
    const renderTable = ()=>{
        const num1 = table['numberToMultiply'];
        const num2 = table['multiplier'];
        // if user change the obj
        // if(num1>10 || num2>10) return console.warn(`The numbers must be range 1 to 10, please complete the fields correctly. numberToMultiply: ${num1} multiplier: ${num2}`);
        saveTable();
        table_html.innerHTML = '';

        tableHeading.innerHTML = `Table from ${num1} to ${num2}`;

        for(let i = 1; i<=num2; i++){
            let html = document.createElement('LI');
            html.appendChild(document.createTextNode(`${num1}X${i}=${num1*i}`))
            table_html.appendChild(html);
        }
        message('Table rendered', 'success');
    }
    
    // Object empty
    const objValidation = obj=> Object.keys(obj).length != 0 ? true : false;

    // Render table
    if(objValidation(table)){
        renderTable();
    }
    // delete button
    delete_html.addEventListener('click', ()=>{
        if(objValidation(table)){
            table = {};
            saveTable();
            table_html.innerHTML = '';
            tableHeading.innerHTML = '';
            message('Table deleted', 'danger')
        }
    });

    // Messages
    function message(message, cssClass){
        let div = document.createElement('DIV');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));

        document.getElementById('messages').append(div);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },1000)
    }

