const fetchBookData = function () {
    let input = $("#book-input").val()

    $.get(`books/${input}`, function (bookData) {
        $("body").append(`<div>${bookData.title} - ${bookData.author}</div`)
    })
}


// 2001:4860:4860::8888