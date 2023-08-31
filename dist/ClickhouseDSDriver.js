"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickhouseDsDriver = void 0;
const clickhouse_driver_1 = require("@cubejs-backend/clickhouse-driver");
const ClickhouseDSQuery_1 = require("./ClickhouseDSQuery");
class ClickhouseDsDriver extends clickhouse_driver_1.ClickHouseDriver {
    static dialectClass() {
        return ClickhouseDSQuery_1.ClickhouseDSQuery;
    }
    queryResponse(query, values) {
        process.stdout.write('============= clickhouseds query response\n');
        return super.queryResponse(query, values);
    }
}
exports.ClickhouseDsDriver = ClickhouseDsDriver;
//# sourceMappingURL=ClickhouseDSDriver.js.map