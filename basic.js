document.addEventListener('DOMContentLoaded',function(){
  console.log('sanity check')

  let form = document.getElementById('form')
  let input = document.querySelectorAll('input')
  let specs = document.querySelectorAll('select')

  form.addEventListener('submit', function(){



    localStorage.setItem('Work_Order', input[0].value )
    localStorage.setItem('Part_Number', input[1].value )
    localStorage.setItem('Qty', input[2].value)
    localStorage.setItem('Employee', input[3].value)

    localStorage.setItem('Dim1', input[4].value)
    localStorage.setItem('Dim1_spec', specs[0].value)

    localStorage.setItem('Dim2', input[5].value)
    localStorage.setItem('Dim2_spec', specs[1].value)

    localStorage.setItem('Dim3', input [6].value)
    localStorage.setItem('Dim3_spec', specs[2].value)

  })

})
