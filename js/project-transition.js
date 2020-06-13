const projects = document.querySelectorAll('.project');

function transitionPlay(event){
  const item = event.currentTarget;
  const item_child_img = item.childNodes[1];
  const item_child_description = item.childNodes[3];
  item.classList.add('project-rotate');
  item_child_img.style.display = 'none';
  item_child_description.classList.add('project-description-rotate');
}

function transitionStop(event){
  const item = event.currentTarget;
  const item_child_img = item.childNodes[1];
  const item_child_description = item.childNodes[3];
  item.classList.remove('project-rotate');
  item_child_img.style.display = 'block';
  item_child_description.classList.remove('project-description-rotate');
}

projects.forEach((project) => {
  project.addEventListener('mouseover', transitionPlay);
  project.addEventListener('mouseout', transitionStop);
});
