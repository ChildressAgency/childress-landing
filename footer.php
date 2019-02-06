
    <footer class="footer">
        <div class="footer__address-boxes">
            <div class="footer__address-box">
                <p class="footer__office"><?php echo get_option( 'office-1' ); ?></p>
                <?php if( get_option('phone-1') ): ?><p class="footer__phone"><a href="tel:<?php echo get_option( 'phone-1' ); ?>"><?php echo get_option( 'phone-1' ); ?></a></p><?php endif; ?>
                <?php if( get_option('address-1') ): ?><p class="footer__address"><?php echo get_option( 'address-1' ); ?></p><?php endif; ?>
            </div>
            <div class="footer__address-box">
                <p class="footer__office"><?php echo get_option( 'office-2' ); ?></p>
                <?php if( get_option('phone-2') ): ?><p class="footer__phone"><a href="tel:<?php echo get_option( 'phone-2' ); ?>"><?php echo get_option( 'phone-2' ); ?></a></p><?php endif; ?>
                <?php if( get_option('address-2') ): ?><p class="footer__address"><?php echo get_option( 'address-2' ); ?></p><?php endif; ?>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__copyright">
                <p><?php echo get_option( 'copyright' ); ?></p>
            </div>
            <div class="footer__logo">
                <img src="<?php echo get_option( 'footer-logo' ); ?>" alt="Childress Agency">
            </div>
            <div class="footer__social">
                <?php if( get_option( 'facebook' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'facebook' ); ?>"><i class="fab fa-facebook"></i></a></div><?php endif; ?>
                <?php if( get_option( 'twitter' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'twitter' ); ?>"><i class="fab fa-twitter"></i></a></div><?php endif; ?>
                <?php if( get_option( 'instagram' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'instagram' ); ?>"><i class="fab fa-instagram"></i></a></div><?php endif; ?>
                <?php if( get_option( 'linkedin' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'linkedin' ); ?>"><i class="fab fa-linkedin"></i></a></div><?php endif; ?>
                <?php if( get_option( 'pinterest' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'pinterest' ); ?>"><i class="fab fa-pinterest"></i></a></div><?php endif; ?>
                <?php if( get_option( 'google-plus' ) ): ?><div class="footer__social-icon"><a href="<?php echo get_option( 'google-plus' ); ?>"><i class="fab fa-google-plus-g"></i></a></div><?php endif; ?>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>