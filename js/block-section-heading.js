registerBlockType( 'childress/section-heading', {
    title: 'Section Heading',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M5 4v3h5.5v12h3V7H19V4z'
            }
        ),
        createElement( 'path',
            {
                fill: 'none',
                d: 'M0 0h24v24H0V0z'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text } = attributes;

        return (
            <div className={ className + ' section-heading' }>
                <h2>
                    <PlainText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder='Section Heading'
                    />
                </h2>
            </div>
        );
    },

    save( { attributes } ) {
        const { text } = attributes;

        return (
            <div className='section-heading'>
                <h2>{ text }</h2>
            </div>
        );
    },
} );