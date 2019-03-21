$( document ).ready( function(){

    /**
     * STICKY HEADER
     *
     * Morph header when the user scrolls down the page
     */
    $( window ).scroll( function(){
        $scrollTop = $( document ).scrollTop();

        if( $scrollTop ){
            $( '.header' ).addClass( 'header--scroll' );
        } else {
            $( '.header' ).removeClass( 'header--scroll' );
        }
    } );

    /**
     * prevent jump on mobile when user scrolls down
     */
    $windowWidth = 0;
    function fixHeroJump(){
        $tempWidth = $( window ).width();
        if( $windowWidth == 0 || $windowWidth != $tempWidth ){
            $( '.hero-box--full' ).each( function(){
                $( this ).css( 'min-height', '100vh' );
                $( this ).css( 'min-height', $( this ).outerHeight() );
            } );
            $windowWidth = $tempWidth;
        }
    }
    $( window ).on( 'resize', function(){
        fixHeroJump();
    } );
    fixHeroJump();

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


    /**
     * SECTION HEADING
     */
    function resizeSectionHeading(){
        $headings = $( '.section-heading h2' );
        $headings.each( function(){
            $( this ).textFit({maxFontSize: 250});
            $newSize = $( this ).find( '.textfitted' ).css( 'font-size' );
            // console.log( $newSize );
            $( this ).css( 'font-size', $newSize );
        } );
    }
    resizeSectionHeading();

    $( window ).resize( function(){
        resizeSectionHeading();
    } );


    /**
     * MEDIA & TEXT SLIDER
     */
    $( '.media-text-slider' ).slick({
        adaptiveHeight: true,
        arrows: true,
        autoplay: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<i class="fas fa-angle-left slick-arrow-prev"></i>',
        nextArrow: '<i class="fas fa-angle-right slick-arrow-next"></i>',
    });


    /**
     * SERVICES
     */

    // deselect all services
    function deselectServices(){
        $( '.service' ).removeClass( 'service--selected' );
        $( '.service__title' ).removeClass( 'service__title--selected' );
        $( '.service__img' ).removeClass( 'service__img--selected' );
        $( '.service__content' ).removeClass( 'service__content--selected' );

        $( '.services__controls' ).removeClass( 'services__controls--selected' );
    }

    // select a service
    $( '.service__title' ).click(function(){
        deselectServices();

        $( this ).parent().addClass( 'service--selected' );
        $( this ).addClass( 'service__title--selected' );
        $( this ).parent().siblings().children('.service__title').addClass( 'service__title--selected' );
        $( this ).siblings( '.service__img' ).addClass( 'service__img--selected' );
        $( this ).siblings( '.service__content' ).addClass( 'service__content--selected' );

        $( this ).parent().siblings( '.services__controls' ).addClass( 'services__controls--selected' );
    });

    // make the services box big enough for all of the content
    $( '.wp-block-childress-services' ).each( function(){
        $servicesHeight = 0;

        $( '.wp-block-childress-service' ).each( function(){
            if( $servicesHeight < $( this ).find( '.service__content' ).outerHeight() )
                $servicesHeight = $( this ).find( '.service__content' ).outerHeight();
        } );

        $( this ).css( 'height', $servicesHeight + 'px' );
    } );

    // close all services
    $( '.services__close' ).click( function(){
        deselectServices();
    } );

    // select the next service
    $( '.services__next' ).click( function(){
        $selected = $( '.service--selected' );
        $next = $selected.next();

        if( $next.length == 0 ){
            $next = $selected.siblings( '.service' )[0];
        }

        $selected.removeClass( 'service--selected' );
        $selected.find( '.service__img' ).removeClass( 'service__img--selected' );
        $selected.find( '.service__content' ).removeClass( 'service__content--selected' );

        $( $next ).addClass( 'service--selected' );
        $( $next ).find( '.service__img' ).addClass( 'service__img--selected' );
        $( $next ).find( '.service__content' ).addClass( 'service__content--selected' );
    } );

    // select the previous service
    $( '.services__prev' ).click( function(){
        $selected = $( '.service--selected' );
        $prev = $selected.prev( '.service' );

        if( $prev.length == 0 ){
            $siblings = $selected.siblings( '.service' );
            $prev = $siblings[$siblings.length - 1];
        }

        $selected.removeClass( 'service--selected' );
        $selected.find( '.service__img' ).removeClass( 'service__img--selected' );
        $selected.find( '.service__content' ).removeClass( 'service__content--selected' );

        $( $prev ).addClass( 'service--selected' );
        $( $prev ).find( '.service__img' ).addClass( 'service__img--selected' );
        $( $prev ).find( '.service__content' ).addClass( 'service__content--selected' );
    } );
} );
