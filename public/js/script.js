$(".eatburger").on("submit", function(e){
    e.preventDefault();

    const burgerId = $(this).children(".burgerid").val();
    console.log(burgerId)
})