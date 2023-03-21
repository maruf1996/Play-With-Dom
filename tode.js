let counter=0;
document.getElementById('input-btn').addEventListener('click',function(){
    counter++;
    const inputValue=document.getElementById('input-value').value;
    // console.log(inputValue)
    
    const container=document.getElementById('content-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <th scope="row">${counter}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary ms-1">Edit</button>
    <button class="btn btn-danger ms-1 delete-btn">Delete</button>
    </td>
    `;
    container.appendChild(tr);
    document.getElementById('input-value').value='';

    const deleteBtn = document.getElementsByClassName("delete-btn");
    for (let button of deleteBtn) {
      button.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.style.display = "none";
        //   console.log(event.target.parentNode.parentNode);
      });
    }
})