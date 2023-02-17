

// wrangler tail c332030-email-worker
export default {
  async email(message, env, ctx) {

    const addresses = [
      'c332030@gmail.com',
      'c332030@msn.cn'
    ]

    const toAddress = message.headers.get("to")

    for(const address of addresses) {
      if(address !== toAddress) {
        await message.forward(address)
      }
    }
  }
}
