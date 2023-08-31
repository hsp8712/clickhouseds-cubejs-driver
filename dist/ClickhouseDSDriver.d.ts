import { ClickHouseDriver } from '@cubejs-backend/clickhouse-driver';
import { ClickhouseDSQuery } from './ClickhouseDSQuery';
export declare class ClickhouseDsDriver extends ClickHouseDriver {
    static dialectClass(): typeof ClickhouseDSQuery;
    protected queryResponse(query: string, values: unknown[]): any;
}
//# sourceMappingURL=ClickhouseDSDriver.d.ts.map