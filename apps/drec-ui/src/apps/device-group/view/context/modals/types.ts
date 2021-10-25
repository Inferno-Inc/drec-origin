import { GroupedDevicesDTO } from '@energyweb/origin-drec-api-client';
import { DeviceOrderBy } from '../../../../../utils';
import { DeviceGroupModalsActionsEnum } from './reducer';

export type TAutoGroupSelected = {
    open: boolean;
    selected: GroupedDevicesDTO[];
    groupRules: DeviceOrderBy[];
};

export type TCreateNewGroup = {
    open: boolean;
    group: GroupedDevicesDTO;
};
export interface IDeviceGroupModalsStore {
    deviceGroupDelete: {
        open: boolean;
        groupId: number;
    };
    autoGroupSelected: TAutoGroupSelected;
    createNewGroup: TCreateNewGroup;
}

interface IDeviceGroupDeleteAction {
    type: DeviceGroupModalsActionsEnum.SHOW_DELETE_GROUP;
    payload: {
        open: boolean;
        groupId: number;
    };
}

interface IDeviceGroupAutoGroupActions {
    type: DeviceGroupModalsActionsEnum.AUTO_GROUP_SELECTED;
    payload: TAutoGroupSelected;
}

interface IDeviceGroupCreateNewAction {
    type: DeviceGroupModalsActionsEnum.CREATE_NEW_GROUP;
    payload: TCreateNewGroup;
}

export type TDeviceGroupModalsAction =
    | IDeviceGroupDeleteAction
    | IDeviceGroupAutoGroupActions
    | IDeviceGroupCreateNewAction;