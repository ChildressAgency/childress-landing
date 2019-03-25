registerBlockType( 'childress/media-text-slider', {
    title: 'Media & Text Slider',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M13 17h8v-2h-8v2zM3 19h8V5H3v14zM13 9h8V7h-8v2zm0 4h8v-2h-8v2z'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {

    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' media-text-slider' }>
                <InnerBlocks
                    allowedBlocks={['childress/media-text-slide']}
                    template={[
                        ['childress/media-text-slide']
                    ]}
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='media-text-slider container'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/media-text-slide', {
    title: 'Slide',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M13 17h8v-2h-8v2zM3 19h8V5H3v14zM13 9h8V7h-8v2zm0 4h8v-2h-8v2z'
            }
        ),
    ),
    category: 'custom-blocks',
    parent: false,

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className={ className + ' media-text-slide' }>
                <div className='media-text-slide__content'>
                    <InnerBlocks
                        template={[
                            ['core/paragraph']
                        ]}
                        templateLock={ false }
                    />
                </div>
                <div className='media-text-slide__media'>
                    <MediaUpload
                        label="Image"
                        onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                        type="image"
                        value={ imageUrl }
                        render={ ({ open }) => (
                            <Button className={ imageUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { imageUrl ? <img src={ imageUrl } /> : 'Set Image' }
                            </Button>
                        ) }
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='media-text-slide'>
                <div className='media-text-slide__content'>
                    <InnerBlocks.Content />
                </div>
                <div className='media-text-slide__media'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId } />
                </div>
            </div>
        );
    },
} );