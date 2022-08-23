$(document).ready(function() {
    $('p').hide()

    $('#btn-resumo').click(function(e) {
        e.preventDefault()

        //criar uma variavel para receber o status
        let status = $(this).attr('data-status')
        $('p').toggle(1000)
        $('#btn-resumo').empty()

        if (status == '1') {
            $('#btn-resumo').append('Esconder Resumo')
            $('#btn-resumo').attr('data-status', '2')
        } else {
            $('#btn-resumo').append('Ver Resumo')
            $('#btn-resumo').attr('data-status', '1')
        }

    })

})