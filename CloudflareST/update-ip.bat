@echo off

echo. | call "%~dp0app\cfst_hosts.bat"

echo. | call %~dp0flusndns.bat

pause >nul

:: start /min cmd /c "%~dp0app\cfst_hosts.bat"
:: start /min cmd /c "echo.|%~dp0app\cfst_hosts.bat"
