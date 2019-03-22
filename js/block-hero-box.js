registerBlockType( 'childress/hero-box', {
    title: 'Hero Box',
    icon: 'format-image',
    category: 'custom-blocks',

    attributes: {
        backgroundUrl: {
            type: 'string'
        },
        backgroundAlt: {
            type: 'string'
        },
        backgroundId: {
            type: 'number'
        },
        isFullHeight: {
            type: 'boolean',
            default: false
        },
        style: {
            type: 'string',
            default: 'default'
        },
        tiltImageUrl: {
            type: 'string'
        },
        tiltImageAlt: {
            type: 'string'
        },
        tiltImageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundId, isFullHeight, style, tiltImageUrl, tiltImageAlt, tiltImageId } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title="Size Settings">
                        <SelectControl
                            label='Style'
                            value={ style }
                            options={[
                                { label: 'Default', value: 'default' },
                                { label: 'Animated', value: 'animated' },
                            ]}
                            onChange={ ( value ) => { setAttributes({ style: value }) } }
                        />
                        <ToggleControl
                            label="Full Height"
                            help={ isFullHeight ? 'Full Height' : 'Relative Height' } 
                            checked={ isFullHeight }
                            onChange={ ( value ) => { setAttributes({ isFullHeight: value }) } }
                        />
                    </PanelBody>
                </InspectorControls>
                { 
                    style=='default' &&
                    <div className={ className } style={{ backgroundImage: `url(${ backgroundUrl })` }}>
                        <div className="hero-box">
                            <MediaUpload
                                onSelect={ media => { setAttributes({ backgroundUrl: media.url, backgroundAlt: media.alt, backgroundId: media.id }); } }
                                type="image"
                                value={ backgroundId }
                                render={ ({ open }) => (
                                    <Button className={ 'button button-large' } onClick={ open }>
                                        { 'Set Background' }
                                    </Button>
                                ) }
                            />
                            <div className="hero-box__inner">
                                <InnerBlocks
                                    allowedBlocks={['childress/hero-box-inner']}
                                    template={[
                                        ['childress/hero-box-inner']
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                }
                {
                    style == 'animated' &&
                    <div className={ className }>
                        <div className="hero-box">
                            <MediaUpload
                                onSelect={ media => { setAttributes({ tiltImageUrl: media.url, tiltImageAlt: media.alt, tiltImageId: media.id }); } }
                                type="image"
                                value={ tiltImageId }
                                render={ ({ open }) => (
                                    <Button className={ tiltImageId ? 'image-button' : 'button button-large' } onClick={ open }>
                                        { tiltImageId ? <img src={ tiltImageUrl } /> : 'Set Image' }
                                    </Button>
                                ) }
                            />
                        </div>
                        <InnerBlocks
                            allowedBlocks={['childress/hero-word-wall-word']}
                            template={[
                                ['childress/hero-word-wall-word'],
                                ['childress/hero-word-wall-word'],
                                ['childress/hero-word-wall-word'],
                            ]}
                            templateLock={ false }
                        />
                    </div>
                }
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundId, isFullHeight, style, tiltImageUrl, tiltImageAlt, tiltImageId } = attributes;

        return (
            <div>
                {
                    style == 'default' &&
                    <div>
                        <img className={ 'hero-box__bg wp-image-' + backgroundId } src={ backgroundUrl } alt={ backgroundAlt } />
                        { isFullHeight && <div className="hero-box__explore">Explore</div> }
                        <div className={ 'hero-box' + ( isFullHeight ? " hero-box--full" : "" ) }>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                }
                {
                    style == 'animated' &&
                    <div>
                        { isFullHeight && <div className="hero-box__explore">Explore</div> }
                        <div className={ 'hero-box' + ( isFullHeight ? " hero-box--full" : "" ) }>
                            <div className='hero-box__word-wall'>
                                <InnerBlocks.Content />
                            </div>
                            <div className='hero-box--tilt'>
                                <img src={ tiltImageUrl } alt={ tiltImageAlt } className={ 'wp-image-' + tiltImageId } />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    },
} );



registerBlockType( 'childress/hero-box-inner', {
    title: 'Hero Box - Inner',
    icon: 'format-image',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        titleTop: {
            type: 'string'
        },
        titleBottom: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { titleTop, titleBottom, subtitle, text } = attributes;

        return (
            <div className="hero-box__inner">
                <div className="hero-box__title">
                    <h2>
                        <PlainText
                            value={ titleTop }
                            onChange={ ( value ) => { setAttributes({ titleTop: value }) } }
                            placeholder="First Line"
                        />
                    </h2>
                    <h2>
                        <PlainText
                            value={ titleBottom }
                            onChange={ ( value ) => { setAttributes({ titleBottom: value }) } }
                            placeholder="Second Line"
                        />
                    </h2>
                </div>
                <div className="hero-box__info">
                    <h3>
                        <PlainText
                            value={ subtitle }
                            onChange={ ( value ) => { setAttributes({ subtitle: value }) } }
                            placeholder="SubTitle"
                        />
                    </h3>
                    <p>
                        <PlainText
                            value={ text }
                            onChange={ ( value ) => { setAttributes({ text: value }) } }
                            placeholder="Text"
                        />
                    </p>
                    <InnerBlocks
                        template={[
                            ['core/button']
                        ]}
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { titleTop, titleBottom, subtitle, text } = attributes;

        return (
            <div className="container">
                <div className="hero-box__inner">
                    <div className="hero-box__title-wrapper">
                        <h2 className="hero-box__title">{ titleTop }<br/><span className="hero-box__title--bottom">{ titleBottom }</span></h2>
                    </div>
                    <div className="hero-box__info-wrapper">
                        <div className="hero-box__info">
                            <h1 className="hero-box__subtitle">{ subtitle }</h1>
                            <p className="hero-box__text">{ text }</p>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
} );

registerBlockType( 'childress/hero-word-wall-word', {
    title: 'Word',
    icon: 'format-image',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text } = attributes;

        return (
            <p className={ className + ' hero-box__word-wall-word' }>
                <PlainText
                    value={ text }
                    onChange={ ( value ) => { setAttributes({ text: value }) } }
                    placeholder="Word"
                />
            </p>
        );
    },

    save( { attributes } ) {
        const { text } = attributes;

        return (
            <p className='hero-box__word-wall-word'>{ text }</p>
        );
    },
} );


