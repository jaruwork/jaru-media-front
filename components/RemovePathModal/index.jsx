import React from 'react';
import { Button } from './styles';
import Modal from '../Modal';

const RemovePathModal = ({show, onCloseModal}) => {

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <h4>정말 삭제하시겠습니까?</h4>
            <Button onClick={onCloseModal}>확인</Button>
            <Button onClick={onCloseModal}>취소</Button>
        </Modal>
    );
}

export default RemovePathModal;