import { ClickHouseDriver } from '@cubejs-backend/clickhouse-driver';
import { ClickhouseDSQuery } from './ClickhouseDSQuery';

export class ClickhouseDsDriver extends ClickHouseDriver {
  public static dialectClass() {
    return ClickhouseDSQuery;
  }
  protected queryResponse(query: string, values: unknown[]) {
    process.stdout.write('============= clickhouseds query response\n');
    return super.queryResponse(query, values);
  }
}
