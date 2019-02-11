registerBlockType( 'childress/phone-display', {
    title: 'Phone Display',
    icon: 'smartphone',
    category: 'custom-blocks',

    attributes: {
        backgroundUrl: {
            type: 'string'
        },
        backgroundAlt: {
            type: 'string'
        },
        backgroundPosX: {
            type: 'number',
            default: 50
        },
        backgroundPosY: {
            type: 'number',
            default: 50
        },
        phoneUrl: {
            type: 'string'
        },
        phoneAlt: {
            type: 'string'
        },
        heading: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundPosX, backgroundPosY, phoneUrl, phoneAlt, heading, text } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title="Background Settings">
                        <RangeControl
                            label="Background X Position"
                            value={ backgroundPosX }
                            onChange={ ( value ) => { setAttributes({ backgroundPosX: value }) } }
                            min={ 0 }
                            max={ 100 }
                        />
                        <RangeControl
                            label="Background Y Position"
                            value={ backgroundPosY }
                            onChange={ ( value ) => { setAttributes({ backgroundPosY: value }) } }
                            min={ 0 }
                            max={ 100 }
                        />
                        <p>A lower number means "closer to the top/left corner". (e.g. Y = 20 is a higher position than Y = 80)</p>
                    </PanelBody>
                </InspectorControls>
                <div className={ className + ' phone-display'}>
                    <div className='phone-display__phone'>
                        <MediaUpload
                            label="Phone Image"
                            onSelect={ media => { setAttributes( { phoneUrl: media.url, phoneAlt: media.alt } ) } }
                            type="image"
                            value={ phoneUrl }
                            render={ ({ open }) => (
                                <Button className={ phoneUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { phoneUrl ? <img src={ phoneUrl } /> : 'Set Phone Image' }
                                </Button>
                            ) }
                        />
                    </div>
                    <div className='phone-display__bg' style={{ backgroundImage: `url(${ backgroundUrl })`, backgroundPosition: `${ backgroundPosX }% ${ backgroundPosY }%` }}>
                        <MediaUpload
                            label="Background"
                            onSelect={ media => { setAttributes( { backgroundUrl: media.url, backgroundAlt: media.alt } ) } }
                            type="image"
                            value={ backgroundUrl }
                            render={ ({ open }) => (
                                <Button className='button button-large' onClick={ open }>
                                    Set Background
                                </Button>
                            ) }
                        />
                    </div>
                    <div className='phone-display__info'>
                        <h2 className='phone-display__heading'>
                            <PlainText
                                value={ heading }
                                onChange={ ( value ) => { setAttributes({ heading: value }) } }
                                placeholder='Heading'
                            />
                        </h2>
                        <p className='phone-display__text'>
                            <PlainText
                                value={ text }
                                onChange={ ( value ) => { setAttributes({ text: value }) } }
                                placeholder='Text'
                            />
                        </p>
                        <InnerBlocks
                            template={[
                                ['core/button']
                            ]}
                        />
                    </div>
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundPosX, backgroundPosY, phoneUrl, phoneAlt, heading, text } = attributes;

        return (
            <div className={ 'wp-block-childress-phone-display phone-display'}>
                <div className='phone-display__bg' style={{ backgroundImage: `url(${ backgroundUrl })`, backgroundPosition: `${ backgroundPosX }% ${ backgroundPosY }%` }}>
                    <div className='phone-display__phone'>
                        <img src={ phoneUrl } alt={ phoneAlt } />
                    </div>
                </div>
                <div className='phone-display__info'>
                    <h2 className='phone-display__heading'>{ heading }</h2>
                    <p className='phone-display__text'>{ text }</p>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );
