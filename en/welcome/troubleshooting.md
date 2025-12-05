# Troubleshooting

### The query processor encountered an unexpected error during execution (HRESULT = 0x80040e19)

May occur during data exchange. Other error message could be "*Internal error. The string routine in file ...dstream.cpp (or dumplog.cpp), line 123 failed with HRESULT 0x8007007a*". Database requires a "repair". Solution:

- Turn database to single-user mode (see **Properties > Options**).
- Execute: `DBCC CHECKDB ('Name of my database', Repair_ALL)`.
- Turn back database to multi-user mode.

### Clear Cache

If you have a problem with your shop, it can often be solved by cleaning the cache. Therefore try to [clear the cache](../smartstore-6-documentation-home/user-guide/system-maintenance/clearing-cache.md) first.