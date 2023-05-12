#!/bin/sh
UUID=${UUID:-'6786707a-5b46-4b50-a658-e12cb77f98ad'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
