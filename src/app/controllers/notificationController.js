/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Expo } from 'expo-server-sdk';
import Token from '../models/Token';
// ? PushNotificatios
const expo = new Expo();

class NotificationController {
  async index(req, res) {
    const messages = [];
    const somePushTokens = [];

    // Se for vazio o combobox
    if (req.body.recipient === '') {
      const response = await Token.findAll({
        raw: true,
      });

      response.map((elem, ind, obj) => {
        somePushTokens.push(elem.token);
      });
    } else {
      somePushTokens.push(req.body.recipient);
    }

    for (const pushToken of somePushTokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      messages.push({
        to: pushToken,
        sound: 'default',
        title: req.body.title,
        body: req.body.message,
        data: { withSome: 'data' },
      });
    }

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];
    (async () => {
      for (const chunk of chunks) {
        try {
          const ticketChunk = expo.sendPushNotificationsAsync(chunk);
          console.log(ticketChunk);
          tickets.push(...ticketChunk);
        } catch (error) {
          console.error(error);
        }
      }
    })();

    const receiptIds = [];
    for (const ticket of tickets) {
      // NOTE: Not all tickets have IDs; for example, tickets for notifications
      // that could not be enqueued will have error information and no receipt ID.
      if (ticket.id) {
        receiptIds.push(ticket.id);
      }
    }

    const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
    (async () => {
      for (const chunk of receiptIdChunks) {
        try {
          const receipts = expo.getPushNotificationReceiptsAsync(chunk);
          console.log(receipts);

          for (const receiptId in receipts) {
            const { status, message, details } = receipts[receiptId];
            if (status === 'ok') {
              continue;
            } else if (status === 'error') {
              console.error(
                `There was an error sending a notification: ${message}`
              );
              if (details && details.error) {
                console.error(`The error code is ${details.error}`);
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }

  // ? chama a tela
  async mensagem(req, res) {
    // ? Pega todos os tokens do banco
    const response = await Token.findAll({
      raw: true,
    });

    // ? pega o response coloca em users e envia para view mensagem
    res.render('mensagem', { users: response });
    // res.send(response);
  }
}

export default new NotificationController();
