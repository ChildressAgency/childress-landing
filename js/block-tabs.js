const { times } = lodash;

registerBlockType( 'childress/tabs', {
    title: 'Tabs',
    icon: createElement('svg', 
        { 
            width: 408.328,
            height: 408.328,
            viewBox: '0 0 408.328 408.328'
        },
        createElement( 'path',
            {
                d: 'M146.545,67.478V32.185c0-17.638-14.357-31.989-32.001-31.989H32.001C14.357,0.195,0,14.547,0,32.185v343.959 c0,17.638,14.357,31.989,32.001,31.989h344.326c17.644,0,32.001-14.352,32.001-31.989V68.338L146.545,67.478z M371.751,371.569 H36.57V98.081h335.188v273.488H371.751z M268.171,59.215l-98.062-0.006V35.465c0-11.804,9.605-21.402,21.409-21.402h55.245 c11.798,0,21.409,9.599,21.409,21.402V59.215z M395.525,59.215l-98.06-0.006V35.465c0-11.804,9.599-21.402,21.408-21.402h55.242 c11.798,0,21.409,9.599,21.409,21.402V59.215z'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        },
        numTabs: {
            type: 'number',
            default: 3
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, numTabs } = attributes;

        const getTabsTemplate = ( tabs ) => {
            var result = [];

            var titles = times( tabs, () => [ 'childress/tabs-title' ] );
            var contents = times( tabs, () => [ 'childress/tabs-content' ] );

            result = [
                [ 'childress/tabs-section', { classes: `tabs-section--titles has-${ numTabs }-tabs` }, titles ],
                [ 'childress/tabs-section', { classes: `tabs-section--contents has-${ numTabs }-tabs` }, contents ]
            ];

            console.log( result );

            return result;
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label={ 'Number of Tabs' }
                            value={ numTabs }
                            onChange={ ( value ) => {
                                setAttributes({ numTabs: value });
                            } }
                            min={ 2 }
                            max={ 5 }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className + " tabs" }>
                    <h2 className="tabs__title">
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder="Heading"
                        />
                    </h2>
                    <InnerBlocks
                        template={ getTabsTemplate( numTabs ) }
                        templateLock='all'
                    />
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { title, numTabs } = attributes;

        return (
            <div className="tabs">
                <div className="container">
                    <h2 className="tabs__title">{ title }</h2>
                    <div className="tabs__inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
} );

///////////////////////////////////////////////////////////////////////////////
// SECTION                                                                   //
///////////////////////////////////////////////////////////////////////////////

registerBlockType( 'childress/tabs-section', {
    title: 'Tab Section',
    icon: 'category',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        classes: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { classes } = attributes;

        return (
            <div className={ className + ' ' + classes }>
                <InnerBlocks />
            </div>
        );
    },

    save( { attributes } ) {
        const { classes } = attributes;

        return (
            <div className={ 'wp-block-childress-tabs-section ' + classes }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

///////////////////////////////////////////////////////////////////////////////
// TITLE                                                                     //
///////////////////////////////////////////////////////////////////////////////

registerBlockType( 'childress/tabs-title', {
    title: 'Tab Title',
    icon: 'category',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title } = attributes;

        return (
            <h3 className="tab__title">
                <PlainText
                    value={ title }
                    onChange={ ( value ) => { setAttributes({ title: value }) } }
                    placeholder="Title"
                />
            </h3>
        );
    },

    save( { attributes } ) {
        const { title } = attributes;

        return (
            <h3 className="tab__title">{ title }</h3>
        );
    },
} );

///////////////////////////////////////////////////////////////////////////////
// CONTENT                                                                   //
///////////////////////////////////////////////////////////////////////////////

registerBlockType( 'childress/tabs-content', {
    title: 'Tab Content',
    icon: 'category',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt } = attributes;

        return (
            <div className="tab__content">
                <div className="tab__text">
                    <InnerBlocks
                        template={[
                            ['core/paragraph']
                        ]}
                        templateLock={ false }
                    />
                </div>
                <div className="tab__image">
                    <MediaUpload
                        label="Icon"
                        onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt } ) } }
                        type="image"
                        value={ imageUrl }
                        render={ ({ open }) => (
                            <Button className={ imageUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { imageUrl ? <img src={ imageUrl } /> : 'Select Image' }
                            </Button>
                        ) }
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt } = attributes;

        return (
            <div className="tab__content">
                <div className="tab__text">
                    <InnerBlocks.Content />
                </div>
                <div className="tab__image">
                    <img src={ imageUrl } alt={ imageAlt } />
                </div>
            </div>
        );
    },
} );

