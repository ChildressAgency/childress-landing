<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width initial-scale=1.0" name="viewport">
    <meta content="The Childress Agency" name="author">
    <meta content="public" http-equiv="cache-control">
    <meta content="private" http-equiv="cache-control">
    
    <title><?php echo get_bloginfo( 'name' ); if( get_bloginfo( 'description' ) ): echo ' | ' . get_bloginfo( 'description' ); endif; ?></title>

    <?php wp_head(); ?>
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src='https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js'></script>
    <script src='https://oss.maxcdn.com/respond/1.4.2/respond.min.js'></script>
    <![endif]-->
    <!--[if gte IE 9]
    <style type='text/css'>
    footer {
    filter: none;
    }
    </style>
    <![endif]-->
</head>
<body>
    
    <div class="contact">
        <div class="contact__close" style="z-index: 99"><i class="fas fa-times"></i></div>
        <?php echo do_shortcode( '[multi-step-form id="1"]' ); ?>
    </div>

    <header class="header">
        <div class="header__brand">
            <img class="header__logo header__logo--hover" src="<?php echo get_option( 'header-logo-hover' ); ?>" alt="Childress Agency"/>
            <img class="header__logo" src="<?php echo get_option( 'header-logo' ); ?>" alt="Childress Agency"/>
        </div>
        <div class="header__call">
            <a href="tel:<?php echo get_option( 'phone-1' ); ?>"><?php echo get_option( 'phone-1' ); ?></a>
        </div>
    </header>
