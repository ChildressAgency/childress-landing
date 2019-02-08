registerBlockType( 'childress/icon-grid', {
    title: 'Icon Grid',
    icon: 'screenoptions',
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title } = attributes;

        return (
            <div className={ className + " icon-grid" }>
                <h2 className="icon-grid__title">
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder="Title"
                    />
                </h2>
                <div className="icon-grid__inner">
                    <InnerBlocks
                        allowedBlocks={['childress/icon-grid-icon']}
                        template={[
                            ['childress/icon-grid-icon'],
                            ['childress/icon-grid-icon'],
                            ['childress/icon-grid-icon'],
                            ['childress/icon-grid-icon'],
                        ]}
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title } = attributes;

        return (
            <div className="icon-grid">
                <div className="container">
                    <h2 className="icon-grid__title">{ title }</h2>
                    <div className="icon-grid__inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
} );

registerBlockType( 'childress/icon-grid-icon', {
    title: 'Icon',
    icon: 'format-image',
    category: 'custom-blocks',
    parent: ['childress/icon-grid'],

    attributes: {
        iconUrl: {
            type: 'string'
        },
        iconAlt: {
            type: 'string'
        },
        iconHoverUrl: {
            type: 'string'
        },
        iconHoverAlt: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { iconUrl, iconAlt, iconHoverUrl, iconHoverAlt, title, text } = attributes;

        return (
            <div className="icon-grid__item">
                <div className="icon-grid__icon">
                    <MediaUpload
                        label="Icon"
                        onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt } ) } }
                        type="image"
                        value={ iconUrl }
                        render={ ({ open }) => (
                            <Button className={ iconUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { iconUrl ? iconUrl : 'Select Icon' }
                            </Button>
                        ) }
                    />
                    <MediaUpload
                        label="Icon"
                        onSelect={ media => { setAttributes( { iconHoverUrl: media.url, iconHoverAlt: media.alt } ) } }
                        type="image"
                        value={ iconHoverUrl }
                        render={ ({ open }) => (
                            <Button className={ iconHoverUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { iconHoverUrl ? iconHoverUrl : 'Select Hover Icon' }
                            </Button>
                        ) }
                    />
                </div>
                <p className="icon-grid__icon-title">
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder="Title"
                    />
                </p>
                <p className="icon-grid__text">
                    <PlainText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder="Text"
                    />
                </p>
            </div>
        );
    },

    save( { attributes } ) {
        const { iconUrl, iconAlt, iconHoverUrl, iconHoverAlt, title, text } = attributes;

        return (
            <div className="icon-grid__item">
                <div className="icon-grid__icon">
                    <img className="icon-grid__hover" src={ iconHoverUrl } alt={ iconHoverAlt } />
                    <img src={ iconUrl } alt={ iconAlt } />
                </div>
                <div className="icon-grid__info">
                    <p className="icon-grid__icon-title">{ title }</p>
                    <p className="icon-grid__text">{ text }</p>
                </div>
            </div>
        );
    },
} );

