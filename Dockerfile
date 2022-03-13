FROM mcr.microsoft.com/dotnet/aspnet:6.0
COPY ["./bin/release/net6.0/linux-x64/publish", "."]
ENTRYPOINT ["dotnet" ,"secretshare.dll"]