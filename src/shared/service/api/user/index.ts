import { Api } from '../index'

const postUser = async (email: string, nickname: string, password: string) => {
    try {
        const id = null;
        const body = {
            id,
            email,
            password,
            login: nickname
        };

        const { data } = await Api.post("/save", body);

        return data;
    } catch(error: any) {
        throw (error.response.data);
    }
}

export const userServices = {
    postUser
};
