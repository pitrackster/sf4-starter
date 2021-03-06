FROM ubuntu:19.04

RUN apt-get -qqq update && DEBIAN_FRONTEND=noninteractive apt-get install -qqq -y \
        apt-utils \
        git \
        make \
        vim \
        wget \
        curl \
        gdebi \
        apache2 \
        openssl \
        python2.7 \
        python-pip \
        php7.2 \
        libapache2-mod-php7.2 \
        php7.2-bcmath \
        php7.2-cli \
        php7.2-common \
        php7.2-curl \
        php7.2-dev \
        php7.2-fpm \
        php7.2-intl \
        php7.2-json \
        php7.2-mbstring \
        php7.2-pgsql \
        php7.2-opcache \
        php7.2-readline \
        php7.2-xml \
        php7.2-zip \
        php7.2-gd \
        php-common \
        php-imagick \
        postgresql-11

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer && chmod +x /usr/local/bin/composer

# Install npm
RUN curl -o /usr/local/bin/n https://raw.githubusercontent.com/visionmedia/n/master/bin/n
RUN chmod +x /usr/local/bin/n
RUN n stable

RUN mkdir /var/www/public

# Configure Apache
RUN rm -rf /etc/apache2/sites-available/* && rm -rf /etc/apache2/sites-enabled/*

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
ADD ./my.conf /etc/apache2/sites-available/app.conf

RUN a2ensite app.conf
RUN a2enmod headers
RUN a2enmod deflate
RUN a2enmod rewrite
RUN a2enmod ssl
RUN service apache2 restart

WORKDIR /var/www/

# as www-data user
RUN usermod -u 1000 www-data

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
