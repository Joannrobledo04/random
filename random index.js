$(document).ready(function () {

    $("#generate").click(function () {
        // input value
        var number = $("input").val();
        $("input").val("");

        //API Call
        $.ajax( {
            url: 'https://randomuser.me/api/?results=${75}',
            dataType: "json",
            success: function (res) {
                const data = res.results

                var html_str = ""

                // for loop user info
                for (var i = 0; i < data.length; i++) {
                    html_str += <div class='col-12 col-md-5 col-md-5'>
                    <button id='btn-delete' class='btn btn-danger w-75'>Delete
                    </button>
                    <div class='card my-1 p-2'>
                        <img class='card-img-top' alt='user' src="${data{i}.picture.large}">
                            <div class='card-body'>
                                <h4 class="card-title">
                                    ${data{i}.name.first}
                                    ${data{i}. name.last}
                                </h4>
                                <p class="card-text">
                                    ${data{i}.location.city}
                                    ${data{i}.location.street.number}
                                    ${data{i}.location.street.name}
                                </p>
                                <button class='btn btn-primary'>Email</button>

                            </div>
                        </img>
                    </div>
                    </div>
                }

               // Append Card To Page 

                $(".row").append(html_str)
            }

        }
    }

    // Remove Cards
    $(document).on("click", "$btn-delete", function (){
        $(this).parent().remove()
    })
}
