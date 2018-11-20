$(() => {
  $('.pizza-form').on('submit', e => {
    e.preventDefault();
    var newPizza = {
      pizza: $('textarea')
    };
    $.ajax('/api/pizzas', {
      type: 'POST',
      data: newPizza
    }
    ).then(() => {
      console.log('created new pizza');
      location.reload();
    });
  });

  $('.delete-pizza').on('click', e => {
    var id = $(this).data('id');

    $.ajax(`/api/pizzas/${id}`,
      {
        type: DELETE
      }).then(() => {
        console.log(`deleted pizza #${id}`);

        location.reload();
      })
  })
});
