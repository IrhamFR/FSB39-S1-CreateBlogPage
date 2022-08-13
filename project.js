let projects = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let content = document.getElementById("input-desc-project").value
    let image = document.getElementById("input-project-image").files[0]

    if (image) {
        image = URL.createObjectURL(image)
    }
   

    let project = {
        title,
        content,
        image
    }

    projects.push(project)
    console.log(project)
    renderprojects()
}   

function renderprojects() {

    let containerProjects = document.getElementById("project-list-render")

    containerProjects.innerHTML = ""

    for (let i =0; i < projects.length; i++) {
        containerProjects.innerHTML +=`
        <div class="project-list-render">
            <div class="project-img">
                <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
            <a href="project-detail.html" class="title-card-project">${projects[i].title}</a>
                <p class="distance-card-project">Duration : 1 Week</p>
                <p>
                    ${projects[i].content}
                </p>
                <div class="project-project-action">
                <a href="#" class="edit-card-action">edit</a>
                <a href="#" class="delete-card-action">delete</a>
            </div>
                </div>
            </div>
        </div>  
        `
    }
}