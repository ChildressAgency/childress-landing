<?php
    
    function theme_options(){
        add_menu_page( 'Theme Options', 'Theme Options', 'administrator', 'theme_options', 'theme_options_page');
    }
    add_action( 'admin_menu', 'theme_options' );

    function register_mysettings() { // whitelist options
        register_setting( 'theme_options', 'header-logo' );
        register_setting( 'theme_options', 'footer-logo' );
        register_setting( 'theme_options', 'office-1' );
        register_setting( 'theme_options', 'phone-1' );
        register_setting( 'theme_options', 'address-1' );
        register_setting( 'theme_options', 'office-2' );
        register_setting( 'theme_options', 'phone-2' );
        register_setting( 'theme_options', 'address-2' );
        register_setting( 'theme_options', 'copyright' );
        register_setting( 'theme_options', 'facebook' );
        register_setting( 'theme_options', 'twitter' );
        register_setting( 'theme_options', 'instagram' );
        register_setting( 'theme_options', 'linkedin' );
        register_setting( 'theme_options', 'pinterest' );
        register_setting( 'theme_options', 'google-plus' );
    }
    add_action( 'admin_init', 'register_mysettings' );

    function theme_options_page(){
        if( function_exists( 'wp_enqueue_media' ) ){
            wp_enqueue_media();
        } else {
            wp_enqueue_style( 'thickbox' );
            wp_enqueue_script( 'media-upload' );
            wp_enqueue_script( 'thickbox' );
        } ?>
        <div class="wrap">
            <h1>Theme Options</h1>
            <form method="post" action="options.php">
                <?php settings_fields( 'theme_options' ); ?>
                <?php do_settings_sections( 'theme_options' ); ?>

                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Header Logo</th>
                        <td style="display: flex; flex-direction: column; align-items: flex-start;">
                            <img class="logo" src="<?php echo get_option('header-logo'); ?>" height="100"/>
                            <input class="logo_url" type="text" name="header-logo" size="60" value="<?php echo get_option('header-logo'); ?>">
                            <a href="#" class="logo_upload">Set Image</a>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Footer Logo</th>
                        <td style="display: flex; flex-direction: column; align-items: flex-start;">
                            <img class="logo" src="<?php echo get_option('footer-logo'); ?>" height="100"/>
                            <input class="logo_url" type="text" name="footer-logo" size="60" value="<?php echo get_option('footer-logo'); ?>">
                            <a href="#" class="logo_upload">Set Image</a>
                        </td>
                    </tr>
                </table>

                <script>
                    jQuery(document).ready(function($) {
                        $('.logo_upload').click(function(e) {
                            e.preventDefault();
                            $logo = $( this ).parent();

                            var custom_uploader = wp.media({
                                title: 'Custom Image',
                                button: {
                                    text: 'Set Image'
                                },
                                multiple: false  // Set this to true to allow multiple files to be selected
                            })
                            .on('select', function() {
                                var attachment = custom_uploader.state().get('selection').first().toJSON();
                                $logo.find( '.logo' ).attr('src', attachment.url);
                                $logo.find( '.logo_url' ).val(attachment.url);

                            })
                            .open();
                        });
                    });
                </script>

                <hr />

                <h2>Contact Info</h2>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Office 1</th>
                        <td><input type="text" name="office-1" value="<?php echo esc_attr( get_option('office-1') ); ?>" size="60" /></td>
                    </tr>
                    
                    <tr valign="top">
                        <th scope="row">Phone 1</th>
                        <td><input type="text" name="phone-1" value="<?php echo esc_attr( get_option('phone-1') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Address 1</th>
                        <td><input type="text" name="address-1" value="<?php echo esc_attr( get_option('address-1') ); ?>" size="60" /></td>
                    </tr>
                </table>

                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Office 2</th>
                        <td><input type="text" name="office-2" value="<?php echo esc_attr( get_option('office-2') ); ?>" size="60" /></td>
                    </tr>
                    
                    <tr valign="top">
                        <th scope="row">Phone 2</th>
                        <td><input type="text" name="phone-2" value="<?php echo esc_attr( get_option('phone-2') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Address 2</th>
                        <td><input type="text" name="address-2" value="<?php echo esc_attr( get_option('address-2') ); ?>" size="60" /></td>
                    </tr>
                </table>

                <hr />

                <h2>Social</h2>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Facebook</th>
                        <td><input type="text" name="facebook" value="<?php echo esc_attr( get_option('facebook') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Twitter</th>
                        <td><input type="text" name="twitter" value="<?php echo esc_attr( get_option('twitter') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Instagram</th>
                        <td><input type="text" name="instagram" value="<?php echo esc_attr( get_option('instagram') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Linkedin</th>
                        <td><input type="text" name="linkedin" value="<?php echo esc_attr( get_option('linkedin') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Pinterest</th>
                        <td><input type="text" name="pinterest" value="<?php echo esc_attr( get_option('pinterest') ); ?>" size="60" /></td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">Google Plus</th>
                        <td><input type="text" name="google-plus" value="<?php echo esc_attr( get_option('google-plus') ); ?>" size="60" /></td>
                    </tr>
                </table>

                <hr />

                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Copyright</th>
                        <td><input type="text" name="copyright" value="<?php echo esc_attr( get_option('copyright') ); ?>" size="60" /></td>
                    </tr>
                </table>

                <?php submit_button(); ?>
            </form>
        </div>
    <?php } ?>