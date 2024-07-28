import axiosDefault from "../utils/axiosConfig";
import {ApiRoutes} from "../utils/apiRoutes";
import {AxiosResponse} from "axios";

export const FileService = {

    upload: async (file: File, token: string) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('media_type', file.type);

        const response: AxiosResponse<any, any> = await axiosDefault.post(`${process.env.REACT_APP_API_URL}/${ApiRoutes.FILE}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data.success;
    }
}