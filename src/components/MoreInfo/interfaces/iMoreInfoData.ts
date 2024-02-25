export interface iExperience {
    title: string;
    content: iCompany[];
}
export interface iCompany {
    company: string;
    date: string;
    description: string;
}

export interface iTechStack {
    title: string;
    content: iTechnology[];
}

export interface iTechnology {
    name: string;
    image: string;
}

export interface iEducation {
    title: string;
    content: iEducationItem[];
}

export interface iEducationItem {
    title: string;
    school: string;
    startDate: string;
    endDate: string;
}

export interface iContactMe {
    title: string;
    content: { [key: string]: string }[];
}

export interface iMoreInfoData {
    experience: iExperience;
    techStack: iTechStack;
    education: iEducation;
    contactMe: iContactMe;
}
