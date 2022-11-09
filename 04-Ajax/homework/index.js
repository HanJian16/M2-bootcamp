$(`#boton`).click(() => {
  $.get(`http://localhost:5000/amigos`, (data) => {
    $(`#lista`).empty();
    
    data.forEach(element => {
      let amigo = document.createElement(`li`);
      amigo.innerHTML = element.name;
      amigo.id = element.id;
      $(`#lista`).append(amigo);
    });
  })
});


$(`#search`).click(() => {
  $(`#amigo`).empty();
  let id = $(`#input`).val();

  // $.get(`http://localhost:5000/amigos/` + id, (data) => {
  //   $(`#amigo`).text(data.name);
  // })

  $.ajax({
    url: `http://localhost:5000/amigos/` + id,
    method: `GET`,
    success: (data) => {
      $(`#amigo`).text(data.name);
    }
  })
});


$(`#delete`).click(function(){
  let id = document.getElementById(`inputDelete`).value

  $.ajax({
    url: `http://localhost:5000/amigos/` + id,
    method: `DELETE`,
    success: () => {
      $(`#success`).text(`Tu amigo ${$(`#inputDelete`).val()} fue borrado con exito`);
    }
  })
});
