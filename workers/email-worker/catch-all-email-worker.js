
// wrangler tail catch-all-email-worker
export default {
  async email(message, env, ctx) {

    const addresses = [
      'c332030@gmail.com',
      'c332030@msn.cn',
      'c332030@yahoo.com'
    ]

    const toAddress = message.headers.get("to")

    for(const address of addresses) {
      if(address !== toAddress) {
        try {
          await message.forward(address)
        } catch(e) {}
      }
    }
  }
}
