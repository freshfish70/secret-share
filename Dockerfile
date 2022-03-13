FROM mcr.microsoft.com/dotnet/aspnet:6.0
COPY ["./dist", "."]
ENTRYPOINT ["dotnet" ,"secretshare.dll"]