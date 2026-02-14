
/* 
  STRIPE CONTROLLER LOGIC 
  Handles secure payment lifecycle
*/

// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const stripeController = {
//   createIntent: async (req, res) => {
//     const { items, currency = 'usd' } = req.body;
    
//     const amount = items.reduce((sum, item) => sum + item.price, 0) * 100; // In cents

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency,
//         metadata: {
//           userId: req.user.id,
//           items: JSON.stringify(items.map(i => i.id))
//         }
//       });

//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
// };
