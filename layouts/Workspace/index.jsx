import { 
    SidebarParent, 
    SidebarPaths, 
    SideHeader,
    AddPath,
    RemovePath
} from '@layouts/Workspace/styles';
import React, { useCallback, useState } from 'react';
import gravatar from 'gravatar';
import CreatePathModal from '@components/CreatePathModal';
import RemovePathModal from '@components/RemovePathModal';

/**
 * 임시 테스트 데이터
 */
const SideItems = [
    {
        name: "item1"
    },
    {
        name: "item2"
    },
    {
        name: "item3"
    },
    {
        name: "item4"
    }
];

const Workspace = () => {
    const [showCreatePathModal, setShowCreatePathModal] = useState(false);
    const [showRemovePathModal, setShowRemovePathModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setShowCreatePathModal(false);
        setShowRemovePathModal(false);
    }, []);

    const toggleCreatePathModal = useCallback(() => {
        setShowCreatePathModal((prev) => !prev);
    }, []);

    const toggleRemovePathModal = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowRemovePathModal((prev) => !prev);
    }, []);

    const SidebarConsole = useCallback(() => {
        console.log('item button clicked');
    }, [])

    return (
        <>
            <SidebarParent>
                <SideHeader>
                    <img src={gravatar.url('test@test.com', { s: '36', d: 'retro' })} alt={"nickname"} />
                    <h2>nickname</h2>
                </SideHeader>
                {
                    SideItems.map(item => (
                        <SidebarPaths key={item.name} onClick={SidebarConsole}>
                            <span>{item.name}</span>
                            <RemovePath className="fa fa-minus" onClick={toggleRemovePathModal}></RemovePath>
                        </SidebarPaths>
                    ))
                }
                <AddPath 
                    className="fa fa-plus"
                    onClick={toggleCreatePathModal}
                />
            </SidebarParent>
            
            <CreatePathModal
                show={showCreatePathModal}
                onCloseModal={onCloseModal}
            />
            <RemovePathModal
                show={showRemovePathModal}
                onCloseModal={onCloseModal}
            />
        </>
    );
};

export default Workspace;