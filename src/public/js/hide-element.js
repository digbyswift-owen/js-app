export default {
  hideElement() {
    const form = document.getElementById('form-div');
    if (form.style.display === 'none') {
      form.style.display = 'block';
      document.getElementById('hide-button').innerHTML = 'Hide Form';
    } else {
      form.style.display = 'none';
      document.getElementById('hide-button').innerHTML = 'Show Form';
    }
  },
};

