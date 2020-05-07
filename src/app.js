import { http } from './http';
import { ui } from './ui';

// Get Posts on  Dom Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen to Add Post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
ui.posts.addEventListener('click', deletePost);

// Listen for edit
ui.posts.addEventListener('click', enableEdit);

// Listen for Cancel
ui.cancelBtn.addEventListener('click', cancelEdit);

function getPosts() {
  ui.clearFields();
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  const title = ui.titleInput.value;
  const body = ui.bodyInput.value;
  const id = ui.idInput.value;

  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    const data = {
      title,
      body,
    };

    if (id === '') {
      // Add Post

      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      // Update Post
      http.put(`http://localhost:3000/posts/${id}`, data).then((data) => {
        ui.showAlert('Post updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      });
    }
  }
}

function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;

    if (confirm('Are you sure?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    ui.fillForm(data);
  }
}

function cancelEdit() {
  ui.changeFormState('add');
}
