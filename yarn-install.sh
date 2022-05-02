#!/usr/bin/env bash

# Может потребоваться обновить конфигурацию yarn
# yarn config set strict-ssl false

# Раскомментируйте следующую строку в случае проблем с обновлением модулей
# rm -rf ./node_modules

# Для исключения проблем с сетевым соединением используется параметр '--network-timeout 100000'
yarn --network-timeout 100000
