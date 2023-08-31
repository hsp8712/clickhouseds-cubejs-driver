import { ClickHouseDriver } from '@cubejs-backend/clickhouse-driver';
import { ClickhouseDSQuery } from './ClickhouseDSQuery';

export class ClickhouseDsDriver extends ClickHouseDriver {
  public static dialectClass() {
    return ClickhouseDSQuery;
  }
}