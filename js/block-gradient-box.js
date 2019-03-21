registerBlockType( 'childress/gradient-box', {
    title: 'Gradient Box',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M501.333,0H362h-21.333h-95.333H224h-74.667H128H85.333H64H10.667C4.776,0,0,4.776,0,10.667v490.667 C0,507.224,4.776,512,10.667,512H64h21.333H128h21.333H224h21.333h95.333H362h139.333c5.891,0,10.667-4.776,10.667-10.667V10.667 C512,4.776,507.224,0,501.333,0z M64,490.667H21.333V21.333H64V490.667z M128,490.667H85.333V21.333H128V490.667z M224,490.667 h-74.667V21.333H224V490.667z M340.667,490.667h-95.333V21.333h95.333V490.667z M490.667,490.667H362V21.333h128.667V490.667z'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        text: {
            type: 'string'
        },
        colorStart: {
            type: 'string',
            default: '#ffaa48'
        },
        colorEnd: {
            type: 'string',
            default: '#f08f23'
        },
        textColor: {
            type: 'string',
            default: '#ffffff'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, colorStart, colorEnd, textColor } = attributes;

        function setColorStart( ...args ){
            setAttributes({ colorStart: args[0] });
        }

        function setColorEnd( ...args ){
            setAttributes({ colorEnd: args[0] });
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
                                value: colorStart,
                                onChange: setColorStart,
                                label: 'Left Color'
                            },
                            {
                                value: colorEnd,
                                onChange: setColorEnd,
                                label: 'Right Color'
                            },
                            {
                                value: textColor,
                                onChange: setTextColor,
                                label: 'Text Color'
                            },
                        ]}
                    />
                </InspectorControls>
                <section className={ className + ' gradient-box' } style={{ background: `linear-gradient(to right, ${ colorStart }, ${ colorEnd })` }}>
                    <h3 className='gradient-box__title' style={{ color: textColor }}>
                        <RichText
                            value={ text }
                            onChange={ ( value ) => { setAttributes({ text: value }) } }
                            placeholder='Text'
                        />
                    </h3>
                </section>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { text, colorStart, colorEnd, textColor } = attributes;

        return (
            <section className='gradient-box' style={{ backgroundColor: colorStart }}>
                <div className='gradient-box__gradient' style={{ backgroundImage: `linear-gradient(to right, ${ colorStart }, ${ colorEnd } 25%, ${ colorStart } 75%)` }}></div>
                <h3 className='gradient-box__title container' style={{ color: textColor }}>
                    <RichText.Content value={ text } />
                </h3>
            </section>
        );
    },
} );
