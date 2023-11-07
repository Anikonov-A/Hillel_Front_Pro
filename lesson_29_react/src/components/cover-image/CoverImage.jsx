import {string} from 'prop-types'
export default function CoverImage  ({ src, alt, width, height }) {
    return(
        <div style={{ width, height}}>
            <img src={src} alt={alt} style={{ width: '100%', height: '100%'}} />
        </div>
    );
}

CoverImage.propTypes = {
    src: string.isRequired,
    alt: string,
    width: string,
    height: string,
};
