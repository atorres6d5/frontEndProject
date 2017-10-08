document.addEventListener('DOMContentLoaded',function(){
  console.log('sanity check')
  //items in local storage
  var workOrder = localStorage.getItem('Work_Order')
  var partNum = localStorage.getItem('Part_Number')
  var qty = localStorage.getItem('Qty')
  var employee = localStorage.getItem('Employee')
  var dim1 = localStorage.getItem('Dim1')
  var dim1Spec = localStorage.getItem('Dim1_spec')
  var dim2 = localStorage.getItem('Dim2')
  var dim2Spec = localStorage.getItem('Dim2_spec')
  var dim3 = localStorage.getItem('Dim3')
  var dim3Spec = localStorage.getItem('Dim3_spec')
  // elements to be filled by local storage
  var shells = document.querySelectorAll('th div.row')
  var form = document.getElementById('nextRow')


////filling items code
///top of page info
  document.getElementById('workOrder').textContent = workOrder;
  document.getElementById('part').textContent = partNum;
  document.getElementById('quantity').textContent = qty;
  document.getElementById('count').textContent = 0;
  document.getElementById('worker').textContent = employee;
  var tokens = document.querySelectorAll('#nextRow input')
////top of table dims
  shells[0].textContent = dim1;
  shells[1].textContent = dim1Spec;
  shells[2].textContent = dim2;
  shells[3].textContent = dim2Spec;
  shells[4].textContent = dim3;
  shells[5].textContent = dim3Spec;




  form.addEventListener('submit', function(e){
    e.preventDefault()
    var newLine = '<tr class="row d-flex justify-content-center">'
    newLine += '<td class="col-1">' + tokens[0].value + '</td>'
    newLine += '<td class="col-1">' + tokens[1].value + '</td>'
    newLine += '<td class="col-1">' + tokens[2].value + '</td>'
    newLine += '<td class="col-2">' + tokens[3].value + '</td>'
    newLine += '<td class="col-2">' + tokens[4].value + '</td>'
    newLine += '<td class="col-2">' + tokens[5].value + '</td></tr>'

      document.getElementById('maintable').innerHTML += newLine
      document.getElementById('count').textContent++


  })
  ///auto ++ default value on count
  document.querySelectorAll('input')[0].defaultValue=document.getElementById('count').textContent


})
