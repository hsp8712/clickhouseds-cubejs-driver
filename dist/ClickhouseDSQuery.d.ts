import { BaseQuery, BaseFilter } from '@cubejs-backend/schema-compiler';
declare class ClickhouseDSFilter extends BaseFilter {
    /**
     * Customized logic for ignore WHERE-wrapping when the filter is using in FILTER_PARAMS
     * @returns
     */
    filterToWhere(): any;
    likeIgnoreCase(column: any, not: any, param: any, type: any): string;
    castParameter(): "toFloat64(?)" | "?";
}
export declare class ClickhouseDSQuery extends BaseQuery {
    newFilter(filter: any): ClickhouseDSFilter;
    escapeColumnName(name: any): string;
    convertTz(field: any): string;
    timeGroupedColumn(granularity: any, dimension: any): string;
    calcInterval(operation: any, date: any, interval: any): string;
    subtractInterval(date: any, interval: any): string;
    addInterval(date: any, interval: any): string;
    timeStampCast(value: any): string;
    dateTimeCast(value: any): string;
    dimensionsJoinCondition(leftAlias: any, rightAlias: any): string;
    getFieldAlias(id: any): any;
    orderHashToString(hash: any): string;
    groupByClause(): string;
    primaryKeyCount(cubeName: any, distinct: any): string;
    castToString(sql: any): string;
    seriesSql(timeDimension: any): string;
    concatStringsSql(strings: any): string;
    unixTimestampSql(): string;
    preAggregationLoadSql(cube: any, preAggregation: any, tableName: any): any[];
    createIndexSql(indexName: any, tableName: any, escapedColumns: any): string;
    sqlTemplates(): {
        functions: {
            SUM: string;
            MIN: string;
            MAX: string;
            COUNT: string;
            COUNT_DISTINCT: string;
            AVG: string;
            COALESCE: string;
        };
        statements: {
            select: string;
        };
        expressions: {
            column_aliased: string;
            case: string;
            binary: string;
        };
        quotes: {
            identifiers: string;
            escape: string;
        };
        params: {
            param: string;
        };
    };
}
export {};
//# sourceMappingURL=ClickhouseDSQuery.d.ts.map