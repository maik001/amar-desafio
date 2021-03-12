# Amar Desafio
Desafio feito em um Contexto de proposta de Estágio

## Serviços a Instalar:
*  Ruby
*  Sqlite
*  Ruby on Rails

## Instalação no Windows:
### Ruby:  
*  Para Instalar o Ruby no windows primeiro deve-se acessar o site oficial do Ruby e Baixar o Instalador da última versão do Ruby: https://rubyinstaller.org/downloads/  
*  Logo após execute o Instalador, desmarque a última opção e Finish  
*  Abra o prompt de comando/cmd e digite o comando ruby -v para garantir que o Ruby foi corretamente instalado. Saida esperada: ruby 3.0.0p0 (2020-12-25 revision *5aff21468)  

### Sqlite3:  
*  Para instalar o sqlite acesse o site https://www.sqlite.org/download.html vá para a sessão Precompiled Binaries for Windows e baixe sqlite-dll-win64-x64-3340100.zip e sqlite-tools-win32-x86-3340100.zip  
*  Descompacte os arquivos zip copie os arquivos dentro de ambos e cole em C:\Ruby30-x64\bin\  
*  No prompt de comando/cmd digite gem install sqlite3-ruby para instalar o sqlite  

### Ruby on Rails:  
*  Para instalar o Ruby on rails é mais simples, apenas rodar o seguinte comando no cmd: gem install rails  
*  Após isso rode o comando rails --version para verificar se foi corretamente instalado. Saída esperada: Rails 6.1.3  

## Testagem no Windows:  
*  Na pasta C:/Users/(Seu Usuario) execute o git clone desta aplicação ou baixe o arquivo zip descompacte e cole  
*  Abra o cmd dentro da sua pasta de usuário e dê um cd na pasta do seu projeto
*  Dentro da pasta do seu projeto execute o comando rails s ou rails server para iniciar o servidor local  
*  Abra o seu navegador e digite a url (http://localhost:3000/) para acessar o projeto no servidor local  


## Instalação no Linux:  
### Ruby:  
Para Instalar o Ruby no  
*  Ubuntu/Debian: sudo apt-get install ruby-full  
*  Fedora/CentOs: sudo yum install ruby  
*  Archlinux: sudo pacman -S ruby  
depois apenas rodar o comando ruby -v para verificar a instalação. Saida esperada: ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]  

### Sqlite3:  
Para instalar o sqlite3 no
*  Ubuntu/Debian: sudo apt-get install sqlite3  
*  Fedora/CentOs: sudo yum install sqlite3  
*  Archlinux: sudo pacman -S sqlite3   
depois sqlite3 --version para verificar a instalação. Saída esperada: 3.34.1 2021-01-20 14:10:07 10e20c0b43500cfb9bbc0eaa061c57514f715d87238f4d835880cd846b9ealt1

### Ruby on Rails:  
gem install rails e rails --version para verificar  

## Testagem no Linux:  
*  No seu terminal vá para a pasta raiz do seu Sistema e vá para srv/http e digite na pasta export PATH="/home/maikf/.local/share/gem/ruby/2.7.0/bin:$PATH", depois pode dar o git clone ou colar o código  
*  cd <nome do projet> e Digite o comando rails s para iniciar o servidor web  
*  agora é só abrir no navegaor a url (http://localhost:3000/) para acessar o projeto no servidor local
