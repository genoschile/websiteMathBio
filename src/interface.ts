export interface Member {
    data: {
        name: string;
        id: number;
        position: string;
        grade: string;
        email?: string;
        image: string;
        publications?: any[];
        talks?: { id: number }[];
        projects?: { id: number }[];
    };
}


export interface Members {
    principal: Member[];
    resto: Member[];
}