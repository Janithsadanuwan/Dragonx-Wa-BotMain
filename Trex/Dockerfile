FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot.git /root/Dragonx-Whatsapp-Bot
WORKDIR /root/Dragonx-Whatsapp-Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
