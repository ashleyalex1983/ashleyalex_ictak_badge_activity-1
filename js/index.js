 
//  function ajax()
// {
//Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Event Listener
xhttp.onreadystatechange =function()
                        {
                            //checks the XHR Object's readystate and status
                            if(this.readyState==4 && this.status==200)
                            {
                                var response = JSON.parse( this.responseText );
                                // console.log(response);
                                var Jproduct = response.shopping_list;
                                // console.log(Jproduct);
                                // alert(Jproduct.length);

                                //use for loop to list the names in the array
                                var temp="";
                                // let slno=1;
                                for(var i=0; i<Jproduct.length ; i++)
                                {
                                    temp +="<tr>";
                                    temp +="<td>"+Jproduct[i].slno+"</td>";
                                    // temp +="<td>"+Jproduct[i].slno+" / "+Jproduct[i].name+"</td>";
                                    temp +="<td>"+Jproduct[i].name+"</td>";
                                    // temp +="<td>"+Jproduct[i].qty+"</td>";
                                    temp +="<td>"+Jproduct[i].qty+"."+Jproduct[i].unit+"</td>";
                                    // temp +="<td>"+Jproduct[i].unit+"</td>";
                                    temp +="<td>"+Jproduct[i].dept+"</td>";
                                    temp +="<td>"+Jproduct[i].notes+"</td></tr>";

                                    // slno += 1;
                                }
                                // console.log(output);
                                document.getElementById("data").innerHTML=temp;
                            }
                        }
// xhttp.open("GET","ajax.txt",true);
xhttp.open("GET","productlist.json",true);
xhttp.send();

// }
$(document).ready(function() {
   var table = $('.mydatatable').DataTable({
    lengthMenu : [[5, 10, 15, 20, -1],[5, 10, 15, 20, "All"]]
    // ,columnDefs: [
    //     { width: '10px', targets: 0 }
    // ],
    // fixedColumns: true
    });

        $('.mydatatable tfoot th').each( function(){
            var title =$(this).text();
            if(title!=="Quantity" && title!=="Unit"){
                $(this).html('<input type="text" placeholder="Search ' + title +'" width=20px;/>');
            // console.log(title);
            }
            
        });

        table.columns().every( function(){
            var that =this;
            $('input', this.footer()).on('keyup change', function(){
                if(that.search()!== this.value){
                    that.search(this.value).draw();
                }
            });
        });

       
} );

