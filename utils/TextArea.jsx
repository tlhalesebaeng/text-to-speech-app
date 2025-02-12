import { forwardRef } from 'react';

const TextArea = forwardRef(function TextArea({}, ref) {
    return <textarea ref={ref} />;
});

export default TextArea;
