function getAlert(title, text, icon, timer, showConfirmButton) {
  let btn = (showConfirmButton !== 'false');
  console.log('halo')
  swal.fire({
    title : title,
    text : text,
    icon : icon,
    timer : timer,
    showConfirmButton :  btn,
  })
}
function swalConfirmDelete() {
  event.preventDefault(); // prevent form submit
  var form = event.target.form; // storing the form
  swal.fire({
    title: 'Are you sure?',
    text: 'But you will still be able to retrieve this file.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(function(isConfirm){
        if (isConfirm.value) {
          form.submit();
        }
      }
  )
}