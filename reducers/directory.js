export const MOVE_DIRECTORY = 'directory/MOVE_DIRECTORY';

// TODO: 이동된 디렉토리에 맞게 payload 넘겨주기
export const moveDirectory = () => {
    return {
        type: MOVE_DIRECTORY,
    }
}

/**
 * currentFiles: 현재 directory안에 들어있는 파일들
 */
const initialStates = {
    rootFiles: [
        'FILE1',
        'FILE2',
        'FILE3',
        'FILE4'
    ],
    currentFiles: [],  
    selectedFile: '',
    prevFiles:''
}

const reducers = (state = initialStates, action) => {
    switch (action.type) {
        case MOVE_DIRECTORY: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;