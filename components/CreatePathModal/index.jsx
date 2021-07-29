import { Button } from './styles';
import React, { useCallback, useState } from 'react';
import Modal from '@components/Modal'
import useInput from '@hooks/useInput';

const CreatePathModal = ({show, onCloseModal}) => {
    const [path, onChangePath, setPath] = useInput('');

    const makeNewPath = useCallback(
        (e) => {
            e.preventDefault();
        },
        [path]
    )

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <form onSubmit={makeNewPath}>
                <span>Path Name</span>
                <input id="path" type="text" value={path} onChange={onChangePath}/>
                <Button type="submit">생성하기</Button>
            </form>
        </Modal>
    )
}

export default CreatePathModal;