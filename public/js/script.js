$(document).ready(() => {
    $("#submitBtn").on("click", ()=>{
        var searchValue = $("#search-btn").val();

        $("#search-btn").val("");

        searchBook(searchValue);
    });

    function searchBook(searchValue){
        $.ajax({
            type: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
            dataType: "json"
        }).then((response) => {
                console.log (response);
                $(".welcome").text("Book Title: " + response.items[0].volumeInfo.title + " Author: " + response.items[0].volumeInfo.authors + " Genre: " + response.items[0].volumeInfo.categories[0]);
        }); 
    }
})