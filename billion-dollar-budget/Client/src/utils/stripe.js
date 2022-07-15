const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const product = await stripe.products.create({
  name: 'Donation',
});

/*
const price = await stripe.prices.create({
  unit_amount: 89000,
  currency: 'usd',
  product: 'prod_M3YtrtA3PeXPCd',
});*/

const price = await stripe.prices.create({
    currency: 'usd',
    custom_unit_amount: {enabled: true},
    product: product.id,
  });

  // Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

export const paymentLink = await stripe.paymentLinks.create({
  line_items: [{price: price, quantity: 1,adjustable_quantity: {enabled: true, minimum: 1, maximum: 10},}],
});

