<?php

///////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES                                                              //
///////////////////////////////////////////////////////////////////////////////
function load_dependencies(){
    wp_register_script(
        'dependencies-script',
        get_template_directory_uri() . '/js/block-dependencies.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_enqueue_script( 'dependencies-script' );
}
add_action( 'init', 'load_dependencies', 10, 0 );

function fetchData($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

///////////////////////////////////////////////////////////////////////////////
// CONTAINER                                                                 //
///////////////////////////////////////////////////////////////////////////////
function container_block(){
    wp_register_script(
        'container-script',
        get_template_directory_uri() . '/js/block-container.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    register_block_type('childress/container', array(
        'editor_script' => 'container-script',
    ) );
}
add_action( 'init', 'container_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// HERO BOX                                                                  //
///////////////////////////////////////////////////////////////////////////////
function hero_box_block(){
    wp_register_script(
        'hero-box-script',
        get_template_directory_uri() . '/js/block-hero-box.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'hero-box-editor-style',
        get_template_directory_uri() . '/css/block-hero-box-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'hero-box-style',
        get_template_directory_uri() . '/css/block-hero-box-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/hero-box', array(
        'editor_script' => 'hero-box-script',
        'editor_style'  => 'hero-box-editor-style',
        'style'  => 'hero-box-style',
    ) );
}
add_action( 'init', 'hero_box_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// ICON ROW                                                                  //
///////////////////////////////////////////////////////////////////////////////
function icon_row_block(){
    wp_register_script(
        'icon-row-script',
        get_template_directory_uri() . '/js/block-icon-row.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'icon-row-editor-style',
        get_template_directory_uri() . '/css/block-icon-row-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'icon-row-style',
        get_template_directory_uri() . '/css/block-icon-row-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/icon-row', array(
        'editor_script' => 'icon-row-script',
        'editor_style'  => 'icon-row-editor-style',
        'style'  => 'icon-row-style',
    ) );
}
add_action( 'init', 'icon_row_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// ICON GRID                                                                 //
///////////////////////////////////////////////////////////////////////////////
function icon_grid_block(){
    wp_register_script(
        'icon-grid-script',
        get_template_directory_uri() . '/js/block-icon-grid.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'icon-grid-editor-style',
        get_template_directory_uri() . '/css/block-icon-grid-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'icon-grid-style',
        get_template_directory_uri() . '/css/block-icon-grid-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/icon-grid', array(
        'editor_script' => 'icon-grid-script',
        'editor_style'  => 'icon-grid-editor-style',
        'style'  => 'icon-grid-style',
    ) );
}
add_action( 'init', 'icon_grid_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// TABS                                                                      //
///////////////////////////////////////////////////////////////////////////////
function tabs_block(){
    wp_register_script(
        'tabs-script',
        get_template_directory_uri() . '/js/block-tabs.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'tabs-editor-style',
        get_template_directory_uri() . '/css/block-tabs-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'tabs-style',
        get_template_directory_uri() . '/css/block-tabs-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/tabs', array(
        'editor_script' => 'tabs-script',
        'editor_style'  => 'tabs-editor-style',
        'style'  => 'tabs-style',
    ) );
}
add_action( 'init', 'tabs_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// PHONE DISPLAY                                                             //
///////////////////////////////////////////////////////////////////////////////
function phone_display_block(){
    wp_register_script(
        'phone-display-script',
        get_template_directory_uri() . '/js/block-phone-display.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'phone-display-editor-style',
        get_template_directory_uri() . '/css/block-phone-display-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'phone-display-style',
        get_template_directory_uri() . '/css/block-phone-display-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/phone-display', array(
        'editor_script' => 'phone-display-script',
        'editor_style'  => 'phone-display-editor-style',
        'style'  => 'phone-display-style',
    ) );
}
add_action( 'init', 'phone_display_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// LET'S START                                                               //
///////////////////////////////////////////////////////////////////////////////
function lets_start_block(){
    wp_register_script(
        'lets-start-script',
        get_template_directory_uri() . '/js/block-lets-start.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'lets-start-editor-style',
        get_template_directory_uri() . '/css/block-lets-start-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'lets-start-style',
        get_template_directory_uri() . '/css/block-lets-start-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/lets-start', array(
        'editor_script' => 'lets-start-script',
        'editor_style'  => 'lets-start-editor-style',
        'style'  => 'lets-start-style',
    ) );
}
add_action( 'init', 'lets_start_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CASE STUDIES AND TESTIMONIALS                                             //
///////////////////////////////////////////////////////////////////////////////
function case_studies_testimonials_block(){
    wp_register_script(
        'case-studies-testimonials-script',
        get_template_directory_uri() . '/js/block-case-studies-testimonials.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'case-studies-testimonials-editor-style',
        get_template_directory_uri() . '/css/block-case-studies-testimonials-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'case-studies-testimonials-style',
        get_template_directory_uri() . '/css/block-case-studies-testimonials-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/case-studies-testimonials', array(
        'editor_script' => 'case-studies-testimonials-script',
        'editor_style'  => 'case-studies-testimonials-editor-style',
        'style'  => 'case-studies-testimonials-style',
    ) );
}
add_action( 'init', 'case_studies_testimonials_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CASE STUDIES                                                              //
///////////////////////////////////////////////////////////////////////////////
function case_studies_block(){
    wp_register_script(
        'case-studies-script',
        get_template_directory_uri() . '/js/block-case-studies.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'case-studies-editor-style',
        get_template_directory_uri() . '/css/block-case-studies-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'case-studies-style',
        get_template_directory_uri() . '/css/block-case-studies-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/case-studies', array(
        'editor_script' => 'case-studies-script',
        'editor_style'  => 'case-studies-editor-style',
        'style'  => 'case-studies-style',
    ) );
}
add_action( 'init', 'case_studies_block', 10, 0 );

