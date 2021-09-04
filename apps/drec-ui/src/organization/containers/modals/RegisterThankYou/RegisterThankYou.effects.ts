import { GenericModalProps } from '@energyweb/origin-ui-core';
import { useNavigate } from 'react-router';
import {
    OrganizationModalsActionsEnum,
    useOrgModalsDispatch,
    useOrgModalsStore
} from '../../../context';
import { useRegisterThankYouLogic } from '../../../logic';

export const useRegisterThankYouEffects = () => {
    const { registerThankYou: open } = useOrgModalsStore();
    const dispatchModals = useOrgModalsDispatch();
    const navigate = useNavigate();

    const closeModal = () => {
        dispatchModals({
            type: OrganizationModalsActionsEnum.SHOW_REGISTER_THANK_YOU,
            payload: false
        });
        navigate('/organization/my');
    };

    const { title, text, buttons } = useRegisterThankYouLogic(closeModal);

    const dialogProps: GenericModalProps['dialogProps'] = {
        maxWidth: 'sm'
    };

    return { title, text, buttons, open, dialogProps };
};
