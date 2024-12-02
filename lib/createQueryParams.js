export const createQueryParams = (params) => {
    const searchParams = new URLSearchParams(params);
    return searchParams.toString();
}

export default createQueryParams;