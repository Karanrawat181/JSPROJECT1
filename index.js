
const taskContainer= document.querySelector(".task__container");
console.log(taskContainer);


const saveChanges= () =>{
    const taskData={


    id:`${Date.now()}`,//unique no for id
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktype").value,
    taskType: document.getElementById("tasktype").value,
    taskDesc: document.getElementById("taskdesc").value,

};


const generateNewCard = (taskData) =>`
<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <img
    src=${taskData.imageUrl}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">
      ${taskData.taskDesc}
    </p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
  <div class="card-footer">
    <button type="button" class="btn btn-outline-primary float-end">
      Open Task
    </button>
  </div>
</div>
</div>
 `;

taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));


};
