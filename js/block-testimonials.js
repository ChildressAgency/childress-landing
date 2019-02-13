registerBlockType( 'childress/testimonials', {
    title: 'Testimonials',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 -107 512 512'
        },
        createElement( 'path',
            {
                d: 'm461.574219 34.949219c-31.066407-22.539063-72.058594-34.949219-115.429688-34.949219-43.363281 0-84.351562 12.410156-115.414062 34.949219-32.515625 23.589843-50.421875 55.367187-50.421875 89.480469 0 31.847656 16.050781 62.144531 45.195312 85.3125 26.894532 21.378906 62.8125 34.867187 101.519532 38.183593 41.773437 30.378907 103.0625 47.527344 107.636718 48.773438 2.257813.636719 4.601563.960937 6.957032.960937 9.546874 0 18.316406-5.195312 22.847656-13.496094 5.832031-10.566406 3.65625-23.65625-5.320313-31.863281-11.390625-10.347656-17.464843-18.46875-20.699219-24.285156 20.296876-10.097656 37.402344-23.464844 49.921876-39.101563 15.460937-19.304687 23.632812-41.605468 23.632812-64.484374 0-34.113282-17.90625-65.890626-50.425781-89.480469zm-59.9375 131.78125h-110.964844c-8.289063 0-15.007813-6.71875-15.007813-15.007813 0-8.289062 6.71875-15.007812 15.007813-15.007812h110.964844c8.289062 0 15.007812 6.71875 15.007812 15.007812 0 8.289063-6.71875 15.007813-15.007812 15.007813zm0-50.246094h-110.964844c-8.289063 0-15.007813-6.71875-15.007813-15.007813 0-8.289062 6.71875-15.011718 15.007813-15.011718h110.964844c8.289062 0 15.007812 6.722656 15.007812 15.011718 0 8.289063-6.71875 15.007813-15.007812 15.007813zm0 0"/><path d="m150.433594 122.105469c0-23.8125 6.71875-46.746094 19.476562-67.628907-10.722656-1.996093-21.796875-3.035156-33.046875-3.035156-35.640625 0-69.355469 10.222656-94.941406 28.78125-27.03125 19.613282-41.921875 46.109375-41.921875 74.617188 0 19.109375 6.796875 37.710937 19.648438 53.804687 9.804687 12.269531 22.984374 22.84375 38.570312 31.023438-2.714844 4.152343-7.195312 9.628906-14.609375 16.363281-8.210937 7.503906-10.207031 19.527344-4.882813 29.179688 4.195313 7.679687 12.246094 12.449218 21.011719 12.449218 2.175781 0 4.332031-.296875 6.417969-.886718 4.179688-1.144532 53.210938-14.949219 87.195312-39.371094 23.253907-2.085938 44.96875-8.550782 63.46875-18.617188-2.597656-1.867187-5.144531-3.78125-7.625-5.753906-37.894531-30.121094-58.761718-69.515625-58.761718-110.925781zm0 0'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        
    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ className + " testimonials" }>
                <InnerBlocks
                    allowedBlocks={['childress/testimonial']}
                    template={[
                        ['childress/testimonial']
                    ]}
                />
            </div>
        );
    },

    save( { attributes } ) {
        return (
            <div className="wp-block-childress-testimonials testimonials">
                <div className="container">
                    <div className="testimonials__inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
} );

///////////////////////////////////////////////////////////////////////////////
// CASE STUDY                                                                //
///////////////////////////////////////////////////////////////////////////////

