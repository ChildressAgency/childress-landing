$( document ).ready( function(){

    $( window ).scroll( function(){
        $scrollTop = $( document ).scrollTop();

        if( $scrollTop ){
            $( '.header' ).addClass( 'header--scroll' );
            // $( '.header' ).find( 'img' ).attr( 'src', 'wp-content/uploads/2019/02/CA_LandingPage_ChildressMark-28.svg' );
        } else {
            $( '.header' ).removeClass( 'header--scroll' );
            // $( '.header' ).find( 'img' ).attr( 'src', 'wp-content/uploads/2019/02/CA_Hor_Logo_White-06.svg' );
        }
    } );

    /**
     * Manage the tabs block
     */
    $classes = $( '.tabs-section--titles' ).attr( 'class' );
    if( $classes ){
        $classes = $classes.split(/\s+/); // get classes of titles wrapper
        $numTabs = parseInt( $classes[2].substr(4, 1) ); // number of tabs

        // Convert both pieces of the block to sliders
        $( '.tabs-section--titles' ).slick({
            arrows: false,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        asNavFor: '.tabs-section--contents'
                    }
                }
            ]
        });
        $( '.tabs-section--contents' ).slick({
            adaptiveHeight: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        asNavFor: '.tabs-section--titles'
                    }
                }
            ]
        });

        // set active tab each time the slider is moved
        $( '.tabs-section--contents' ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ){
            $( '.tabs-section--titles .slick-track .tab__title' ).removeClass( 'tab__title--active' );
            $( '.tabs-section--titles .slick-track' ).find( '.tab__title:nth-child(' + ( nextSlide + 2 ) + ')' ).addClass( 'tab__title--active' );
        } );

        // set first slide to active
        $( '.tabs-section--titles .slick-track' ).find( '.tab__title:nth-child(2)' ).addClass( 'tab__title--active' );

        // go to corresponding slide when one of the titles is clicked
        $( '.tab__title' ).click( function(){
            $index = $( this ).data( 'slick-index' );

            $( '.tabs-section--contents' ).slick( 'slickGoTo', $index, false );
        } );

        $( window ).resize( function(){
            if( $( window ).width() < 768 )
                fixArrows();
        } );

        function fixArrows(){
            $( '.tabs-section--titles' ).find( '.slick-prev' ).html( '<i class="fas fa-angle-left"></i>' );
            $( '.tabs-section--titles' ).find( '.slick-next' ).html( '<i class="fas fa-angle-right"></i>' );
        }
        fixArrows();
    }

    /**
     * HERO BOX ANIMATIONS
     *
     * Handle the slide in effects for hero boxes
     */
    $heroes = $( '.wp-block-childress-hero-box' );
    $heroes.first().find( '.hero-box__title' ).css( 'transform', 'translateX(0)' );
    $heroes.first().find( '.hero-box__info' ).css( 'transform', 'translateX(0)' );

    // slide in text for each hero box as the user scrolls
    $window = $( window ).scroll( function(){
        $heroes.each( function(){

            if( $window.scrollTop() > ( $( this ).offset().top - ( $( window ).height() / 2 ) ) ){
                $( this ).find( '.hero-box__title' ).css( 'transform', 'translateX(0)' );
                $( this ).find( '.hero-box__info' ).css( 'transform', 'translateX(0)' );
            }
        } );
    } );

    /**
     * CASE STUDIES
     *
     * Turn the case studies section into a slider.
     */
    $( '.case-studies__inner' ).slick({
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
    });

    /**
     * TESTIMONIALS
     *
     * Turn the testimonials section into a slider.
     */
    $( '.testimonials__inner' ).slick({
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });


    /**
     * CONTACT FORM
     *
     * Display the contact form whenever a contact button is pressed
     */
    $( 'a' ).click( function( e ){
        if( $( this ).attr( 'href' ) == '#contact' ){
            e.preventDefault();
            $( '.contact' ).addClass( 'contact--show' );
        }
    } );

    $( '.contact__close' ).click( function(){
        $( '.contact' ).removeClass( 'contact--show' );
    } );
} );
