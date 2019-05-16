Callback функция - это функция, которая передается в другую в качестве аргумента. Обычно так делают для того,
чтобы вызвать переданную функцию после завершения какого-то процесса, который может занять некоторое время.
    Например при ожидании отсета от сервера. При последовательном написании, если функция запроса на сервер
займет какое-то время, то слебующая функция начнет свое исполнение не дожидаясь исполнения первой.
Callback же дождется исполнения первой и только потом начнет свое работу. При масштабных асинхронных операциях
может возникнуть большой уровень вложенности callback - ов, который сложен длы воприятия и понимания, и который сложно контролировать - это и есть
callback hell. Например,

    function callbackHell() {
        setTimeout(function() {
            console.log('This should be accomplished first');
            setTimeout(function() {
                console.log('This should be accomplished second');
                setTimeout(function() {
                    console.log('This should be accomplished third');
                    setTimeout(function() {
                        console.log('This should be accomplished fourth');
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    };