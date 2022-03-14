FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/kavishkaya2/dioo /root/QUEENDIANA
WORKDIR /root/QUEENDIANA/
RUN yarn install --no-audit
RUN git clone https://github.com/kaviyaah2/uploads
RUN cp -R /root/Utils/* /root/QUEENDIANA 
RUN npm install supervisor -g
CMD ["node", "bot.js"]
