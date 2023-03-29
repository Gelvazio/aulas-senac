FROM php:7.0-apache

RUN apt-get update && apt-get install -y libpq-dev libcurl3-dev libxml2-dev libjpeg-dev \
    libmagickwand-dev libpng-dev htmldoc openssl imagemagick &&\
   apt-get install --no-install-recommends --assume-yes --quiet ca-certificates curl git &&\
   rm -rf /var/lib/apt/lists/*

RUN pecl install xdebug-2.5.5 imagick && docker-php-ext-enable xdebug imagick
RUN docker-php-ext-install pgsql pdo pdo_pgsql curl xml calendar gd soap
RUN apt-get install -y zlib1g-dev && rm -rf /var/lib/apt/lists/* && docker-php-ext-install zip

RUN rm -rf /var/log/apache2/access.log

COPY config/php.ini /usr/local/etc/php/

RUN a2enmod rewrite

COPY . /var/www/html/
RUN rm -rf /var/www/html/temp
RUN rm -rf /var/www/html/config/*
RUN rmdir /var/www/html/config

RUN mkdir /var/www/html/temp
RUN mkdir -p /var/www/html/temp
RUN chmod 777 /var/www/html/temp