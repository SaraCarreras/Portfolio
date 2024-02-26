import { iMoreInfoData } from "../interfaces/iMoreInfoData";

export type SectionKey = keyof iMoreInfoData;

export type ComponentMapper = {
    [key in SectionKey]: React.ComponentType<{ data: iMoreInfoData[key] }>;
};

export type SelectedComponentType<T> = React.ComponentType<{ data: T }>;