registerBlockType( 'childress/testimonial', {
    title: 'Testimonial',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 -107 512 512'
        },
        createElement( 'path',
            {
                d: 'm461.574219 34.949219c-31.066407-22.539063-72.058594-34.949219-115.429688-34.949219-43.363281 0-84.351562 12.410156-115.414062 34.949219-32.515625 23.589843-50.421875 55.367187-50.421875 89.480469 0 31.847656 16.050781 62.144531 45.195312 85.3125 26.894532 21.378906 62.8125 34.867187 101.519532 38.183593 41.773437 30.378907 103.0625 47.527344 107.636718 48.773438 2.257813.636719 4.601563.960937 6.957032.960937 9.546874 0 18.316406-5.195312 22.847656-13.496094 5.832031-10.566406 3.65625-23.65625-5.320313-31.863281-11.390625-10.347656-17.464843-18.46875-20.699219-24.285156 20.296876-10.097656 37.402344-23.464844 49.921876-39.101563 15.460937-19.304687 23.632812-41.605468 23.632812-64.484374 0-34.113282-17.90625-65.890626-50.425781-89.480469zm-59.9375 131.78125h-110.964844c-8.289063 0-15.007813-6.71875-15.007813-15.007813 0-8.289062 6.71875-15.007812 15.007813-15.007812h110.964844c8.289062 0 15.007812 6.71875 15.007812 15.007812 0 8.289063-6.71875 15.007813-15.007812 15.007813zm0-50.246094h-110.964844c-8.289063 0-15.007813-6.71875-15.007813-15.007813 0-8.289062 6.71875-15.011718 15.007813-15.011718h110.964844c8.289062 0 15.007812 6.722656 15.007812 15.011718 0 8.289063-6.71875 15.007813-15.007812 15.007813zm0 0"/><path d="m150.433594 122.105469c0-23.8125 6.71875-46.746094 19.476562-67.628907-10.722656-1.996093-21.796875-3.035156-33.046875-3.035156-35.640625 0-69.355469 10.222656-94.941406 28.78125-27.03125 19.613282-41.921875 46.109375-41.921875 74.617188 0 19.109375 6.796875 37.710937 19.648438 53.804687 9.804687 12.269531 22.984374 22.84375 38.570312 31.023438-2.714844 4.152343-7.195312 9.628906-14.609375 16.363281-8.210937 7.503906-10.207031 19.527344-4.882813 29.179688 4.195313 7.679687 12.246094 12.449218 21.011719 12.449218 2.175781 0 4.332031-.296875 6.417969-.886718 4.179688-1.144532 53.210938-14.949219 87.195312-39.371094 23.253907-2.085938 44.96875-8.550782 63.46875-18.617188-2.597656-1.867187-5.144531-3.78125-7.625-5.753906-37.894531-30.121094-58.761718-69.515625-58.761718-110.925781zm0 0'
            }
        )
    ),
    category: 'custom-blocks',
    parent: false,

    attributes: {
        testimonial: {
            type: 'string'
        },
        portraitUrl: {
            type: 'string'
        },
        portraitAlt: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { testimonial, portraitUrl, portraitAlt, name } = attributes;

        return (
            <div className={ className }>
                <div className='testimonial'>
                    <p>
                        <PlainText
                            value={ testimonial }
                            onChange={ ( value ) => { setAttributes({ testimonial: value }) } }
                            placeholder="Testimonial"
                        />
                    </p>
                    <div className='testimonial__info'>
                        <div className='testimonial__image'>
                            <MediaUpload
                                label="Portrait"
                                onSelect={ media => { setAttributes( { portraitUrl: media.url, portraitAlt: media.alt } ) } }
                                type="image"
                                value={ portraitUrl }
                                render={ ({ open }) => (
                                    <Button className={ portraitUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                        { portraitUrl ? <img src={ portraitUrl } /> : 'Set Portrait' }
                                    </Button>
                                ) }
                            />
                        </div>
                        <p>
                            <PlainText
                                value={ name }
                                onChange={ ( value ) => { setAttributes({ name: value }) } }
                                placeholder="Name"
                            />
                        </p>
                    </div>
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { testimonial, portraitUrl, portraitAlt, name } = attributes;

        return (
            <div className={ 'wp-block-childress-testimonial' }>
                <div className='testimonial'>
                    <div className='testimonial__quotes'>
                        <img src='wp-content\/uploads\/2019\/02\/CA_LandingPage_QuoteMarks-10.svg' alt='quotes'/>
                    </div>
                    <div className='testimonial__content'>
                        <div className='testimonial__text'>
                            <img className='testimonial__inner-quotes' src='wp-content\/uploads\/2019\/02\/CA_LandingPage_QuoteMarks-10.svg' alt='quotes'/>
                            <p>{ testimonial }</p>
                        </div>
                        <div className='testimonial__info'>
                            <div className='testimonial__image'>
                                <img src={ portraitUrl } alt={ portraitAlt } />
                            </div>
                            <p>{ name }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
} );