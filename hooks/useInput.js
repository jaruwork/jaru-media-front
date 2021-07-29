import { SetStateAction } from 'react';
import { Dispatch, useCallback, useState } from 'react';

const useInput = (initailData) => {
    const [value, setValue] = useState(initailData);
    const handelr = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handelr, setValue];
};

export default useInput;