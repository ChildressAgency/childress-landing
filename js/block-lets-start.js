registerBlockType( 'childress/lets-start', {
    title: 'Let\'s Start Block',
    icon: 'align-none',
    category: 'custom-blocks',

    attributes: {
        topText: {
            type: 'string'
        },
        bottomText: {
            type: 'string'
        },
        primaryText: {
            type: 'string'
        },
        secondaryText: {
            type: 'string'
        },
        hoverText: {
            type: 'string'
        },
        backgroundUrl: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { topText, bottomText, primaryText, secondaryText, hoverText, backgroundUrl } = attributes;

        return (
            <div className={ className }>
                <p>
                    <PlainText
                        value={ topText }
                        onChange={ ( value ) => { setAttributes({ topText: value }) } }
                        placeholder='Top Text'
                    />
                </p>
                <p>
                    <PlainText
                        value={ bottomText }
                        onChange={ ( value ) => { setAttributes({ bottomText: value }) } }
                        placeholder='Bottom Text'
                    />
                </p>
                <h4>
                    <PlainText
                        value={ primaryText }
                        onChange={ ( value ) => { setAttributes({ primaryText: value }) } }
                        placeholder='Primary Text'
                    />
                </h4>
                <p>
                    <PlainText
                        value={ secondaryText }
                        onChange={ ( value ) => { setAttributes({ secondaryText: value }) } }
                        placeholder='Secondary Text'
                    />
                </p>
                <p>
                    <PlainText
                        value={ hoverText }
                        onChange={ ( value ) => { setAttributes({ hoverText: value }) } }
                        placeholder='Hover Text'
                    />
                </p>
                <MediaUpload
                    label="Background"
                    onSelect={ media => { setAttributes( { backgroundUrl: media.url } ) } }
                    type="image"
                    value={ backgroundUrl }
                    render={ ({ open }) => (
                        <Button className={ backgroundUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                            { backgroundUrl ? <img src={ backgroundUrl } /> : 'Set Background' }
                        </Button>
                    ) }
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { topText, bottomText, primaryText, secondaryText, hoverText, backgroundUrl } = attributes;
        
        return (
            <div className='wp-block-childress-lets-start lets-start'>
                <p className='lets-start__big-text lets-start__big-text--top'>{ topText }</p>
                <div className='lets-start__inner'>
                    <div className='lets-start__text'>
                        <h4>{ primaryText }</h4>
                        <p>{ secondaryText }</p>
                    </div>
                    <div className='lets-start__hover'>
                        <div className='lets-start__button' style={{ backgroundImage: `url(${ backgroundUrl })` }}>
                            <div className='lets-start__button-text'>{ hoverText }</div>
                        </div>
                    </div>
                </div>
                <p className="lets-start__big-text lets-start__big-text--bottom">{ bottomText }</p>
            </div>
        );
    },
} );
