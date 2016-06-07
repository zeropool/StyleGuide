
REM Use this if you need to run Monitoring Agent locally for some troubleshooting
REM To run this, 
REM   1) Uncomment entry in MdsConfiguration.csproj in the directory above so this file can get bin-placed
REM   2) Build DataStudioService project - that should binplace this file to $(BIN)\MdsConfig\RunMdsAgent.bat. Run it from that directory since the monitoring agent binaries would be binplaced there too.

REM You may need to modify some environment accordingly (see https://microsoft.sharepoint.com/teams/WAG/EngSys/Monitor/AmdWiki/Onboarding%20-%20Configuring%20and%20Deploying%20the%20Monitoring%20Agent.aspx)


SET MONITORING_DATA_DIRECTORY=%LocalAppData%\Monitoring
SET MONITORING_IDENTITY=use_ip_address
SET MONITORING_VERSION=1.0
SET MONITORING_TENANT=rskumartest1
SET MONITORING_ROLE=role1
SET MONITORING_ROLE_INSTANCE=instance1

REM Use these to log to the 'test' instance (https://test1.diagnostics.monitoring.core.windows.net)
SET MONITORING_INIT_CONFIG=..\MdsConfig\MDSAtlas_Test.xml
SET MONITORING_XSTORE_ACCOUNTS=MdsAtlasEastUSTest#false#atlasmdseastustest#308201F006092A864886F70D010703A08201E1308201DD0201003182014730820143020100302B3017311530130603550403130C41746C61734D647343657274021003151633F5B8949549870491BEA49CE0300D06092A864886F70D0101073000048201008A82C7B555A6C86765D6FC63D4BB228A86CB915398299FA85F5307CE0F55D019B96FE792DBA973CBC7A26C4AD153C81ADF7CA2FBB4BB86388575B346FB770AFE144AEDF1574933541702825FB7574897FD85710AE5D6F77BDCDFC69D16B13EBB21247A8B7CACB9F5B64FD3D89592BE687F3FC0D92237B427325F453FBB71C0271A2760CF09EC939CF4EAAEE8AABCC7E8585C16AA4DB84F7840913D1023B7926072C2D4E38BC0E2EA9ECE8E36DCBFB6A8B52E05372695E9C5448BC6269160A54641B5BFAB16BEA29CE4D37FACBA142C6C1B77A8FA6C36536EAB2B7464A321FFE078378432933452A9D9C689994440F7BACD6CB2D6F2CAE12ABA644E3D7D0A798330818C06092A864886F70D010701301D060960864801650304012A04100CCC36B7A1999DDFD14EEF2FDF83A7A480606FA2EC95D751B6CCE6658931C8F7EC71069C68D9DDFF56AA13A2DA904C5CB766B4B839D363A9506586491AE7015AF99F747961A17297A1C377D755B620F6A9D38D31F09090832357B9194A7F90E873A93C787086399FA48B98491A46A4101B4D#http://table.core.windows.net#http://queue.core.windows.net#http://blob.core.windows.net#CURRENT_USER\MY

..\agent\MonAgentLauncher.exe -useenv