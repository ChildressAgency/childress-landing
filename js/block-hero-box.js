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
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundId, isFullHeight } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title="Size Settings">
                        <ToggleControl
                            label="Full Height"
                            help={ isFullHeight ? 'Full Height' : 'Relative Height' } 
                            checked={ isFullHeight }
                            onChange={ ( value ) => { setAttributes({ isFullHeight: value }) } }
                        />
                    </PanelBody>
                </InspectorControls>
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
                                templateLock='all'
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundId, isFullHeight } = attributes;

        return (
            <div>
                <img className={ 'hero-box__bg wp-image-' + backgroundId } src={ backgroundUrl } alt={ backgroundAlt } />
                <div className={ 'hero-box' + ( isFullHeight ? ' hero-box--full' : '' ) }>
                    <InnerBlocks.Content />
                </div>
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
                            <h3 className="hero-box__subtitle">{ subtitle }</h3>
                            <p className="hero-box__text">{ text }</p>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
} );


