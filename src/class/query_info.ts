class QueryInfo {
    page = 0;
    size = 10;
    constructor(page?: number, size?: number) {
        if (page !== undefined) this.page = page;
        if (size !== undefined) this.size = size;
    }
}

export default QueryInfo;