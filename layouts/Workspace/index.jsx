import { 
    SidebarParent, 
    SidebarPaths, 
    SideHeader,
    AddPath,
    RemovePath
} from '@layouts/Workspace/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gravatar from 'gravatar';
import CreatePathModal from '@components/CreatePathModal';
import RemovePathModal from '@components/RemovePathModal';

const Workspace = () => {
    const [showCreatePathModal, setShowCreatePathModal] = useState(false);
    const [showRemovePathModal, setShowRemovePathModal] = useState(false);

    const directory = useSelector((state) => state.directory);

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

    const sideMenuDirectoryClicked = useCallback(() => {
    }, []);
    
    return (
        <>
            <SidebarParent>
                <SideHeader>
                    <img src={gravatar.url('test@test.com', { s: '36', d: 'retro' })} alt={"nickname"} />
                    <h2>nickname</h2>
                </SideHeader>
                {
                    directory.rootFiles.map(item => (
                        <SidebarPaths key={item} onClick={sideMenuDirectoryClicked}>
                            <span>{item}</span>
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