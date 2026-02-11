$(function() {
    $(document).on('keydown', function(event) {
        let key = event.key.toLowerCase();
        let img = $('#planets');

        if (['y', 'n', 'e', 's'].includes(key)) {
            img.css({
                width: '0px',
                height: '0px',
                opacity: 0,
                display: 'block' 
            });

            if (key === 'y') {
                img.attr('src', './IMG/yupiter.png');
            } else if (key === 'n') {
                img.attr('src', './IMG/neptun.png');
            } else if (key === 'e') {
                img.attr('src', './IMG/erkir.png');
            } else if (key === 's') {
                img.attr('src', './IMG/saturn.png');
            }

            img.stop().animate({
                width: '400px',
                height: '400px',
                opacity: 1
            }, 1500);
        }
    });
});