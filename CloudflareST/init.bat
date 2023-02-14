@echo off

call link-file "%~dp0data" "%windir%\System32\drivers\etc" hosts.txt hosts

call link-file "%~dp0data" "%~dp0app" nowip_hosts.txt
call link-file "%~dp0data" "%~dp0app" result_hosts.txt

set SCHTASKS_NAME=CloudflareST

::schtasks /Delete /F /TN %SCHTASKS_NAME%

:: echo.
:: schtasks /Create /F ^
::   /TN %SCHTASKS_NAME% ^
::   /TR %~dp0update-ip.bat ^
::   /ST 00:00 ^
::   /SC HOURLY
::  /RI 60

pause >nul
