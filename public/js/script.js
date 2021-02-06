$(".eatburger").on("submit", function(e){
    e.preventDefault();

    const burgerId = $(this).children(".burgerid").val();
    console.log(burgerId)
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId
    }).then(function(){
        location.reload();
    })
})