let myArray=[];
      listElement=document.querySelector('.lists');
      inputElement=document.querySelector('.input-list');
      dateElement=document.querySelector('.date-list');
      function makeList(){
            let val=inputElement.value;
            let dateVal=dateElement.value;
            myArray.push({name:val,
              date:dateVal});
            inputElement.value='';
            dateElement.value='';
            renderTodoList();
      }

      function renderTodoList(){
        //let todohtml='';
        let html='';
        myArray.forEach(function(arrayObject,index){
              let name=arrayObject.name;
              let date=arrayObject.date;
              html+=`<div>${name}</div>
               <div>${date}</div>
                <button class="del-button" onclick="
                  myArray.splice(${index},1);
                  renderTodoList();
                 ">
                Delete
              </button>`
        });
            listElement.innerHTML=html;
      }
