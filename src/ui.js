class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.cancelBtn = document.querySelector('.post-cancel');
    this.formState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id=${post.id}>
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id=${post.id}>
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });

    this.posts.innerHTML = output;
  }

  showAlert(message, classList) {
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = classList;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // div.textContent = message; //(or)

    // Get Parent
    const container = document.querySelector('.postsContainer');
    // Insert Alert
    container.insertBefore(div, this.posts);

    // TimeOut
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Clear Id hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.classList.remove('btn-primary');
      this.postSubmit.classList.add('btn-warning');

      // display Cancel button
      this.cancelBtn.style.display = 'block';
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.classList.remove('btn-warning');
      this.postSubmit.classList.add('btn-primary');

      // hide Cancel button
      this.cancelBtn.style.display = 'none';

      this.clearIdInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();
