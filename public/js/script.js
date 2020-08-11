$(document).ready(() => {

    $("#submitBtn").on("click", (event) => {

        const searchValue = $("#search-btn").val();

        $("#search-btn").val("");
        searchBook(searchValue);


    });

    function searchBook(searchValue) {
        $.ajax({
            type: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
            dataType: "json"
        }).then((response) => {
            console.log(response);
            renderBook(response);
        });
    }


    function renderBook(data) {
        if (data.length !== 0) {

            $("#stats").empty();
            $("#stats").show();

            console.log(data.items[0].volumeInfo.title);


            for (let i = 0; i < data.items.length; i++) {


                const res = data.items[i].volumeInfo;
                console.log(res);

                const cardDiv = $("<div class='col s12 m6 l4 xl3' id='bookSearchResults'>")
                const bookCard = $("<div class='card bookCard'> ");
                const imgDiv = $("<div class= 'card-image'>");
                const bookImage = $(`<img class='imgOfbook' src=''/>`);
                const desDiv = $("<div class='card-content'>");
                const description = $(`<p> ${res.description}</p>`);
                const saveBtn = $("<a id='saveBtn' class='saveBook waves-effect waves-light btn-small'>Save This Book</a>")

                if (!res.imageLinks.thumbnail) {
                    imgSrc = "./images/defaultBook.png"
                } else {
                    imgSrc = res.imageLinks.thumbnail;
                }

                bookImage.attr("src", imgSrc)

                bookCard.append(`<h2 class='card-title'>  ${res.title} </h2>`);
                bookCard.append(`<p class="author">Author: ${res.authors}</p>`);

                imgDiv.append(bookImage);
                desDiv.append(description);
                bookCard.append(imgDiv, desDiv, saveBtn);
                cardDiv.append(bookCard);

                console.log(cardDiv);

                $("#stats").append(cardDiv);

            }
        }
    };


    $(document).on("click", ".saveBook", function() {
        
        console.log("book saved");
        
        const bookToSave = $(this).parents(".card").data();
      
        $.post("/api/booklist/" + bookToSave);
    });
})
