export default {
  disableFlip: (e, buttonId) => {
    document.getElementById(buttonId).disabled = (e.target.value === '');
  },
};
