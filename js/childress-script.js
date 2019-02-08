$( document ).ready( function(){

    $classes = $( '.tabs-section--titles' ).attr( 'class' ).split(/\s+/);
    $numTabs = parseInt( $classes[2].substr(4, 1) );
    $currentSlide = 0;


    $( '.tabs-section--titles' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true
    });
    $( '.tabs-section--contents' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000
    });

    $( '.tabs-section--contents' ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ){
        $( '.tabs-section--titles .slick-track .tab__title' ).removeClass( 'tab__title--active' );
        $( '.tabs-section--titles .slick-track' ).find( '.tab__title:nth-child(' + ( nextSlide + 1 ) + ')' ).addClass( 'tab__title--active' );
    } );

    $( '.tabs-section--titles .slick-track' ).find( '.tab__title:nth-child(1)' ).addClass( 'tab__title--active' );

    $( '.tab__title' ).click( function(){
        $index = $( this ).data( 'slick-index' );

        $( '.tabs-section--contents' ).slick( 'slickGoTo', $index + 1, false );
    } );

    $( '.tabs-section--titles .slick-track' ).children().each( function(){
        if( $( this ).data( 'slick-index' ) >= $numTabs + 1 ){
            $( this ).css( 'display', 'none' );
        }
    } );
    
} );
