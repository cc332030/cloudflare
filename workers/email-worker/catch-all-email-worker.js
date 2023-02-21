
// wrangler tail catch-all-email-worker
export default {
  async email(message, env, ctx) {

    const addresses = [
      'c332030@gmail.com',
      'c332030@msn.cn',
      'c332030@yahoo.com'
    ]

    const toAddress = message.headers.get("to")

    const errors = [];

    for(const address of addresses) {
      if(address !== toAddress) {
        try {
          await message.forward(address)
        } catch(e) {
          errors.push(e);
        }
      }
    }

    if(errors.length > 0) {
      throw errors.slice(0, 1);
    }

  }
}
