$(() => {
  $('#add').on('click', e => {
    var pizzaType = $('#pizzatext').val();
    console.log(pizzaType);
    // var newPizza = {
    //   pizza: pizzaType
    // };
    // console.log(newPizza);
    // $.post('/api/pizzas', newPizza, data => {
    //   console.log(data);
    // }, 'json')
    //   .then(() => {
    //     console.log('created new pizza');
    //     location.reload();
    //   });
  });

  $('#delete').on('click', e => {
    e.preventDefault();
    var id = $(this).data('id');
    console.log(id);

    $.ajax(`/api/pizzas/${id}`,
      {
        type: 'DELETE'
      }).then(() => {
        console.log(`deleted pizza #${id}`);

        location.reload();
      })
  })
});
