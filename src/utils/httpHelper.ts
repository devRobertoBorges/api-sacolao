interface httpResponse {
    statusCode: number;
    body: any
};

export const ok = async (data:any): Promise <httpResponse> => {
    return{
        statusCode:200,
        body: data,
    };
};

export const notFound = async (): Promise <httpResponse> => {
    return{
        statusCode: 404,
        body: 
            {
                message: "id not found"
            }
    };
};

export const created = async (): Promise<httpResponse> => {
    return {
        statusCode:201,
        body: {
            message: "created"
        }
    };
};

export const  serverError = async (): Promise<httpResponse> => {
    return {
        statusCode: 500,
        body: {
            message: "serverError"
        }
    };
};