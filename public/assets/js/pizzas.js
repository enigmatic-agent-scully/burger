$(() => {
  $('.devour').on('click', (e) => {
    var id = $('.devour').attr('id');
    console.log(id);
    var devour;
  })

  $('#add').on('click', e => {
    e.preventDefault();
    var pizzaType = $('#pizzatext').val().trim();
    console.log(pizzaType);
    var newPizza = {
      pizza: pizzaType
    };
    console.log(newPizza);
    $.ajax({
      url: '/api/pizzas',
      type: 'POST',
      data: newPizza,
      dataType: 'json',
      success: () => {
        console.log('created new pizza');
        location.reload();
      }
    });
  });

  $('.delete-pizza').click(e => {
    e.preventDefault();
    var id = $('.delete-pizza').attr('id');
    console.log(id);

    $.ajax(
      {
        url: `/api/pizzas/${id}`,
        type: 'DELETE',
        success: () => {
          console.log(`deleted pizza #${id}`);
          location.reload();
        }
      });
  })
});
