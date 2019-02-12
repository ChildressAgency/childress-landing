const icon = createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M 6 2 C 4.9 2 4 2.9 4 4 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 18.178 22 18.347719 21.969781 18.511719 21.925781 L 14.886719 18.300781 C 14.193719 18.737781 13.38 19 12.5 19 C 10.015 19 8 16.985 8 14.5 C 8 12.015 10.015 10 12.5 10 C 14.985 10 17 12.015 17 14.5 C 17 15.38 16.737781 16.193719 16.300781 16.886719 L 19.925781 20.511719 C 19.969781 20.347719 20 20.178 20 20 L 20 8 L 14 2 L 6 2 z M 12.5 12 A 2.5 2.5 0 0 0 10 14.5 A 2.5 2.5 0 0 0 12.5 17 A 2.5 2.5 0 0 0 15 14.5 A 2.5 2.5 0 0 0 12.5 12 z'
            }
        )
    );

registerBlockType( 'childress/case-studies', {
    title: 'Case Studies',
    icon: icon,
    category: 'custom-blocks',

    attributes: {
        heading: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { heading } = attributes;

        return (
            <div className={ className + " case-studies" }>
                <h2 className="case-studies__heading">
                    <PlainText
                        value={ heading }
                        onChange={ ( value ) => { setAttributes({ heading: value }) } }
                        placeholder="Heading"
                    />
                </h2>
                <InnerBlocks
                    allowedBlocks={['childress/case-study']}
                    template={[
                        ['childress/case-study']
                    ]}
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { heading } = attributes;

        return (
            <div className="wp-block-childress-case-studies case-studies">
                <div className="container">
                    <h2 className="case-studies__heading">{ heading }</h2>
                    <div className="case-studies__inner">
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

registerBlockType( 'childress/case-study', {
    title: 'Case Study',
    icon: icon,
    category: 'custom-blocks',
    parent: false,

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        link: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
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
        const { imageUrl, imageAlt, title, link, text, testimonial, portraitUrl, portraitAlt, name } = attributes;

        return (
            <div className={ className }>
                <div className='case-study'>
                    <div className='case-study__image'>
                        <MediaUpload
                            label="Image"
                            onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt } ) } }
                            type="image"
                            value={ imageUrl }
                            render={ ({ open }) => (
                                <Button className={ imageUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { imageUrl ? <img src={ imageUrl } /> : 'Set Image' }
                                </Button>
                            ) }
                        />
                    </div>
                    <div className='case-study__text'>
                        <p>
                            <URLInputButton
                                url={ link }
                                onChange={ ( url ) => { setAttributes({ link: url }) } }
                            />
                            <PlainText
                                value={ title }
                                onChange={ ( value ) => { setAttributes({ title: value }) } }
                                placeholder="Title"
                            />
                        </p>
                        <p>
                            <PlainText
                                value={ text }
                                onChange={ ( value ) => { setAttributes({ text: value }) } }
                                placeholder="Text"
                            />
                        </p>
                    </div>
                </div>
                <div className='case-study-testimonial'>
                    <p>
                        <PlainText
                            value={ testimonial }
                            onChange={ ( value ) => { setAttributes({ testimonial: value }) } }
                            placeholder="Testimonial"
                        />
                    </p>
                    <div className='case-study-testimonial__info'>
                        <div className='case-study-testimonial__image'>
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
        const { imageUrl, imageAlt, title, link, text, testimonial, portraitUrl, portraitAlt, name } = attributes;

        return (
            <div className={ 'wp-block-childress-case-study' }>
                <div className='case-study'>
                    <div className='case-study__image'><img src={ imageUrl } alt={ imageAlt } /></div>
                    <div className='case-study__text'>
                        <a href={ link } class="case-study__title">{ title }</a>
                        <p>{ text }</p>
                    </div>
                </div>
                <div className='case-study-testimonial'>
                    <div className='case-study-testimonial__quotes'>
                        <img src='wp-content\/uploads\/2019\/02\/CA_LandingPage_QuoteMarks-10.svg' alt='quotes'/>
                    </div>
                    <div className='case-study-testimonial__content'>
                        <div className='case-study-testimonial__text'>
                            <img className='case-study-testimonial__inner-quotes' src='wp-content\/uploads\/2019\/02\/CA_LandingPage_QuoteMarks-10.svg' alt='quotes'/>
                            <p>{ testimonial }</p>
                        </div>
                        <div className='case-study-testimonial__info'>
                            <div className='case-study-testimonial__image'>
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
