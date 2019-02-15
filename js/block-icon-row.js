registerBlockType( 'childress/icon-row', {
    title: 'Icon Row',
    icon: 'images-alt2',
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title } = attributes;

        return (
            <div className="icon-row">
                <h2 className="icon-row__title">
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder="Title"
                    />
                </h2>
                <div className="icon-row__inner">
                    <InnerBlocks
                        allowedBlocks={['childress/icon-row-icon']}
                        template={[
                            ['childress/icon-row-icon'],
                            ['childress/icon-row-icon'],
                            ['childress/icon-row-icon'],
                            ['childress/icon-row-icon'],
                        ]}
                        templateLock='all'
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title } = attributes;

        return (
            <div className="icon-row">
                <div className="container">
                    <h2 className="icon-row__title">{ title }</h2>
                    <div className="icon-row__inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
} );

registerBlockType( 'childress/icon-row-icon', {
    title: 'Icon',
    icon: 'format-image',
    category: 'custom-blocks',
    parent: ['childress/icon-row'],

    attributes: {
        iconUrl: {
            type: 'string'
        },
        iconAlt: {
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
        const { iconUrl, iconAlt, title, text } = attributes;

        return (
            <div className="icon-row__item">
                <div className="icon-row__icon">
                    <MediaUpload
                        label="Icon"
                        onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt } ) } }
                        type="image"
                        value={ iconUrl }
                        render={ ({ open }) => (
                            <Button className={ iconUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { iconUrl ? <img src={ iconUrl } /> : 'Select Icon' }
                            </Button>
                        ) }
                    />
                </div>
                <p className="icon-row__icon-title">
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder="Title"
                    />
                </p>
                <p className="icon-row__text">
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
        const { iconUrl, iconAlt, title, text } = attributes;

        return (
            <div className="icon-row__item">
                <div className="icon-row__icon">
                    <img src={ iconUrl } alt={ iconAlt } />
                </div>
                <p className="icon-row__icon-title">{ title }</p>
                <p className="icon-row__text">{ text }</p>
            </div>
        );
    },
} );

