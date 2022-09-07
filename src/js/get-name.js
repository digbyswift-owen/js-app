const params = (
  new URL(document.location)).searchParams;
const nameParam = params.get('name');
document.getElementById('name').innerHTML = nameParam;
