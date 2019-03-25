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
        backgroundId: {
            type: 'number'
        },
        phoneUrl: {
            type: 'string'
        },
        phoneAlt: {
            type: 'string'
        },
        phoneId: {
            type: 'number'
        },
        heading: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { backgroundUrl, backgroundAlt, backgroundId, phoneUrl, phoneAlt, phoneId, heading, text } = attributes;

        return (
            <Fragment>
                <div className={ className + ' phone-display'}>
                    <div className='phone-display__phone'>
                        <MediaUpload
                            label="Phone Image"
                            onSelect={ media => { setAttributes( { phoneUrl: media.url, phoneAlt: media.alt, phoneId: media.id } ) } }
                            type="image"
                            value={ phoneUrl }
                            render={ ({ open }) => (
                                <Button className={ phoneUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { phoneUrl ? <img src={ phoneUrl } /> : 'Set Phone Image' }
                                </Button>
                            ) }
                        />
                    </div>
                    <div className='phone-display__bg' style={{ backgroundImage: `url(${ backgroundUrl })` }}>
                        <MediaUpload
                            label="Background"
                            onSelect={ media => { setAttributes( { backgroundUrl: media.url, backgroundAlt: media.alt, backgroundId: media.id } ) } }
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
        const { backgroundUrl, backgroundAlt, backgroundId, phoneUrl, phoneAlt, phoneId, heading, text } = attributes;

        return (
            <div className={ 'wp-block-childress-phone-display phone-display'}>
                <div className='phone-display__bg'>
                    <img className={ 'phone-display__bg-image wp-image-' + backgroundId } src={ backgroundUrl } alt={ backgroundAlt } />
                    <div className='phone-display__phone'>
                        <img className={ 'wp-image-' + phoneId } src={ phoneUrl } alt={ phoneAlt } />
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
