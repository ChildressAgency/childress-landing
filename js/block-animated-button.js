registerBlockType( 'childress/animated-button', {
    title: 'Animated Button',
    icon: 'admin-settings',
    category: 'custom-blocks',

    attributes: {
        text: {
            type: 'string'
        },
        link: {
            type: 'string'
        },
        backgroundColor: {
            type: 'string',
            default: '#ed1968'
        },
        textColor: {
            type: 'string',
            default: '#fff'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, link, backgroundColor, textColor } = attributes;

        function setBackgroundColor( ...args ){
            setAttributes({ backgroundColor: args[0] });
        }

        function setTextColor( ...args ){
            setAttributes({ textColor: args[0] });
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelColorSettings
                        title="Color Settings"
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: setBackgroundColor,
                                label: 'Background Color'
                            },
                            {
                                value: textColor,
                                onChange: setTextColor,
                                label: 'Text Color'
                            }
                        ]}
                    />
                </InspectorControls>
                <div className={ className + ' animated-button' } style={{ backgroundColor: backgroundColor, color: textColor }}>
                    <URLInputButton
                        url={ link }
                        onChange={ ( url ) => { setAttributes({ link: url }) } }
                    />
                    <PlainText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder='Text'
                    />
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { text, link, backgroundColor, textColor } = attributes;

        return (
            <a className='animated-button' href={ link } style={{ backgroundColor: backgroundColor }}>
                <span className='animated-button__inner' style={{ color: textColor }}>{ text }</span>
            </a>
        );
    },
} );
